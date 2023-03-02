<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class EventModel extends CI_Model
{
    private $tblName;

    public function __construct()
    {
        parent::__construct();
        $this->load->database();

        $this->tblName = "tbl_events";
    }

    public function createEvent($name, $openDate, $closeDate, $banner)
    {
        $data = array(
            'name' => $name,
            'open_date' => $openDate,
            'close_date' => $closeDate,
            'event_banner' => $banner,
        );
        $this->db->insert($this->tblName, $data);

        $event = $this->db->get_where($this->tblName, array('name' => $name))->result_array();
        return $event[0];
    }

    public function updateEvent($id, $name, $openDate, $closeDate, $banner)
    {
        if ($banner != null) {
            $data = array(
                'name' => $name,
                'open_date' => $openDate,
                'close_date' => $closeDate,
                'event_banner' => $banner,
            );
        } else {
            $data = array(
                'name' => $name,
                'open_date' => $openDate,
                'close_date' => $closeDate,
            );
        }

        $this->db->where('id', $id);
        $this->db->update($this->tblName, $data);

        $event = $this->db->get_where($this->tblName, array('id' => $id))->result_array();
        return $event[0];
    }

    public function deleteEvent($id)
    {
        $this->db->where('id', $id);
        $this->db->delete($this->tblName);
    }

    public function activeEvent($id, $isActive)
    {
        $data = array(
            'is_active' => $isActive,
        );

        $this->db->where('id', $id);
        $this->db->update($this->tblName, $data);
    }

    public function getAllEvents()
    {
        $events = $this->db->select('*')->get($this->tblName)->result_array();
        return $events;
    }

    public function getEventByName($name)
    {
        $events = $this->db->select('*')->where('name', $name)->get($this->tblName)->result_array();
        if ($events != null)
            return $events[0];
        return null;
    }

    public function getEventById($Id)
    {
        $events = $this->db->select('*')->where('id', $Id)->get($this->tblName)->result_array();
        if ($events != null)
            return $events[0];
        return null;
    }

    public function getActiveEvent()
    {
        $events = $this->db->select('*')->where('is_active', STATUS_ACTIVE)->get($this->tblName)->result_array();
        if ($events != null)
            return $events[0];
        return null;
    }
}