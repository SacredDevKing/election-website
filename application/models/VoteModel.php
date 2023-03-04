<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class VoteModel extends CI_Model
{
    private $tblName;

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->tblName = "tbl_votes";
    }

    public function getVoteState($userId, $eventId)
    {
        $array = array('user_id' => $userId, 'event_id' => $eventId);
        $events = $this->db->select('*')->where($array)->get($this->tblName)->result_array();
        if ($events != null)
            return $events;
        return null;
    }

    public function addVote($userId, $eventId, $candidates)
    {
        foreach ($candidates as $candidate) {
            $data = array(
                'event_id' => $eventId,
                'user_id' => $userId,
                'candidate_id' => $candidate
            );
            $this->db->insert($this->tblName, $data);
        }
    }
}