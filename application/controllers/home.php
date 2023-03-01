<?php defined('BASEPATH') or exit('No direct script access allowed');

class Home extends App_Controller
{
	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		redirect('/login');
		// $this->body_class[] = 'home';

		// $this->page_title = 'Welcome!';

		// $this->current_section = 'home';

		// $this->render_page('home/index');
	}
}