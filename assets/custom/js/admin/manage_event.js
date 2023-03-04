$(document).ready(function () {
    $('.pickadate').pickadate();
    $('.pickatime').pickatime();
    showAllEventList();

    $('#btn_logout').click(function () {
        doLogout();
    });

    $('#btn_add_event').click(function () {
        showNewEventForm();
    });

    $('#btn_save').click(function () {
        $eventId = $('#event_id').val();
        if ($eventId == '-1')
            doEventSave();
        else
            doEventUpdate();
    });

    $('#btn_delete').click(function () {
        $eventId = $('#event_id').val();
        if ($eventId == '-1') {
            new PNotify({
                title: 'Failed',
                icon: 'icon-blocked',
                text: 'Please select event which you want to delete.',
                addclass: 'bg-danger'
            });

            return;
        }

        doEventDelete();
    });

    $('#btn_active').click(function () {
        $eventId = $('#event_id').val();
        if ($eventId == '-1') {
            new PNotify({
                title: 'Failed',
                icon: 'icon-blocked',
                text: 'Please select event which you want to active.',
                addclass: 'bg-danger'
            });

            return;
        }

        doEventActive();
    });

    $('#btn_candi_add_save').click(function () {
        createCandidate();
    });

    $('#btn_candi_edit_save').click(function () {
        updateCandidate();
    })
})

/**
 * @description
 *  Get all election list.
 */
function showAllEventList() {
    $.ajax({
        url: BASE_URL + 'manage_event/get_all_events',
        type: "POST",
        data: {},
        success: function (data) {
            data = JSON.parse(data);
            var events = data['events'];

            $('#event_list').html("");
            $('#event_list').append('<li class="navigation-header">Event</li>');

            for (var i in events)
                addEventToList(events[i].id, events[i].name, events[i].is_active);
        },
        error: function (err) {
            new PNotify({
                title: 'Failed',
                icon: 'icon-blocked',
                text: 'Network connection is failed.',
                addclass: 'bg-danger'
            });
        }
    });
}

/**
 * @description
 *  Add Event to list.
 */
function addEventToList(id, name, isActive) {
    var electionTag = '<li id="electron_item_' + id + '" class="election-item" data-id=' + id + '>' +
        '<a id="electron_item_a_' + id + '" class="election-atag" href="javascript:void(0)">' +
        (isActive == "1" ? '<span class="label label-success pull-right"><i class="icon icon-checkmark4"></i></span>' : '') +
        '<i class="icon-stack-star fa-fw"></i> <span id="electron_item_name_' + id + '">' + name + '</span>' +
        '</a></li>';
    $('#event_list').append(electionTag);

    $('#electron_item_' + id).click(function () {
        var eventId = $(this).attr('data-id');
        $('.election-atag').removeClass('navigation-li-active');
        $('#electron_item_a_' + eventId).addClass('navigation-li-active');

        $.ajax({
            url: BASE_URL + 'manage_event/get_event',
            type: "POST",
            data: {
                eventId: eventId
            },
            success: function (data) {
                data = JSON.parse(data);

                // Show Event info in info panel.
                showEventInInfoPanel(data['event']);

                // Show Event's candidate list in candidate panel.
                var candidates = data['candidates'];
                var cnt = candidates.length;
                $('#candidate_list').html("");
                for (var i = 0; i < cnt; i++) {
                    var candidate = candidates[i];
                    addCandidateInPanel(candidate['id'], candidate['candi_photo'], candidate['candi_no'], candidate['candi_name'], candidate['candi_campaign']);
                }
            },
            error: function (err) {
                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'Network connection is failed.',
                    addclass: 'bg-danger'
                });
            }
        });
    });
}

/**
 * @description
 *  Show candidate in list.
 */
