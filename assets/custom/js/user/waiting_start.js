$(document).ready(function () {
    var openDateTime = new Date($('.open-time').attr('data-open-time'))
    var openDateIimeStamp = openDateTime.valueOf();
    $('.timer').countdown(openDateIimeStamp, function (event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);

        if (event.offset.totalDays == 0 && event.offset.hours == 0 && event.offset.minutes == 0 && event.offset.seconds == 0) {
            window.location.href = '/vote';
        }
    });

    $('.btn-log-out').click(function () {
        doLogout();
    });
});