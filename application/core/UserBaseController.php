<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class UserBaseController extends BaseController
{
    public function __construct()
    {
        parent::__construct();

        if (!$this->isUserLogined())
            redirect('/');
    }

    /**
     * Return true when user is avaiable in session.
     * @return boolean
     */
    private function isUserLogined()
    {
        $user = $this->session->userdata('curUser');
        if (!$user)
            return false;

        return true;
    }
}