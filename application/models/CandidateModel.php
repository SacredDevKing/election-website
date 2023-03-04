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

    public function updateCandidate($id, $no, $campaign, $name, $photo)
    {
        if ($photo != null) {
            $data = array(
                'candi_no' => $no,
                'candi_name' => $name,
                'candi_campaign' => $campaign,
                'candi_photo' => $photo,
            );
        } else {
            $data = array(
                'candi_no' => $no,
                'candi_name' => $name,
                'candi_campaign' => $campaign,
            );
        }

        $this->db->where('id', $id);
        $this->db->update($this->tblName, $data);

        $event = $this->db->get_where($this->tblName, array('id' => $id))->result_array();
        return $event[0];
    }

    public function deleteCandidate($id)
    {
        $this->db->where('id', $id);
        $this->db->delete($this->tblName);
    }

    public function getCandidatesByEventId($eventId)
    {
        $candidates = $this->db->select('*')->where('event_id', $eventId)->get($this->tblName)->result_array();

        return $candidates;
    }

    public function getCandidatesByEventIdOrderByVote($eventId)
    {
        $candidates = $this->db->select('*')->where('event_id', $eventId)->order_by('vote_cnt', 'DESC')->get($this->tblName)->result_array();
        return $candidates;
    }
}