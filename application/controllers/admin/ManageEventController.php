<?php defined('BASEPATH') or exit('No direct script access allowed');
class ManageEventController extends AdminBaseController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->headerData[''] = '';
        $this->footerData['pageJsArr'] = array('assets/custom/js/admin/manage_event.js');

        $this->load->view('admin/layouts/header', $this->headerData);
        $this->load->view('admin/manage_event', $this->bodyData);
        $this->load->view('admin/layouts/footer', $this->footerData);
    }
}