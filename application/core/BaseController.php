<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class BaseController extends CI_Controller
{
    protected $randNum;
    protected $headerData = array();
    protected $bodyData = array();
    protected $footerData = array();
    protected $ajaxRes = array();

    public function __construct()
    {
        parent::__construct();

        $this->randNum = rand();
        $this->headerData['randNum'] = $this->randNum;
        $this->bodyData['randNum'] = $this->randNum;
        $this->footerData['randNum'] = $this->randNum;
    }
}