function addCandidateInPanel(id, photo, no, name, campaign) {
    var candidateTag = '<div id="candidate-item-' + id + '" class="candidate" data-id="' + id + '" data-photo="' + photo + '" data-no="' + no + '" data-name="' + name + '" data-campaign="' + campaign + '">' +
        '<div class="panel panel-flat">' +
        '<div class="panel-body">' +
        '<div class="col-sm-12 no-padding">' +
        '<div class="col-xs-12 col-sm-2">' +
        '<figure id="candi-photo-' + id + '">' +
        '<img id="candi-photo-img-' + id + '" src="' + photo + '" alt="" class="candi-photo img-circle img-responsive">' +
        '</figure>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-8">' +
        '<h3 id="candi-span-num-' + id + '" class="no-margin"><strong>No:</strong> ' + no + '</h3>' +
        '<h3 id="candi-span-name-' + id + '" class="no-margin"><strong>Name:</strong> ' + name + '</h3>' +
        '<p id="candi-span-campaign-' + id + '" class="campagin-container"><strong>Campagin: </strong> ' + campaign + '</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-2">' +
        '<div style="text-align: right;">' +
        '<button  id="btn-candi-edit-' + id + '" class="btn border-success text-success btn-rounded btn-candi-edit btn-flat btn-xs"> <i class="icon icon-pencil7 position-left"></i> Edit</button>' +
        '<button id="btn-candi-delete-' + id + '" class="btn border-danger text-danger btn-rounded btn-candi-delete btn-flat  btn-xs" >' +
        '<i class="icon icon-eraser2 position-left"></i> Delete</button >' +
        '</div > </div > </div > </div > </div > </div > ';

    $('#candidate_list').append(candidateTag);

    $('#btn-candi-edit-' + id).click(function () {
        var photo = $('#candidate-item-' + id).attr('data-photo');
        var no = $('#candidate-item-' + id).attr('data-no');
        var campaign = $('#candidate-item-' + id).attr('data-campaign');
        var name = $('#candidate-item-' + id).attr('data-name');

        $('#edit_candi_preview').css("background-image", "url(" + photo + ")");
        $('#candi_edit_id').val(id);
        $('#candi_edit_no').val(no);
        $('#candi_edit_campaign').val(br2nl(campaign));
        $('#candi_edit_name').val(name);
        $('#btn_trig_edit_candi_modal').trigger('click');
    });

    $('#btn-candi-delete-' + id).click(function () {
        deleteCandidate(id);
    })
}

/**
 * @description
 *  Show Event info in info tab.
 */
function showEventInInfoPanel(event) {
    // Reset inputs
    var id = event['id'];
    var name = event['name'];
    var opendate = event['opendate'];
    var opentime = event['opentime'];
    var closedate = event['closedate'];
    var closetime = event['closetime'];
    var isActive = event['is_active'];
    var banner = event['event_banner'];

    // Reset panel
    $('#event-panel-title').html('Edit Event');
    $('#btn_active').removeClass('display-none');
    $('#btn_delete').removeClass('display-none');
    // $('.banner-img-preview').css("background-image", "url(" + banner + ")");
    $('.banner-img-preview').html("<img src='" + banner + "' style='width: 100%; height: auto;'>");
    $('#event_banner').val('');

    $('#event_id').val(id);
    $('#event_name').val(name);
    $('#event_vote_opendate').val(opendate);
    $('#event_vote_opentime').val(opentime);
    $('#event_vote_closedate').val(closedate);
    $('#event_vote_closetime').val(closetime);
    $('#event_isactive').val(isActive);

    if (isActive == "0" || isActive == 0)
        $('#btn_active').html('<i class="icon icon-checkmark4 position-left"></i> Active');
    else
        $('#btn_active').html('<i class="icon icon-x position-left"></i> DeActive');
    // $('#preview_img').html('<img src="' + event['event_banner'] + '">');

    // Reset Candidate Panel
    $('#panel-candidate').removeClass('display-none');
}

/**
 * @description
 *  Do User Logout
 */
