/**
 * Return datetime string which parsed from date and time. (2023-03-01 01:03:00)
 * @param {string} date (01/03/2023)
 * @param {string} time (1:30 AM)
 */
function makeDateTime(date, time) {
    var slices = date.split("/");
    var date = slices[2] + '-' + slices[1] + '-' + slices[0];

    slices = time.split(" ");
    var timeSlices = slices[0].split(":");
    var hour = parseInt(timeSlices[0]);
    var min = timeSlices[1];
    if (slices[1] == 'AM' && hour == 12)
        hour -= 12;
    if (slices[1] == 'PM')
        hour = hour + 12;
    if (hour < 10)
        hour = '0' + hour;
    
    time = hour + ":" + min + ":00";

    return date + " " + time;
}