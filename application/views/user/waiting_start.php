<!-- Waiting wrapper -->
<div class="text-center p-t-20 p-b-20">
    <!-- <img src="<?php echo base_url('/assets/global/images/up_come.png?v=' . $randNum) ?>"
        class="error_img img-responsive" alt="" /> -->

    <div class="banner-container">
        <img class="banner-img shadow" src="<?php echo $event['event_banner'] ?>">
    </div>

    <h1 class="text-brand launching-text no-margin-top"><?php echo $event['name'] ?> &nbsp;&nbsp;Will Start On
    </h1>
    <div class="wow fadeInUp">
        <div class="remaining-time text-brand text-danger m-b-30">
            <span class="text-brand days open-time" data-open-time="<?php echo $event['open_date']?>">
                <?php echo $openDate ?></span>
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
        <button type="button" class="btn btn-warning btn-rounded btn-log-out">Log out</button>
    </div>
</div>
<!-- /waiting wrapper -->