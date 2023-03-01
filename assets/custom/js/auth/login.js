$(document).ready(function () {
    $(".styled, .multiselect-container input").uniform({
        radioClass: 'choice'
    });

    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
            .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    /**
     * @description
     *  Link to register form after user clicked "Create an account" button.
     */
    $('#btn_to_register').click(function () {
        document.location = BASE_URL + 'register';
    });

    /**
     * @description
     *  Do login user.
     */
    $('#btn_login').click(function () {
        doLogin();
    });
});

/**
 * @description
 *  
 */
function doLogin() {
    var validateFields = [{
        field_id: 'log_email',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Email is required.'
        ]
    }, {
        field_id: 'log_password',
        conditions: [
            'required' + CONST_VALIDATE_SPLITER + 'Password is required.',
            'min_length[6]' + CONST_VALIDATE_SPLITER + 'Password enter at least 6 characters.',
            'max_length[18]' + CONST_VALIDATE_SPLITER + 'Password enter no more than 12 characters.'
        ]
    }];
    var isValid = doValidationForm(validateFields);
    if (!isValid)
        return;

    var formData = {
        email: $('#log_email').val(),
        password: $('#log_password').val()
    };

    $.ajax({
        url: BASE_URL + 'login/do_login',
        type: "POST",
        data: formData,
        success: function (data) {
            data = JSON.parse(data);
            if (data['is_logined']) {
                // If login success.
                setCookie(CONST_IS_FIRST_LOGINED, CONST_STATE_ALLOW);
                document.location = BASE_URL + data['return_url'];
                return;
            }

            // Show Validation Error
            var errors = data['errors'];
            showValidError('log_email', errors.email);

            new PNotify({
                title: 'Failed',
                icon: 'icon-blocked',
                text: 'User login failed.',
                addclass: 'bg-danger'
            });
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