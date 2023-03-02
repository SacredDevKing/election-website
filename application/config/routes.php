<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There area two reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router what URI segments to use if those provided
| in the URL cannot be matched to a valid route.
|
*/

$route['default_controller'] = "home";
$route['404_override'] = '';

// ---------------------- BEGIN AUTHENTICATION ---------------------------
$route['login'] = 'auth/LoginController';
$route['login/do_login'] = 'auth/LoginController/doLogin';
$route['login/do_logout'] = 'auth/LoginController/doLogout';

$route['register'] = 'auth/RegisterController';
$route['register/do_register'] = 'auth/RegisterController/doRegister';

$route['logout'] = 'user/logout';
$route['forgot-password'] = 'user/forgot_password';
// ----------------------- END AUTHENTICATION ----------------------------

// ----------------------- BEGIN ADMIN ROUTES ----------------------------
$route['manage_event'] = 'admin/ManageEventController';
$route['manage_event/create_event'] = 'admin/ManageEventController/createEvent';
$route['manage_event/update_event'] = 'admin/ManageEventController/updateEvent';
$route['manage_event/delete_event'] = 'admin/ManageEventController/deleteEvent';
$route['manage_event/active_event'] = 'admin/ManageEventController/activeEvent';
$route['manage_event/get_all_events'] = 'admin/ManageEventController/getAllEvents';
$route['manage_event/get_event'] = 'admin/ManageEventController/getEventById';

$route['manage_event/create_candidate'] = 'admin/ManageEventController/createCandidate';
// ------------------------ END ADMIN ROUTES -----------------------------

// $route['my-account'] = 'user/account';

/* End of file routes.php */
/* Location: ./application/config/routes.php */