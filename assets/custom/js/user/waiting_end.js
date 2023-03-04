$(document).ready(function () {
    var closeDateTime = new Date($('.close-time').attr('data-close-time'))
    var closeDateIimeStamp = closeDateTime.valueOf();
    $('.timer').countdown(closeDateIimeStamp, function (event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);

        if (event.offset.totalDays == 0 && event.offset.hours == 0 && event.offset.minutes == 0 && event.offset.seconds == 0) {
            window.location.href = '/result';
        }
    });

    $('.btn-log-out').click(function () {
        doLogout();
    });
});