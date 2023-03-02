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
        '<i class="icon-warning22 fa-fw"></i> <span id="electron_item_name_' + id + '">' + name + '</span>' +
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
                var event = data['event'];
                $('#event_id').val(event['id']);
                $('#event_name').val(event['name']);
                $('#event_vote_opendate').val(event['opendate']);
                $('#event_vote_opentime').val(event['opentime']);
                $('#event_vote_closedate').val(event['closedate']);
                $('#event_vote_closetime').val(event['closetime']);
                $('#event_isactive').val(event['is_active']);
                // $('#preview_img').html('<img src="' + event['event_banner'] + '">');
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
    $('.election-atag').removeClass('navigation-li-active');

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
    }, {
        field_id: 'event_banner',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Banner is required.'
        ]
    }];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    var filebanner = document.getElementById('event_banner');
    var imgFile = filebanner.files[0];
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

                    new PNotify({
                        title: 'Success',
                        icon: 'icon-checkmark3',
                        text: 'New event is created.',
                        addclass: 'bg-success'
                    });
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
}

/**
 * @description
 *  Update event to server.
 */
function doEventUpdate() {
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

    var formData = {
        id: $('#event_id').val(),
        name: $('#event_name').val(),
        openDate: $('#event_vote_opendate').val(),
        openTime: $('#event_vote_opentime').val(),
        closeDate: $('#event_vote_closedate').val(),
        closeTime: $('#event_vote_closetime').val(),
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
                // $('#event_name').val("");
                // $('#event_vote_opendate').val("");
                // $('#event_vote_opentime').val("");
                // $('#event_vote_closedate').val("");
                // $('#event_vote_closetime').val("");
                // $('#banner').val("");

                new PNotify({
                    title: 'Success',
                    icon: 'icon-checkmark3',
                    text: 'Event is successfully updated.',
                    addclass: 'bg-success'
                });
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
 *  Delete event
 */
function doEventDelete() {
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

                new PNotify({
                    title: 'Success',
                    icon: 'icon-checkmark3',
                    text: 'Event is successfully deleted.',
                    addclass: 'bg-success'
                });
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
 *  Active event
 */
function doEventActive() {
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
                if (event.is_active == '0') {
                    $('#btn_active').html('<i class="icon icon-checkmark4 position-left"></i>Active');
                    var electionSubTag =
                        '<a id="electron_item_a_' + event.id + '" class="election-atag" href="javascript:void(0)">' +
                        '<i class="icon-warning22 fa-fw"></i> <span id="electron_item_name_' + event.id + '">' + event.name + '</span>' +
                        '</a>';
                    $('#electron_item_' + event.id).html(electionSubTag);

                    new PNotify({
                        title: 'Success',
                        icon: 'icon-checkmark3',
                        text: 'Event is successfully disactivated.',
                        addclass: 'bg-success'
                    });
                } else {
                    $('#btn_active').html('<i class="icon icon-x position-left"></i>Active');
                    var electionSubTag =
                        '<a id="electron_item_a_' + event.id + '" class="election-atag" href="javascript:void(0)">' +
                        '<span class="label label-success pull-right"><i class="icon icon-checkmark4"></i></span>' +
                        '<i class="icon-warning22 fa-fw"></i> <span id="electron_item_name_' + event.id + '">' + event.name + '</span>' +
                        '</a>';
                    $('#electron_item_' + event.id).html(electionSubTag);

                    new PNotify({
                        title: 'Success',
                        icon: 'icon-checkmark3',
                        text: 'Event is successfully actived.',
                        addclass: 'bg-success'
                    });
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
}