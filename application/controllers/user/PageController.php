<?php defined('BASEPATH') or exit('No direct script access allowed');

class PageController extends UserBaseController
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('eventModel');
        $this->load->model('candidateModel');
    }

    /*
    *   Display No Event Page 
    */
    public function noEvent()
    {
        $this->headerData[''] = '';
        $this->footerData[''] = '';

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/no_event');
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /*
    *   Display Waiting Event Start Page 
    */
    public function waitingStart()
    {
        $this->headerData[''] = '';
        $event = $this->eventModel->getActiveEvent();
        
        $openDate = new DateTime($event['open_date']);
        $openDateString = $openDate->format('j M Y, h:i');

        $this->bodyData['event'] = $event;
        $this->bodyData['openDate'] = $openDateString;
        
        $this->footerData[''] = '';
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
        $this->headerData[''] = '';
        $this->footerData[''] = '';
        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/jquery.countdown.min.js',
            'assets/custom/js/user/waiting_end.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/waiting_end');
        $this->load->view('user/layouts/footer', $this->footerData);
    }

    /*
    *   Display Voting Event
    */
    public function vote()
    {
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
    *   Display Voting Result
    */
    public function result()
    {
        $this->headerData[''] = '';
        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/result.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/result');
        $this->load->view('user/layouts/footer', $this->footerData);
    }
}