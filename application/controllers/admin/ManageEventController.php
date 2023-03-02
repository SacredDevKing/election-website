<?php defined('BASEPATH') or exit('No direct script access allowed');
class ManageEventController extends AdminBaseController
{
    public function __construct()
    {
        parent::__construct();

        $this->load->helper('mydate');

        $this->load->model('eventModel');
        $this->load->model('candidateModel');
    }

    public function index()
    {
        $this->headerData['pageCssArr'] = array('assets/custom/css/admin/manage_event.css');
        $this->footerData['pageJsArr'] = array('assets/custom/js/admin/manage_event.js');

        $this->load->view('admin/layouts/header', $this->headerData);
        $this->load->view('admin/manage_event', $this->bodyData);
        $this->load->view('admin/layouts/footer', $this->footerData);
    }

    public function createEvent()
    {
        // Check Validation
        $this->form_validation->set_rules('name', 'name', 'required');
        $this->form_validation->set_rules('openDate', 'openDate', 'required');
        $this->form_validation->set_rules('openTime', 'openTime', 'required');
        $this->form_validation->set_rules('closeDate', 'closeDate', 'required');
        $this->form_validation->set_rules('closeTime', 'closeTime', 'required');
        $this->form_validation->set_rules('banner', 'banner', 'required');

        // Create Event
        $name = $this->input->post('name');
        $openDate = $this->input->post('openDate');
        $openTime = $this->input->post('openTime');
        $closeDate = $this->input->post('closeDate');
        $closeTime = $this->input->post('closeTime');
        $banner = $this->input->post('banner');

        $openDate = parseToDatetime($openDate, $openTime);
        $closeDate = parseToDatetime($closeDate, $closeTime);

        $event = $this->eventModel->getEventByName($name);
        if ($event) {
            $errors = array();
            $errors['name'] = "This event is already exist.";
            $this->ajaxRes['status'] = 'failed';
            $this->ajaxRes['errors'] = $errors;
            echo json_encode($this->ajaxRes);
            return;
        }
        $event = $this->eventModel->createEvent($name, $openDate, $closeDate, $banner);

        $this->ajaxRes['status'] = 'success';
        $this->ajaxRes['event'] = $event;
        echo json_encode($this->ajaxRes);
    }

    public function updateEvent()
    {
        // Check Validation
        $this->form_validation->set_rules('id', 'id', 'required');
        $this->form_validation->set_rules('name', 'name', 'required');
        $this->form_validation->set_rules('openDate', 'openDate', 'required');
        $this->form_validation->set_rules('openTime', 'openTime', 'required');
        $this->form_validation->set_rules('closeDate', 'closeDate', 'required');
        $this->form_validation->set_rules('closeTime', 'closeTime', 'required');
        $this->form_validation->set_rules('banner', 'banner', 'required');

        // Update Event
        $id = $this->input->post('id');
        $name = $this->input->post('name');
        $openDate = $this->input->post('openDate');
        $openTime = $this->input->post('openTime');
        $closeDate = $this->input->post('closeDate');
        $closeTime = $this->input->post('closeTime');
        $banner = $this->input->post('banner');

        $openDate = parseToDatetime($openDate, $openTime);
        $closeDate = parseToDatetime($closeDate, $closeTime);

        $event = $this->eventModel->getEventByName($name);
        if ($event && $event['id'] != $id) {
            $errors = array();
            $errors['name'] = "This event is already exist.";
            $this->ajaxRes['status'] = 'failed';
            $this->ajaxRes['errors'] = $errors;
            echo json_encode($this->ajaxRes);
            return;
        }

        $this->eventModel->updateEvent($id, $name, $openDate, $closeDate, $banner);

        $this->ajaxRes['status'] = 'success';
        echo json_encode($this->ajaxRes);
    }

    public function deleteEvent()
    {
        $id = $this->input->post('id');
        $this->eventModel->deleteEvent($id);

        $this->ajaxRes['status'] = 'success';
        echo json_encode($this->ajaxRes);
    }

    public function activeEvent()
    {
        $id = $this->input->post('id');
        $isActive = $this->input->post('isActive');

        $activeEvent = $this->eventModel->getActiveEvent();
        if ($activeEvent && $activeEvent['id'] != $id) {
            $errors = array();
            $errors['event'] = "Only 1 Event can set to active at a time. If another event still in active this event cannot set as active.";
            $this->ajaxRes['status'] = 'failed';
            $this->ajaxRes['errors'] = $errors;
            echo json_encode($this->ajaxRes);
            return;
        }

        $isActive = $isActive == STATUS_ACTIVE ? STATUS_DISACTIVE : STATUS_ACTIVE;
        $this->eventModel->activeEvent($id, $isActive);
        $activatedEvent = $this->eventModel->getEventById($id);

        $this->ajaxRes['status'] = 'success';
        $this->ajaxRes['event'] = $activatedEvent;
        echo json_encode($this->ajaxRes);
    }

    public function getAllEvents()
    {
        $events = $this->eventModel->getAllEvents();
        $this->ajaxRes['events'] = $events;
        echo json_encode($this->ajaxRes);
    }

    public function getEventById()
    {
        $eventId = $this->input->post('eventId');

        // Get event
        $event = $this->eventModel->getEventById($eventId);
        $event['opendate'] = parseDatetimeToDate($event['open_date']);
        $event['opentime'] = parseDatetimeToTime($event['open_date']);
        $event['closedate'] = parseDatetimeToDate($event['close_date']);
        $event['closetime'] = parseDatetimeToTime($event['close_date']);

        // Get candidates
        $candidates = $this->candidateModel->getCandidatesByEventId($eventId);

        $this->ajaxRes['event'] = $event;
        $this->ajaxRes['candidates'] = $candidates;
        echo json_encode($this->ajaxRes);
    }



    // ------------------------------ Candidate ----------------------------------------
    public function createCandidate()
    {
        // Check Validation
        $this->form_validation->set_rules('no', 'no', 'required');
        $this->form_validation->set_rules('eventId', 'eventId', 'required');
        $this->form_validation->set_rules('campaign', 'campaign', 'required');
        $this->form_validation->set_rules('name', 'name', 'required');
        $this->form_validation->set_rules('photo', 'photo', 'required');

        // Create Candidate
        $eventId = $this->input->post('eventId');
        $no = $this->input->post('no');
        $campaign = $this->input->post('campaign');
        $name = $this->input->post('name');
        $photo = $this->input->post('photo');

        $candidate = $this->candidateModel->createCandidate($eventId, $no, $campaign, $name, $photo);

        $this->ajaxRes['status'] = 'success';
        $this->ajaxRes['candidate'] = $candidate;
        echo json_encode($this->ajaxRes);
    }
}