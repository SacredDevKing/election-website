<?php
/**
 * Validation Rules
 *
 */

$config = array(
    'user_login' => array(
        array(
            'field' => 'email_address',
            'label' => 'Email address',
            'rules' => 'trim|required|xss_clean|min_length[2]|max_length[65]|valid_emailaddress'
            ),
        array(
            'field' => 'password',
            'label' => 'Password',
            'rules' => 'trim|required|xss_clean|min_length[8]|max_length[20]'
            ),
    ),
    'user_forgot_password' => array(
        array(
            'field' => 'email',
            'label' => 'Email',
            'rules' => 'trim|required|xss_clean|min_length[2]|max_length[65]|valid_email'
            )
    )
);