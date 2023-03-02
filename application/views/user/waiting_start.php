<!-- Waiting wrapper -->
<div class="text-center p-t-20 p-b-20">
    <!-- <img src="<?php echo base_url('/assets/global/images/up_come.png?v=' . $randNum) ?>"
        class="error_img img-responsive" alt="" /> -->
    <div class="banner-container">
        <img class="banner-img" src="<?php echo base_url('/assets/global/images/banners/event2.png?v=' . $randNum) ?>">
    </div>

    <h1 class="text-brand launching-text no-margin-top">Event Will Start On</h1>
    <div class="wow fadeInUp">
        <div class="remaining-time text-brand text-danger m-b-30">
            <span class="text-brand days"> 13 Mar 2023, 23:00</span>
        </div>
    </div>

    <h1 class="text-brand launching-text no-margin-top">Remaining Time</h1>
    <div class="timer wow fadeInUp text-danger">
        <div class="days-wrapper text-brand">
            <span class="days"></span> <br>days
        </div>
        <span class="slash">/</span>
        <div class="hours-wrapper text-brand">
            <span class="hours"></span> <br>hours
        </div>
        <span class="slash">/</span>
        <div class="minutes-wrapper text-brand">
            <span class="minutes"></span> <br>minutes
        </div>
        <span class="slash">/</span>
        <div class="seconds-wrapper text-brand">
            <span class="seconds"></span> <br>seconds
        </div>
    </div>

    <div class="row">
        <button type="button" class="btn btn-warning btn-rounded">Log out</button>
    </div>
</div>
<!-- /waiting wrapper -->