function doLogout() {
    $.ajax({
        url: BASE_URL + 'login/do_logout',
        type: "POST",
        data: {},
        success: function (data) {
            data = JSON.parse(data);

            if (data['is_logout'] == 'logout_success') {
                // If logout success.
                document.location = BASE_URL;
                return;
            }
        },
        error: function (err) {
            new PNotify({
                title: 'Failed',
                icon: 'icon-blocked',
                text: 'Network connection is failed.',
                addclass: 'bg-danger'
            });
        }
    });
}

/**
 * @description
 *  Show new event form.
 */
function showNewEventForm() {
    // Reset Event List
    $('.election-atag').removeClass('navigation-li-active');

    // Reset Event Panel
    $('#event-panel-title').html('Create New Event');
    // $('.banner-img-preview').css("background-image", "url(" + BASE_URL + "/assets/custom/images/new_user.png)");
    // $('.banner-img-preview').html("<img src='" + BASE_URL + "/assets/custom/images/new_user.png' style='width: 100%; height: auto; '>");
    document.getElementById('event_banner').files = null;
    $('#event_banner').val("");
    $('.banner-img-preview').html("");

    $('#btn_active').addClass('display-none');
    $('#btn_delete').addClass('display-none');

    // Reset Candidate Panel
    $('#panel-candidate').addClass('display-none');

    // Reset input fields.
    $('#event_id').val("-1");
    $('#event_name').val("");
    $('#event_vote_opendate').val("");
    $('#event_vote_opentime').val("");
    $('#event_vote_closedate').val("");
    $('#event_vote_closetime').val("");
    $('#banner').val("");
    $('#btn_active').html('<i class="icon icon-checkmark4 position-left"></i>Active');
}

/**
 * @description
 *  Save event to server.
 */
function doEventSave() {
    // Check validation
    var validateFields = [{
        field_id: 'event_name',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Event name is required.'
        ]
    }, {
        field_id: 'event_vote_opendate',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Select a date.'
        ]
    }, {
        field_id: 'event_vote_opentime',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Select a time.'
        ]
    }, {
        field_id: 'event_vote_closedate',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'select a date.'
        ]
    }, {
        field_id: 'event_vote_closetime',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Select a time.'
        ]
    }];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    // Check about closedate and opendate.
    var openDate = $('#event_vote_opendate').val();
    var openTime = $('#event_vote_opentime').val();
    var closeDate = $('#event_vote_closedate').val();
    var closeTime = $('#event_vote_closetime').val();
    var openDateTime = makeDateTime(openDate, openTime);
    var closeDateTime = makeDateTime(closeDate, closeTime);
    if (openDateTime > closeDateTime) {
        new PNotify({
            title: 'Warning',
            icon: 'icon-checkmark3',
            text: 'Vote close date and time must be after vote open date and time.',
            addclass: 'bg-danger'
        });
        return;
    }

    // Save data
    var filebanner = document.getElementById('event_banner');
    var imgFile = filebanner.files[0];

    if (imgFile == null) {
        new PNotify({
            title: 'Warning',
            icon: 'icon-blocked',
            text: 'Please select a banner image.',
            addclass: 'bg-danger'
        });
        return;
    }

    // Check about Image size
    var bannerWidth = $('#banner_width').val();
    var bannerHeight = $('#banner_height').val();
    if (bannerWidth > 600 || bannerHeight > 200) {
        new PNotify({
            title: 'Warning',
            icon: 'icon-blocked',
            text: 'Banner size must less than 600 * 200 px. Your image size is ' + bannerWidth + ' * ' + bannerHeight + ' px.',
            addclass: 'bg-danger'
        });
        return;
    }

    swal({
        title: "Are you sure?",
        text: "New event will be created with this information!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, create it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            var formData = {
                name: $('#event_name').val(),
                openDate: $('#event_vote_opendate').val(),
                openTime: $('#event_vote_opentime').val(),
                closeDate: $('#event_vote_closedate').val(),
                closeTime: $('#event_vote_closetime').val(),
                banner: 'data:image/jpeg;base64,' + btoa(e.target.result),
            };

            $.ajax({
                url: BASE_URL + 'manage_event/create_event',
                type: "POST",
                data: formData,
                success: function (data) {
                    data = JSON.parse(data);
                    var event = data['event'];

                    if (data['status'] == 'failed') {
                        $errors = data['errors'];
                        showValidError('event_name', $errors['name']);
                        return;
                    }

                    if (data['status'] == 'success') {
                        // Reset input fields.
                        $('#event_name').val("");
                        $('#event_vote_opendate').val("");
                        $('#event_vote_opentime').val("");
                        $('#event_vote_closedate').val("");
                        $('#event_vote_closetime').val("");
                        $('#banner').val("");

                        addEventToList(event.id, event.name, event.is_active);

                        swal("Good job!", "New event is created!", "success");
                    }
                },
                error: function (err) {
                    new PNotify({
                        title: 'Failed',
                        icon: 'icon-blocked',
                        text: 'Network connection is failed.',
                        addclass: 'bg-danger'
                    });
                }
            });
        };
        reader.onerror = function (e) {
            console.log('Error : ' + e.type);
        };
        reader.readAsBinaryString(imgFile);
    });
}

