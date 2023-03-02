<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Parse date and time to datetime type.
 * Input: 17/03/2023 12:00 AM
 * Output: 2021-12-21 00:00:00
 *
 * @access	public
 * @return	string
 */
if (!function_exists('parseToDatetime')) {
    function parseToDatetime($date, $time)
    {
        // Parse date
        $slices = explode("/", $date);
        $date = $slices[2] . ':' . $slices[1] . ':' . $slices[0];

        // Parse time.
        $timeslices = explode(" ", $time);
        $time = $timeslices[0];
        $slices = explode(":", $time);
        $hour = intVal($slices[0]);
        $min = $slices[1];

        if ($hour == 12)
            $hour -= 12;
        if ($timeslices[1] == 'PM')
            $hour += 12;
        if ($hour < 10)
            $hour = '0' . $hour;

        $date = $date . ' ' . $hour . ':' . $min . ':00';

        return $date;
    }
}

/**
 * Parse datetime to date
 * Input: 2021-12-21 00:00:00
 * Output: 17/03/2023
 *
 * @access	public
 * @return	string
 */
if (!function_exists('parseDatetimeToDate')) {
    function parseDatetimeToDate($datetime)
    {
        $slices = explode(" ", $datetime);

        // Parse date
        $subslices = explode("-", $slices[0]);
        $date = $subslices[2] . '/' . $subslices[1] . '/' . $subslices[0];

        return $date;
    }
}

/**
 * Parse datetime to time.
 * Input: 2021-12-21 23:30:00
 * Output: 11:30 PM
 *
 * @access	public
 * @return	string
 */
if (!function_exists('parseDatetimeToTime')) {
    function parseDatetimeToTime($datetime)
    {
        $slices = explode(" ", $datetime);
        // Parse date
        $subslices = explode(":", $slices[1]);
        $hour = intval($subslices[0]);

        if ($hour > 12) {
            $hour = $hour - 12;
            if ($hour < 10)
                $hour = '0' . $hour;
            return $hour . ':' . $subslices[1] . ' PM';
        }

        if ($hour == 0)
            $hour = 12;
        if ($hour < 10)
            $hour = '0' . $hour;
        return $hour . ':' . $subslices[1] . ' AM';
    }
}