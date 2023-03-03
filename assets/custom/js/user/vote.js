$(document).ready(function () {

    $('.btn-log-out').click(function () {
        doLogout();
    })

    $('.btn-reset').click(function () {
        var arr = $('.checker span');
        for (var i = 0; i < arr.length; i++) {
            const item = arr[i];
            $(item).removeClass('checked');
        }

        var checkboxs = document.getElementsByClassName('candi-checkbox');
        for (var i in checkboxs) {
            var checkbox = checkboxs[i];
            checkbox.checked = false;
        }
    })

    $('.btn-vote').click(function () {
        console.log($('.candi-selected').attr('checked'))
    })

    $('#no_vote_selected').change(function (e) {
        console.log(e.target.checked)
    })

});