/**
 * @description
 *  Update event to server.
 */
function doEventUpdate() {
    // Check Validation
    var validateFields = [{
        field_id: 'event_name',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Event name is required.'
        ]
    }, {
        field_id: 'event_vote_opendate',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Select a date.'
        ]
    }, {
        field_id: 'event_vote_opentime',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Select a time.'
        ]
    }, {
        field_id: 'event_vote_closedate',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'select a date.'
        ]
    }, {
        field_id: 'event_vote_closetime',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Select a time.'
        ]
    }];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    // Check about closedate and opendate.
    var openDate = $('#event_vote_opendate').val();
    var openTime = $('#event_vote_opentime').val();
    var closeDate = $('#event_vote_closedate').val();
    var closeTime = $('#event_vote_closetime').val();
    var openDateTime = makeDateTime(openDate, openTime);
    var closeDateTime = makeDateTime(closeDate, closeTime);
    if (openDateTime > closeDateTime) {
        new PNotify({
            title: 'Warning',
            icon: 'icon-checkmark3',
            text: 'Vote close date and time must be after vote open date and time.',
            addclass: 'bg-danger'
        });
        return;
    }

    // Banner
    var filebanner = document.getElementById('event_banner');
    var imgFile = filebanner.files[0];

    if (imgFile != null) {
        // Check about Image size
        var bannerWidth = $('#banner_width').val();
        var bannerHeight = $('#banner_height').val();
        if (bannerWidth > 600 || bannerHeight > 200) {
            new PNotify({
                title: 'Warning',
                icon: 'icon-blocked',
                text: 'Banner size must less than 600 * 200 px. Your image size is ' + bannerWidth + ' * ' + bannerHeight + ' px.',
                addclass: 'bg-danger'
            });
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            updateEvent('data:image/png;base64,' + btoa(e.target.result));
        };
        reader.onerror = function (e) {
            console.log('Error : ' + e.type);
        };
        reader.readAsBinaryString(imgFile);
    } else {
        updateEvent(null);
    }
}

function updateEvent(banner) {
    swal({
        title: "Are you sure?",
        text: "This event information will be changed!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, update it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {
        var formData = {
            id: $('#event_id').val(),
            name: $('#event_name').val(),
            openDate: $('#event_vote_opendate').val(),
            openTime: $('#event_vote_opentime').val(),
            closeDate: $('#event_vote_closedate').val(),
            closeTime: $('#event_vote_closetime').val(),
            banner: banner
        };

        $.ajax({
            url: BASE_URL + 'manage_event/update_event',
            type: "POST",
            data: formData,
            success: function (data) {
                data = JSON.parse(data);
                if (data['status'] == 'failed') {
                    $errors = data['errors'];
                    showValidError('event_name', $errors['name']);
                    return;
                }

                if (data['status'] == 'success') {
                    // Reset input fields.
                    $('#electron_item_name_' + formData.id).html(formData.name);

                    swal("Good job!", "Event is successfully updated!", "success");
                }
            },
            error: function (err) {
                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'Network connection is failed.',
                    addclass: 'bg-danger'
                });
            }
        });
    });
}

