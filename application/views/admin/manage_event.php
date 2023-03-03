<body class="material-menu" id="top">
	<div id="preloader">
		<div id="status">
			<div class="loader">
				<div class="loader-inner ball-pulse">
					<div class="bg-indigo"></div>
					<div class="bg-amber"></div>
					<div class="bg-success"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- <header class="main-nav clearfix">
	</header> -->

	<!-- Header -->
	<header id="header">
		<div class="container">
			<div class="region region-branding">
				<div id="block-sitebranding" class="block block-system block-system-branding-block">
					<a href="/" title="Home" rel="home" class="site-logo">
						<img src="<?php echo base_url('/assets/global/images/Logo.png?v=' . $randNum) ?>" alt="Home">
					</a>
				</div>
			</div>
			<div class="region region-header">
				<div id="block-callusnumber"
					class="block block-block-content block-block-content8f7c1f71-dc01-467c-8bb4-10182041217c">
					<div
						class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
						<div class="large-call center notranslate">1-866-Vote-NYC</div>
						<h4 class="center notranslate" style="color:#ffffff; margin: 0!important;">TTY-212-487-5496
						</h4>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!--Page Container-->
	<section class="main-container">
		<!--Page Header-->
		<!-- <div class="header">
			<div class="header-content">
				<div class="page-title">
					<i class="icon-lifebuoy position-left"></i> Event Management
				</div>
			</div>
		</div> -->
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
					<button id="btn_add_event" type="button" class="btn bg-indigo btn-rounded">
						<i class="icon icon-pen-plus position-left"></i>Add New Event
					</button>
					<button id="btn_logout" type="button" class="btn bg-danger btn-rounded">
						<i class="icon icon-exit2 position-left"></i>Logout
					</button>
				</div>
				<div class="col-xs-12 col-md-9 col-sm-8">
					<!-- Event Info -->
					<div class="panel panel-flat">
						<div class="panel-heading">
							<h5 id="event-panel-title" class="panel-title">Create New Event</h5>
						</div>
						<div class="panel-body">
							<form class="form-horizontal">
								<div class="row">
									<div class="col-sm-6">
										<!-- Event Banner -->
										<div class="form-group banner-img-form-group">
											<label class="control-label col-md-12"> Event Banner (600 * 200)
												<span class="text-danger">*</span>
											</label>
											<div class="banner-img-preview"></div>
											<label class="btn btn-photo-upload">
												<i class="icon icon-upload7"></i>
												Upload
												<input id="event_banner" type="file" class="upload-banner img"
													value="Upload Photo"
													style="width: 0px;height: 0px;overflow: hidden;">
											</label>
											<input id="banner_width" type="hidden">
											<input id="banner_height" type="hidden">
											<!-- <div class="col-md-12">
												<input id="event_banner" type="file" class="form-control"
													placeholder="Election 2025">
												<label id="error_event_banner" class="validation-error"
													for="event_banner"></label>
											</div> -->
										</div>
										<!-- /Event Banner -->
									</div>
									<div class="col-sm-6">
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
												<label id="error_event_name" class="validation-error"
													for="event_name"></label>
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
													<input id="event_vote_opendate" type="text"
														class="form-control pickadate" placeholder="Select">
												</div>
												<label id="error_event_vote_opendate" class="validation-error"
													for="event_vote_opendate"></label>
											</div>
											<div class="col-md-6">
												<div class="input-group">
													<span class="input-group-addon"><i class="icon-alarm"></i></span>
													<input id="event_vote_opentime" type="text"
														class="form-control pickatime" placeholder="Select">
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
													<input id="event_vote_closedate" type="text"
														class="form-control pickadate" placeholder="Select">
												</div>
												<label id="error_event_vote_closedate" class="validation-error"
													for="event_vote_closedate"></label>
											</div>
											<div class="col-md-6">
												<div class="input-group">
													<span class="input-group-addon"><i class="icon-alarm"></i></span>
													<input id="event_vote_closetime" type="text"
														class="form-control pickatime" placeholder="Select">
												</div>
												<label id="error_event_vote_closetime" class="validation-error"
													for="event_vote_closetime"></label>
											</div>
										</div>
										<!-- /Vote Close Date Time -->
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12" style="text-align: right;">
										<button id="btn_active" type="button"
											class="btn btn-success btn-rounded display-none">
											<i class="icon icon-checkmark4 position-left"></i> Active
										</button>
										<button id="btn_save" type="button" class="btn bg-indigo btn-rounded">
											<i class="icon icon-pencil6 position-left"></i> Save
										</button>
										<button id="btn_delete" type="button"
											class="btn btn-danger btn-rounded display-none">
											<i class="icon icon-eraser2 position-left"></i> Delete
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<!-- /Event Info -->
					<!-- Candidate Info -->
					<div id="panel-candidate" class="panel panel-flat display-none">
						<div class="panel-heading">
							<h5 class="panel-title">Candidate</h5>
						</div>
						<div class="panel-body">
							<ul id="candidate_list" class="media-list media-list-bordered">
								<!-- <div class="candidate">
									<div class="panel panel-flat">
										<div class="panel-body">
											<div class="col-sm-12 no-padding">
												<div class="col-xs-12 col-sm-2">
													<figure>
														<img src="<?php echo base_url('/assets/global/images/candidates/candidate_2.jpg?v=' . $randNum) ?>"
															alt="" class="img-circle img-responsive candi-photo">
													</figure>
												</div>
												<div class="col-xs-12 col-sm-8">
													<h3 class="no-margin"><strong>No:</strong> 2222</h3>
													<h3 class="no-margin"><strong>Name:</strong> John Deo</h3>
													<p><strong>Campagin: </strong> Read, out with friends, listen to
														music, draw and
														learn new things.Read, out with friends, listen to music,
														draw and
														learn new things.Read, out with friends, listen to music,
														draw and
														learn new things. </p>
												</div>
												<div class="col-xs-12 col-sm-2">
													<div style="text-align: right;">
														<button id="btn-candi-edit-"
															class="btn border-success text-success btn-rounded btn-candi-edit btn-flat btn-xs">
															<i class="icon icon-pencil7 position-left"></i> Edit</button>
														<button id="btn-candi-edit-"
															class="btn border-danger text-danger btn-rounded btn-candi-edit btn-flat  btn-xs">
															<i class="icon icon-eraser2 position-left"></i> Delete</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div> -->
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

							<div style="text-align: center; padding-top: 15px;">
								<button type="button" data-toggle="modal" data-target="#modal_add_candidate"
									class="btn bg-indigo btn-rounded">
									<i class="icon icon-user-plus position-left"></i>
									Add Candidate
								</button>
								<button id="btn_trig_edit_candi_modal" type="button" data-toggle="modal"
									data-target="#modal_edit_candidate" class="btn bg-indigo btn-rounded"
									style="display: none;">Edit
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

	<!-- Create Candidate Modal -->
	<div id="modal_add_candidate" class="modal fade">
		<div class="modal-dialog" style="top: 250px;">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div class="col-sm-4 imgUp candidate-img">
							<div class="imagePreview"></div>
							<label class="btn btn-photo-upload">
								<i class="icon icon-upload7"></i>
								Upload
								<input id="candi_add_photo" type="file" class="uploadFile img" value="Upload Photo"
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
									<label id="error_candi_add_no" class="validation-error" for="candi_add_no"></label>
								</div>
								<!-- /No -->
								<!-- Candidate Name -->
								<div class="form-group">
									<input id="candi_add_name" type="text" class="form-control" placeholder="Name">
									<label id="error_candi_add_name" class="validation-error"
										for="candi_add_name"></label>
								</div>
								<!-- /Candidate Name -->
								<!-- Candidate Campaign -->
								<div class="form-group">
									<textarea id="candi_add_campaign" type="text" class="form-control"
										placeholder="Campaign" rows="5"></textarea>
									<label id="error_candi_add_campaign" class="validation-error"
										for="candi_add_campaign"></label>
								</div>
								<!-- /Candidate Campaign -->
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button id="btn_candi_add_save" type="button" class="btn bg-indigo btn-rounded">
						<i class="icon icon-checkmark position-left"></i> Save
					</button>
					<button id="btn_candi_add_cancel" type="button" class="btn btn-default btn-rounded"
						data-dismiss="modal">
						<i class="icon icon-cross2 position-left"></i> Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- /Create Candidate Modal -->

	<!-- Edit Candidate Modal -->
	<div id="modal_edit_candidate" class="modal fade">
		<div class="modal-dialog" style="top: 250px;">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<input id="candi_edit_id" type="hidden">
						<div class="col-sm-4 imgUp candidate-img">
							<div id="edit_candi_preview" class="imagePreview"></div>
							<label class="btn btn-photo-upload">
								Upload<input id="candi_edit_photo" type="file" class="uploadFile img"
									value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;">
							</label>
						</div>
						<div class="col-sm-7 candidate-info">
							<form class="form-horizontal">
								<!-- No -->
								<div class="form-group">
									<select id="candi_edit_no" class="form-control" style="width: 150px;">
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
									<label id="error_candi_edit_no" class="validation-error"
										for="candi_edit_no"></label>
								</div>
								<!-- /No -->
								<!-- Candidate Name -->
								<div class="form-group">
									<input id="candi_edit_name" type="text" class="form-control" placeholder="Name">
									<label id="error_candi_edit_name" class="validation-error"
										for="candi_edit_name"></label>
								</div>
								<!-- /Candidate Name -->
								<!-- Candidate Campaign -->
								<div class="form-group">
									<textarea id="candi_edit_campaign" type="text" class="form-control"
										placeholder="Campaign" rows="5"></textarea>
									<label id="error_candi_edit_campaign" class="validation-error"
										for="candi_edit_campaign"></label>
								</div>
								<!-- /Candidate Campaign -->
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button id="btn_candi_edit_save" type="button" class="btn bg-indigo btn-rounded">
						<i class="icon icon-checkmark position-left"></i> Save
					</button>
					<button id="btn_candi_edit_cancel" type="button" class="btn btn-default btn-rounded"
						data-dismiss="modal">
						<i class="icon icon-cross2 position-left"></i> Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- /Edit Candidate Modal -->

	<a id="scrollTop" href="page_support.htm#top"><i class="icon-arrow-up12"></i></a>