$(document).ready(function () {
    $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });

    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });


    // Enter Events
    $('#reg_name').keypress(function (event) {
        if (event.keyCode == 13)
            $('#reg_email').focus();
    });

    $('#reg_email').keypress(function (event) {
        if (event.keyCode == 13)
            $('#reg_password').focus();
    });

    $('#reg_password').keypress(function (event) {
        if (event.keyCode == 13)
            $('#reg_conf_password').focus();
    });

    $('#reg_conf_password').keypress(function (event) {
        if (event.keyCode == 13)
            $('#btn_register').trigger('click');
    });

    // Login Button Clicked
    $('#btn_to_login').click(function () {
        document.location = BASE_URL + 'login';
    });

    // Register Button Clicked
    $('#btn_register').click(function () {
        doRegister();
    });
});

/**
 * @description
 *  Do Register
 */
function doRegister() {
    var validateFields = [{
        field_id: 'reg_name',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Name is required.'
        ]
    }, {
        field_id: 'reg_email',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Email is required.',
            'valid_email' + CONST_VALIDATE_SPLITER + 'Email is invalid.'
        ]
    }, {
        field_id: 'reg_password',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Password is required.',
            'min_length[6]' + CONST_VALIDATE_SPLITER + 'Password enter at least 6 characters.',
            'max_length[18]' + CONST_VALIDATE_SPLITER + 'Password enter no more than 12 characters.'
        ]
    }, {
        field_id: 'reg_conf_password',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Confirm password is required.',
            'is_match_field[reg_password]' + CONST_VALIDATE_SPLITER + 'Confirm password is not match'
        ]
    }
    ];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    var formData = {
        name: $('#reg_name').val(),
        email: $('#reg_email').val(),
        password: $('#reg_password').val(),
    };
    $.ajax({
        url: BASE_URL + 'register/do_register',
        type: "POST",
        data: formData,
        success: function (data) {
            data = JSON.parse(data);
            if (data['is_registered'] && data['is_logined']) {
                // If Register and login successed, jump to next page.
                setCookie(CONST_IS_FIRST_LOGINED, CONST_STATE_ALLOW);
                document.location = BASE_URL + data['return_url'];
                return;
            }

            var errors = data['errors'];
            if (data['is_registered']) {
                new PNotify({
                    title: 'Success',
                    icon: 'icon-checkmark3',
                    text: 'User successfully registered.',
                    addclass: 'bg-success'
                });
            } else {
                // If register is failed
                showValidError('reg_email', errors.email);
                showValidError('reg_name', errors.name);

                new PNotify({
                    title: 'Failed',
                    icon: 'icon-blocked',
                    text: 'User registration failed.',
                    addclass: 'bg-danger'
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