/**
 * @description
 *  Delete event
 */
function doEventDelete() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this event!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {
        var formData = {
            id: $('#event_id').val()
        };

        $.ajax({
            url: BASE_URL + 'manage_event/delete_event',
            type: "POST",
            data: formData,
            success: function (data) {
                data = JSON.parse(data);
                if (data['status'] == 'failed') {
                    $errors = data['errors'];
                    // showValidError('event_name', $errors['name']);
                    return;
                }

                if (data['status'] == 'success') {
                    // Reset input fields.
                    showNewEventForm();
                    $('#electron_item_' + formData.id).remove();

                    swal("Good job!", "Event is successfully deleted!", "success");
                }
            },
            error: function (err) {
                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'Network connection is failed.',
                    addclass: 'bg-danger'
                });
            }
        });
    });
}

/**
 * @description
 *  Active event
 */
function doEventActive() {
    swal({
        title: "Are you sure?",
        text: "Event's activate state will be changed!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: $('#event_isactive').val() == "1" ? 'Yes, deactive it!' : 'Yes active it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {
        var formData = {
            id: $('#event_id').val(),
            isActive: $('#event_isactive').val()
        };

        $.ajax({
            url: BASE_URL + 'manage_event/active_event',
            type: "POST",
            data: formData,
            success: function (data) {
                data = JSON.parse(data);
                if (data['status'] == 'failed') {
                    var errors = data['errors'];
                    new PNotify({
                        title: 'Failed',
                        icon: 'icon-blocked',
                        text: errors.event,
                        addclass: 'bg-danger'
                    });
                    return;
                }
                if (data['status'] == 'success') {
                    var event = data['event'];

                    // Reset activate field.
                    $('#event_isactive').val(event.is_active);
                    if (event.is_active == '0' || event.is_active == 0) {
                        $('#btn_active').html('<i class="icon icon-checkmark4 position-left"></i>Active');
                        var electionSubTag =
                            '<a id="electron_item_a_' + event.id + '" class="election-atag navigation-li-active" href="javascript:void(0)">' +
                            '<i class="icon-stack-star fa-fw"></i> <span id="electron_item_name_' + event.id + '">' + event.name + '</span>' +
                            '</a>';
                        $('#electron_item_' + event.id).html(electionSubTag);

                        swal("Good job!", "Event is successfully deactived!", "success");
                    } else {
                        $('#btn_active').html('<i class="icon icon-x position-left"></i>DeActive');
                        var electionSubTag =
                            '<a id="electron_item_a_' + event.id + '" class="election-atag navigation-li-active" href="javascript:void(0)">' +
                            '<span class="label label-success pull-right"><i class="icon icon-checkmark4"></i></span>' +
                            '<i class="icon-stack-star fa-fw"></i> <span id="electron_item_name_' + event.id + '">' + event.name + '</span>' +
                            '</a>';
                        $('#electron_item_' + event.id).html(electionSubTag);

                        // new PNotify({
                        //     title: 'Success',
                        //     icon: 'icon-checkmark3',
                        //     text: 'Event is successfully actived.',
                        //     addclass: 'bg-success'
                        // });
                        swal("Good job!", "Event is successfully actived!", "success");
                    }
                }
            },
            error: function (err) {
                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'Network connection is failed.',
                    addclass: 'bg-danger'
                });
            }
        });
    });
}

/**
 * @description
 *  Save Candidate.
 */
