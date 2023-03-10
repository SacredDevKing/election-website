
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