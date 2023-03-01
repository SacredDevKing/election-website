<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class AdminBaseController extends BaseController
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

        if ($user['is_admin'] != ROLE_ADMIN)
            return false;

        return true;
    }
}