function createCandidate() {
    if ($('#event_id').val() == -1) {
        new PNotify({
            title: 'Failed',
            icon: 'icon-blocked',
            text: 'Please select an event to add a new candidate.',
            addclass: 'bg-danger'
        });
        return;
    }

    var validateFields = [{
        field_id: 'candi_add_no',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Candidiate no is required.'
        ]
    }, {
        field_id: 'candi_add_campaign',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Candidiate campaign is required.'
        ]
    }, {
        field_id: 'candi_add_name',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Candidiate name is required.'
        ]
    }];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    var filebanner = document.getElementById('candi_add_photo');
    var imgFile = filebanner.files[0];
    if (imgFile == null) {
        new PNotify({
            title: 'Warning',
            icon: 'icon-blocked',
            text: 'Please select a candidate photo.',
            addclass: 'bg-danger'
        });
        return;
    }

    swal({
        title: "Are you sure?",
        text: "New candidate will be created with this information!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, Create it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {
        var reader = new FileReader();

        reader.onload = function (e) {
            var formData = {
                eventId: $('#event_id').val(),
                no: $('#candi_add_no').val(),
                campaign: nl2br($('#candi_add_campaign').val()),
                name: $('#candi_add_name').val(),
                photo: 'data:image/png;base64,' + btoa(e.target.result),
            };

            $.ajax({
                url: BASE_URL + 'manage_event/create_candidate',
                type: "POST",
                data: formData,
                success: function (data) {
                    data = JSON.parse(data);
                    var candidate = data['candidate'];

                    if (data['status'] == 'failed') {
                        $errors = data['errors'];
                        // showValidError('event_name', $errors['name']);
                        return;
                    }

                    if (data['status'] == 'success') {
                        // Reset input fields.
                        $('#candi_add_no').val("1");
                        $('#candi_add_campaign').val("");
                        $('#candi_add_name').val("");

                        // $('.imagePreview').html("");
                        $('.imagePreview').css("background-image", "");

                        $('#candi_add_photo').val("");
                        $('#btn_candi_add_cancel').trigger('click');
                        // addCandidateToList(event.id, event.name, event.is_active);
                        addCandidateInPanel(candidate['id'], candidate['candi_photo'], candidate['candi_no'], candidate['candi_name'], candidate['candi_campaign']);
                        swal("Good job!", "New candidate is successfully created!", "success");
                    }
                },
                error: function (err) {
                    new PNotify({
                        title: 'Failed',
                        icon: 'icon-blocked',
                        text: 'Network connection is failed.',
                        addclass: 'bg-danger'
                    });
                }
            });
        };
        reader.onerror = function (e) {
            console.log('Error : ' + e.type);
        };
        reader.readAsBinaryString(imgFile);
    });
}

/**
 * Update Candidate (Do validation and read photo info in binary)
 */
function updateCandidate() {
    var validateFields = [{
        field_id: 'candi_edit_no',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Candidiate no is required.'
        ]
    }, {
        field_id: 'candi_edit_campaign',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Candidiate campaign is required.'
        ]
    }, {
        field_id: 'candi_edit_name',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Candidiate name is required.'
        ]
    }];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    var filebanner = document.getElementById('candi_edit_photo');
    var imgFile = filebanner.files[0];
    if (imgFile != null) {
        var reader = new FileReader();
        reader.onload = function (e) {
            updateCandiItem('data:image/png;base64,' + btoa(e.target.result));
        };
        reader.onerror = function (e) {
            console.log('Error : ' + e.type);
        };
        reader.readAsBinaryString(imgFile);
    } else {
        updateCandiItem(null);
    }
}

/**
 * Update Candidate in db.
 * @param {binaryData} photo 
 */
