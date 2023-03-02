<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CandidateModel extends CI_Model
{
    private $tblName;

    public function __construct()
    {
        parent::__construct();
        $this->load->database();

        $this->tblName = "tbl_candidates";
    }

    public function createCandidate($eventId, $no, $campaign, $name, $photo)
    {
        $data = array(
            'event_id' => $eventId,
            'candi_no' => $no,
            'candi_name' => $name,
            'candi_campaign' => $campaign,
            'candi_photo' => $photo,
        );
        $this->db->insert($this->tblName, $data);

        $events = $this->db->order_by('id', 'DESC')->get($this->tblName)->result_array();
        return $events[0];
    }

    public function getCandidatesByEventId($eventId)
    {
        $candidates = $this->db->select('*')->where('event_id', $eventId)->get($this->tblName)->result_array();

        return $candidates;
    }
}