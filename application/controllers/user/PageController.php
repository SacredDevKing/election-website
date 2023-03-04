<?php defined('BASEPATH') or exit('No direct script access allowed');

class PageController extends UserBaseController
{
    public function __construct()
    {
        parent::__construct();
    }

    /*
     *   Display No Event Page 
     */
    public function noEvent()
    {
        if (!$this->isNoEvent())
            redirect('/');

        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/no_event.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/no_event', $this->bodyData);
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /*
     *   Display Waiting Event Start Page 
     */
    public function waitingStart()
    {
        if (!$this->isWaitingStart())
            redirect('/');

        $this->headerData[''] = '';
        $event = $this->eventModel->getActiveEvent();

        $openDate = new DateTime($event['open_date']);
        $openDateString = $openDate->format('j M Y, h:i');

        $this->bodyData['event'] = $event;
        $this->bodyData['openDate'] = $openDateString;

        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/jquery.countdown.min.js',
            'assets/custom/js/user/waiting_start.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/waiting_start', $this->bodyData);
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /*
     *   Display Waiting Event End Page 
     */
    public function waitingEnd()
    {
        if (!$this->isWaitingEnd())
            redirect('/');

        $this->headerData[''] = '';
        $event = $this->eventModel->getActiveEvent();

        $closeDate = new DateTime($event['close_date']);
        $closeDateString = $closeDate->format('j M Y, h:i');

        $this->bodyData['event'] = $event;
        $this->bodyData['closeDate'] = $closeDateString;

        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/jquery.countdown.min.js',
            'assets/custom/js/user/waiting_end.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/waiting_end', $this->bodyData);
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /*
     *   Display Voting Event page
     */
    public function vote()
    {
        if (!$this->isAllowVote())
            redirect('/');

        $this->headerData[''] = '';
        $this->footerData['pageJsArr'] = array(
            'assets/global/js/hammerjs.js',
            'assets/global/js/jquery.hammer.js',
            'assets/global/js/jquery.slimscroll.js',
            'assets/global/js/smart-resize.js',
            'assets/global/js/fancybox.min.js',
            'assets/global/js/venobox.js',
            'assets/global/js/forms/switchery.js',
            'assets/global/js/forms/select2.min.js',
            'assets/global/js/core.js',
            'assets/custom/js/user/vote.js'
        );

        $event = $this->eventModel->getActiveEvent();
        $candidates = $this->candidateModel->getCandidatesByEventId($event['id']);

        $this->bodyData['event'] = $event;
        $this->bodyData['candidates'] = $candidates;

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/vote', $this->bodyData);
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /*
     *   Do Vote function
     */
    public function addVote()
    {
        $event = $this->eventModel->getActiveEvent();
        $eventId = $event['id'];

        $userData = $this->session->userdata('curUser');
        $userId = $userData['user_id'];

        $candidates = $this->input->post('candidates');

        $this->voteModel->addVote($userId, $eventId, $candidates);

        $this->ajaxRes['status'] = 'success';
        echo json_encode($this->ajaxRes);
    }

    /*
     *   Display Voting Result
     */
    public function result()
    {
        // if (!$this->isAllowToResult())
        //     redirect('/');

        $this->headerData[''] = '';
        $this->footerData['pageJsArr'] = array(
            'assets/global/js/d3.min.js',
            'assets/global/js/c3.min.js',
            'assets/custom/js/user/result.js'
        );

        $event = $this->eventModel->getActiveEvent();
        $candidates = $this->candidateModel->getCandidatesByEventIdOrderByVote($event['id']);

        $this->bodyData['event'] = $event;
        $this->bodyData['candidates'] = $candidates;

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/result', $this->bodyData);
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /**
     * Display disclamer
     */
    public function disclamer()
    {
        if (!$this->isAllowVote())
            redirect('/');

        $this->headerData[''] = '';
        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/disclamer.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/disclamer', $this->bodyData);
        $this->load->view('user/layouts/footer', $this->footerData);
    }
}