function updateCandiItem(photo) {
    swal({
        title: "Are you sure?",
        text: "Candidate information will be updated!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, Update it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {
        var formData = {
            id: $('#candi_edit_id').val(),
            no: $('#candi_edit_no').val(),
            campaign: nl2br($('#candi_edit_campaign').val()),
            name: $('#candi_edit_name').val(),
            photo: photo,
        };

        $.ajax({
            url: BASE_URL + 'manage_event/update_candidate',
            type: "POST",
            data: formData,
            success: function (data) {
                data = JSON.parse(data);
                var candidate = data['candidate'];

                if (data['status'] == 'failed') {
                    $errors = data['errors'];
                    // showValidError('event_name', $errors['name']);
                    return;
                }

                if (data['status'] == 'success') {
                    // Reset items in candidate list.
                    $('#candi-photo-' + candidate.id).html('<img src="' + candidate.candi_photo + '" alt="" class="candi-photo img-circle img-responsive"></img>');
                    $('#candi-span-num-' + candidate.id).html('<strong>No:</strong> ' + candidate.candi_no);
                    $('#candi-span-name-' + candidate.id).html('<strong>Name:</strong> ' + candidate.candi_name);
                    $('#candi-span-campaign-' + candidate.id).html('<strong>Campaign:</strong> ' + candidate.candi_campaign);
                    $('#candidate-item-' + candidate.id).attr('data-photo', candidate.candi_photo);
                    $('#candidate-item-' + candidate.id).attr('data-no', candidate.candi_no);
                    $('#candidate-item-' + candidate.id).attr('data-campaign', candidate.candi_campaign);
                    $('#candidate-item-' + candidate.id).attr('data-name', candidate.candi_name);

                    $('#btn_candi_edit_cancel').trigger('click');

                    swal("Good job!", "Candidate is successfully updated!", "success");
                }
            },
            error: function (err) {
                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'Network connection is failed.',
                    addclass: 'bg-danger'
                });
            }
        });
    });
}

/**
 * Delete candidate
 * @param {int} id 
 */
function deleteCandidate(id) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this candidate!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
        //closeOnCancel: false
    }, function () {

        var formData = {
            id: id,
        };

        $.ajax({
            url: BASE_URL + 'manage_event/delete_candidate',
            type: "POST",
            data: formData,
            success: function (data) {
                data = JSON.parse(data);

                if (data['status'] == 'failed') {
                    $errors = data['errors'];
                    // showValidError('event_name', $errors['id']);
                    return;
                }

                if (data['status'] == 'success') {
                    // Reset input fields.
                    $('#candidate-item-' + id).remove();
                    swal("Good job!", "Candidate is successfully deleted!", "success");
                }
            },
            error: function (err) {
                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'Network connection is failed.',
                    addclass: 'bg-danger'
                });
            }
        });
        // swal("Deleted!", "Your imaginary file has been deleted!", "success");
    });

}

/**
 * @description
 *  Upload Photo button
 */
$(function () {
    $(document).on("change", ".upload-banner", function () {
        var uploadFile = $(this);
        var h, w;
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function () { // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                // uploadFile.closest(".banner-img-form-group").find('.banner-img-preview').css("background-image", "url(" + this.result + ")");
                var binaryResult = this.result;
                let tmpImgNode = document.createElement("img");
                tmpImgNode.onload = function () {
                    h = this.naturalHeight;
                    w = this.naturalWidth;
                    $('#banner_width').val(w);
                    $('#banner_height').val(h);
                    if (h <= 200 && w <= 600) {
                    } else {
                        new PNotify({
                            title: 'Warning',
                            icon: 'icon-blocked',
                            text: 'Banner size must less than 600 * 200 px. Your image size is ' + w + ' * ' + h + ' px.',
                            addclass: 'bg-danger'
                        });
                    }
                }
                tmpImgNode.src = this.result;
                uploadFile.closest(".banner-img-form-group").find('.banner-img-preview').html("<img src='" + binaryResult + "' style='width: 100%; height: auto;'>");
            }
        }
    });

    $(document).on("change", ".uploadFile", function () {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function () { // set image data as background of div
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
                // uploadFile.closest(".imgUp").find('.imagePreview').html("<img src='" + this.result + "' style='width: 100%; height: auto;'>");
            }
        }
    });
});