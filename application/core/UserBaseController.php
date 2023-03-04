<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class UserBaseController extends BaseController
{
    public function __construct()
    {
        parent::__construct();

        // Load Models
        $this->load->model('eventModel');
        $this->load->model('voteModel');
        $this->load->model('candidateModel');

        if (!$this->isUserLogined())
            redirect('/');
    }

    /**
     * Return true when user is avaiable in session.
     * @return boolean
     */
    private function isUserLogined()
    {
        $user = $this->session->userdata('curUser');
        if (!$user)
            return false;

        return true;
    }

    /**
     * Check about current state is no event.
     */
    protected function isNoEvent()
    {
        $event = $this->eventModel->getActiveEvent();
        if (!$event)
            return true;

        return false;
    }

    /**
     * Check about current state is waiting start.
     */
    protected function isWaitingStart()
    {
        $event = $this->eventModel->getActiveEvent();
        if ($event) {
            $openTimeStamp = date_timestamp_get(date_create($event['open_date']));
            $nowTimeStamp = time();
            if ($nowTimeStamp < $openTimeStamp)
                return true;
        }

        return false;
    }

    /**
     * Check about current state is waiting end.
     */
    protected function isWaitingEnd()
    {
        $event = $this->eventModel->getActiveEvent();
        $user = $this->session->userdata('curUser');

        if ($event && $user) {
            $openTimeStamp = date_timestamp_get(date_create($event['open_date']));
            $closeTimeStamp = date_timestamp_get(date_create($event['close_date']));
            $nowTimeStamp = time();

            if ($nowTimeStamp >= $openTimeStamp && $nowTimeStamp <= $closeTimeStamp) {
                $voteState = $this->voteModel->getVoteState($user['user_id'], $event['id']);
                if ($voteState) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Check about current state is allow to can vote
     */
    protected function isAllowVote()
    {
        $event = $this->eventModel->getActiveEvent();
        $user = $this->session->userdata('curUser');

        if ($event && $user) {
            $openTimeStamp = date_timestamp_get(date_create($event['open_date']));
            $closeTimeStamp = date_timestamp_get(date_create($event['close_date']));
            $nowTimeStamp = time();

            if ($nowTimeStamp >= $openTimeStamp && $nowTimeStamp <= $closeTimeStamp) {
                $voteState = $this->voteModel->getVoteState($user['user_id'], $event['id']);
                if (!$voteState)
                    return true;
            }
        }

        return false;
    }

    /**
     * Check about current state is allow to go result page
     */
    protected function isAllowToResult()
    {
        $event = $this->eventModel->getActiveEvent();
        $user = $this->session->userdata('curUser');

        if ($event && $user) {
            $closeTimeStamp = date_timestamp_get(date_create($event['close_date']));
            $nowTimeStamp = time();

            if ($nowTimeStamp > $closeTimeStamp)
                return true;
        }

        return false;
    }
}