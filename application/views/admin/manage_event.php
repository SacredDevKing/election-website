<body class="material-menu" id="top">
	<div id="preloader">
		<div id="status">
			<div class="loader">
				<div class="loader-inner ball-pulse">
					<div class="bg-blue"></div>
					<div class="bg-amber"></div>
					<div class="bg-success"></div>
				</div>
			</div>
		</div>
	</div>
	<header class="main-nav clearfix">
	</header>

	<!--Page Container-->
	<section class="main-container">
		<!--Page Header-->
		<div class="header">
			<div class="header-content">
				<div class="page-title">
					<i class="icon-lifebuoy position-left"></i> Event Management
				</div>
				<!-- <ul class="breadcrumb">
					<li><a href="index.htm">Home</a></li>
					<li class="active">Support</li>
				</ul> -->
			</div>
		</div>
		<!--/Page Header-->

		<div class="container-fluid page-content">
			<div class="row">
				<div class="col-xs-12 col-md-3 col-sm-4">
					<!-- Event List -->
					<div class="panel panel-flat">
						<ul id="event_list" class="nav navigation no-padding-top">
							<li class="navigation-header">Event</li>
						</ul>
					</div>
					<!-- /Event List -->
					<button id="btn_add_event" type="button" class="btn bg-blue">Add New Event</button>
					<button id="btn_logout" type="button" class="btn bg-danger">Logout</button>
				</div>
				<div class="col-xs-12 col-md-9 col-sm-8">
					<!-- Event Info -->
					<div class="panel panel-flat">
						<div class="panel-heading">
							<h5 class="panel-title">Info</h5>
						</div>
						<div class="panel-body">
							<form class="form-horizontal">
								<input id="event_id" type="hidden" value="-1" />
								<input id="event_isactive" type="hidden" value="0" />
								<!-- Event Name -->
								<div class="form-group">
									<label class="control-label col-md-12"> Event Name
										<span class="text-danger">*</span>
									</label>
									<div class="col-md-12">
										<input id="event_name" type="text" class="form-control"
											placeholder="Election 2025">
										<label id="error_event_name" class="validation-error" for="event_name"></label>
									</div>
								</div>
								<!-- /Event Name -->

								<!-- Vote Open Date Time -->
								<div class="form-group">
									<label class="control-label col-md-12"> Vote Open Date Time
										<span class="text-danger">*</span>
									</label>
									<div class="col-md-6">
										<div class="input-group">
											<span class="input-group-addon"><i class="icon-calendar"></i></span>
											<input id="event_vote_opendate" type="text" class="form-control pickadate"
												placeholder="Select">
										</div>
										<label id="error_event_vote_opendate" class="validation-error"
											for="event_vote_opendate"></label>
									</div>
									<div class="col-md-6">
										<div class="input-group">
											<span class="input-group-addon"><i class="icon-alarm"></i></span>
											<input id="event_vote_opentime" type="text" class="form-control pickatime"
												placeholder="Select">
										</div>
										<label id="error_event_vote_opentime" class="validation-error"
											for="event_vote_opentime"></label>
									</div>
								</div>
								<!-- /Vote Open Date Time -->

								<!-- Vote Close Date Time -->
								<div class="form-group">
									<label class="control-label col-md-12"> Vote Close Date Time
										<span class="text-danger">*</span>
									</label>
									<div class="col-md-6">
										<div class="input-group">
											<span class="input-group-addon"><i class="icon-calendar"></i></span>
											<input id="event_vote_closedate" type="text" class="form-control pickadate"
												placeholder="Select">
										</div>
										<label id="error_event_vote_closedate" class="validation-error"
											for="event_vote_closedate"></label>
									</div>
									<div class="col-md-6">
										<div class="input-group">
											<span class="input-group-addon"><i class="icon-alarm"></i></span>
											<input id="event_vote_closetime" type="text" class="form-control pickatime"
												placeholder="Select">
										</div>
										<label id="error_event_vote_closetime" class="validation-error"
											for="event_vote_closetime"></label>
									</div>
								</div>
								<!-- /Vote Close Date Time -->

								<!-- Event Banner -->
								<div class="form-group">
									<label class="control-label col-md-12"> Event Banner (600 * 200 px)
										<span class="text-danger">*</span>
									</label>
									<div class="col-md-12">
										<input id="event_banner" type="file" class="form-control"
											placeholder="Election 2025">
										<label id="error_event_banner" class="validation-error"
											for="event_banner"></label>
									</div>
								</div>
								<!-- /Event Banner -->


								<div id="preview_img"></div>

								<button id="btn_active" type="button" class="btn bg-amber btn-rounded">
									<i class="icon icon-checkmark4 position-left"></i>Active
								</button>
								<button id="btn_save" type="button" class="btn btn-success btn-rounded">Save</button>
								<button id="btn_delete" type="button" class="btn btn-danger btn-rounded">Delete</button>
							</form>
						</div>
					</div>
					<!-- /Event Info -->
					<!-- Candidate Info -->
					<div class="panel panel-flat">
						<div class="panel-heading">
							<h5 class="panel-title">Candidate</h5>
						</div>
						<div class="panel-body">
							<ul id="candidate_list" class="media-list media-list-bordered">
								<!-- <li class="media">
									<div class="media-left">
										<a><img src="assets/images/faces/face3.png" alt=""></a>
									</div>

									<div class="media-body">
										<span>Number : x</span><br>
										<span>Name : Mr.xxx</span><br>
										<span>Campaign : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
									</div>
									<div class="media-right">
										<span id="btn_candi_edit" class="btn btn-success btn-rounded">Edit</span>
										<span id="btn_candi_delete" class="btn btn-danger btn-rounded">Delete</span>
									</div>
								</li> -->
							</ul>

							<div style="text-align: center;">
								<button type="button" data-toggle="modal" data-target="#modal_add_candidate"
									class="btn bg-blue btn-rounded">Add
									Candidate</button>
							</div>
						</div>
					</div>
					<!-- /Candidate Info -->
				</div>
			</div>
		</div>
	</section>
	<!--/Page Container-->

	<!-- Create Modal -->
	<div id="modal_add_candidate" class="modal fade">
		<div class="modal-dialog" style="top: 250px;">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div class="col-sm-4 imgUp candidate-img">
							<div class="imagePreview"></div>
							<label class="btn btn-photo-upload">
								Upload<input id="candi_add_photo" type="file" class="uploadFile img" value="Upload Photo"
									style="width: 0px;height: 0px;overflow: hidden;">
							</label>
						</div>
						<div class="col-sm-7 candidate-info">
							<form class="form-horizontal">
								<!-- No -->
								<div class="form-group">
									<select id="candi_add_no" class="form-control" style="width: 150px;">
										<option value="1">No. 1</option>
										<option value="2">No. 2</option>
										<option value="3">No. 3</option>
										<option value="4">No. 4</option>
										<option value="5">No. 5</option>
										<option value="6">No. 6</option>
										<option value="7">No. 7</option>
										<option value="8">No. 8</option>
										<option value="9">No. 9</option>
										<option value="10">No. 10</option>
									</select>
									<label id="error_candi_add_no" class="validation-error"
										for="candi_add_no"></label>
								</div>
								<!-- /No -->
								<!-- Candidate Campaign -->
								<div class="form-group">
									<input id="candi_add_campaign" type="text" class="form-control"
										placeholder="Campaign">
									<label id="error_candi_add_campaign" class="validation-error"
										for="candi_add_campaign"></label>
								</div>
								<!-- /Candidate Campaign -->
								<!-- Candidate Name -->
								<div class="form-group">
									<input id="candi_add_name" type="text" class="form-control" placeholder="Name">
									<label id="error_candi_add_name" class="validation-error"
										for="candi_add_name"></label>
								</div>
								<!-- /Candidate Name -->
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button id="btn_candi_add_save" type="button" class="btn bg-indigo btn-rounded">Save</button>
					<button id="btn_candi_add_cancel" type="button" class="btn btn-default btn-rounded"
						data-dismiss="modal">Cancel</button>
				</div>
			</div>
		</div>
	</div>
	<!-- /Create Modal -->

	<a id="scrollTop" href="page_support.htm#top"><i class="icon-arrow-up12"></i></a>