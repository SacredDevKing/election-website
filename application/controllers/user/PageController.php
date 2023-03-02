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
        $this->footerData[''] = '';
        $this->footerData['pageJsArr'] = array(
            'assets/custom/js/user/jquery.countdown.min.js',
            'assets/custom/js/user/waiting_start.js'
        );

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/waiting_start');
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

        $this->load->view('user/layouts/header', $this->headerData);
        $this->load->view('user/vote');
        $this->load->view('user/layouts/footer', $this->footerData);
    }
}