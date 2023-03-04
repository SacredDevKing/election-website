<?php defined('BASEPATH') or exit('No direct script access allowed');
class RegisterController extends BaseController
{
    public function __construct()
    {
        parent::__construct();
        
        $this->load->model('eventModel');
        $this->load->model('voteModel');
    }

    public function index()
    {
        $this->headerData[''] = '';
        $this->footerData['pageJsArr'] = array('assets/custom/js/auth/register.js');

        $this->load->view('auth/layouts/header', $this->headerData);
        $this->load->view('auth/register', $this->bodyData);
        $this->load->view('auth/layouts/footer', $this->footerData);
    }

    public function doRegister()
    {
        $this->form_validation->set_rules(
            'name',
            'name',
            'required',
            array(
                'required' => 'Name is required.',
            )
        );
        $this->form_validation->set_rules(
            'email',
            'email',
            'required|valid_email',
            array(
                'required' => 'Email is required.',
                'valid_email' => 'Email is invalid.'
            )
        );
        $this->form_validation->set_rules(
            'password',
            'password',
            'required|min_length[6]|max_length[12]',
            array(
                'required' => 'Password is required.',
                'min_length' => 'Password enter at least 6 characters.',
                'max_length' => 'Password enter no more than 12 characters.'
            )
        );
        if (!$this->form_validation->run()) {
            $errors = validation_errors();
            $data = array('errors' => $errors);

            echo json_encode($data);
            return;
        }

        $name = $this->input->post('name');
        $email = $this->input->post('email');
        $password = $this->input->post('password');
        $newUserId = $this->ion_auth->register($name, $password, $email);
        if ($newUserId) {
            // If the register is successful.

            $this->ajaxRes['is_registered'] = true;
            if ($this->ion_auth->login($email, $password)) {
                // If the login is successful
                $this->ajaxRes['is_logined'] = true;
                $this->ajaxRes['messages'] = $this->ion_auth->messages();

                $user = $this->session->userdata('curUser');
                if ($user['is_admin'] == ROLE_ADMIN)
                    $this->ajaxRes['return_url'] = 'manage_event';
                else if ($user['is_admin'] == ROLE_USER) {
                    // Check event status
                    $event = $this->eventModel->getActiveEvent();
                    if ($event) {
                        $openTimeStamp = date_timestamp_get(date_create($event['open_date']));
                        $closeTimeStamp = date_timestamp_get(date_create($event['close_date']));
                        $nowTimeStamp = time();

                        // var_dump($openTimeStamp);
                        // var_dump($closeTimeStamp);
                        // var_dump($nowTimeStamp);
                        // exit;

                        if ($nowTimeStamp < $openTimeStamp) {
                            $this->ajaxRes['return_url'] = 'waiting-start';
                        } else if ($nowTimeStamp >= $openTimeStamp && $nowTimeStamp <= $closeTimeStamp) {

                            // check did vote
                            $voteState = $this->voteModel->getVoteState($user['user_id'], $event['id']);
                            if ($voteState) {
                                // if did vote , redirect waiting end page
                                $this->ajaxRes['return_url'] = 'waiting-end';
                            } else {
                                // if did not vote, redirect voting page
                                $this->ajaxRes['return_url'] = 'disclamer';
                            }
                        } else {
                            $this->ajaxRes['return_url'] = 'result';
                        }
                    } else {
                        $this->ajaxRes['return_url'] = 'noevent';
                    }
                }
            } else {
                // If the login was un-successful
                $this->ajaxRes['is_logined'] = false;
                $this->ajaxRes['errors'] = $this->ion_auth->errors();
            }
        } else {
            // If register is unsuccessful.
            $this->ajaxRes['is_registered'] = false;
            $this->ajaxRes['is_logined'] = false;
            $this->ajaxRes['errors'] = $this->ion_auth->errors();
        }

        echo json_encode($this->ajaxRes);
    }
}