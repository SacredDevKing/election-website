<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Custom Form Validation Methods
 *
 */
class App_Form_validation extends CI_Form_validation
{
    /**
     * Class constructor
     */
    public function __construct($rules = array())
    {
        parent::__construct($rules);
        $this->set_error_delimiters('<span class="error help-block">', '</span>');
    }

    /**
     * Check if the current email is in the list of blocked emails
     *
     * @param string $email
     * @return boolean
     */
    public function blocked_email_domains($email)
    {
        $tmp = explode('@', $email);
        if (count($tmp) == 2) $domain = $tmp[1];
        else $domain = 'blocked.domain';

        $blocked_domains = $this->CI->config->item('blocked_domains');

        if (is_array($blocked_domains))
        {
            foreach ($blocked_domains as $blocked_domain)
            {
                if (strtolower($domain) == strtolower($blocked_domain))
                {
                    $this->set_message(__FUNCTION__, 'Please use a different email address.');
                    return FALSE;
                }
            }
        }
        return TRUE;
    }

    /**
     * Check if the current email is unique or not already registered
     *
     * @param string $email
     * @return boolean
     */
    public function unique_email($email)
    {
        $user = $this->CI->ion_auth->get_user_by_email($email);
        
        if (count($user) == 0)
            return TRUE;

        $this->set_message(__FUNCTION__, 'The email address you entered is already registered.');
        return FALSE;
    }
    
    /**
     * Check if the current username is unique or already taken
     * @param string $username
     * @return boolean
     */
    public function unique_username($username)
    {
        $user = $this->CI->ion_auth->get_user_by_username($username);
        
        if (count($user) == 0)
        {
            return TRUE;
        }
        $this->set_message(__FUNCTION__, "The username \"{$username}\" is already taken, please select a different username.");
        return FALSE;
    }
    
    /**
     * Check if given group is a valid public (non admin) group
     * @param string $group
     * @return boolean
     */
    public function valid_public_group($group)
    {
        $group = trim(strtolower($group));
        
        if ($group == 'admin')
        {
            $this->set_message(__FUNCTION__, 'Please select a valid user type.');
            return FALSE;
        }
        
        $system_group = $this->CI->ion_auth->get_group_by_name($group);
        if ($system_group !== FALSE)
            return TRUE;
        else
        {
            $this->set_message(__FUNCTION__, 'Please select a valid user type.');
            return FALSE;
        }
    }
    
    /**
     * Check if the given username exists
     * 
     * @param string $username
     * @return boolean
     */
    public function valid_username($username)
    {
        $user = $this->CI->ion_auth->get_user_by_username($username);
        
        if (count($user) > 0)
        {
            return TRUE;
        }
        $this->set_message(__FUNCTION__, "The username \"{$username}\" does not exists.");
        return FALSE;
    }
    
    /**
     * Check if the given email address exists
     * 
     * @param string $emailaddress
     * @return boolean
     */
    public function valid_emailaddress($emailaddress)
    {
        $user = $this->CI->ion_auth->where('email', $emailaddress)->users()->row();
        
        if ($user)
        {
            $this->set_message(__FUNCTION__, "La dirección {$emailaddress} ya está registrada.");
            return FALSE;
        }

        return TRUE;
    }
    
}
