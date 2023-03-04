<!-- Vote wrapper -->
<div class="p-t-20 p-b-20">
    <div class="text-center banner-container ">
        <img class="banner-img shadow" src="<?php echo $event['event_banner'] ?>">
    </div>
    <div class="row">
        <h1 class="text-center text-brand launching-text no-margin-top text-danger"><?php echo $event['name']?>
            &nbsp;&nbsp;Result
        </h1>
    </div>

    <div class="candidates-container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <?php  
                foreach ($candidates as $candiate) {
            ?>
                <div class="candidate">
                    <div class="panel panel-flat">
                        <div class="panel-body" style="min-height: 130px; ">
                            <div class="well profile-flat no-padding-bottom border-none">
                                <div class="col-sm-12 no-padding">
                                    <div class="col-xs-12 col-sm-3">
                                        <figure>
                                            <img src="<?php echo $candiate['candi_photo'] ?>" alt=""
                                                class="img-circle img-responsive">
                                        </figure>
                                    </div>
                                    <div class="col-xs-12 col-sm-7">
                                        <h3 class="no-margin">No. <?php echo $candiate['candi_no']; ?></h3>
                                        <h3 class="no-margin candi-name"
                                            data-candi-name="<?php echo $candiate['candi_name'];?>">
                                            <?php echo $candiate['candi_name']; ?></h3>
                                        <p class="campagin-container"><strong>Campagin: </strong>
                                            <?php echo $candiate['candi_campaign']; ?> </p>
                                    </div>
                                    <div class="col-xs-12 col-sm-2 text-center">
                                        <h3 class="no-margin text-brand text-danger m-t-20 vote-cnt"
                                            data-vote-cnt="<?php echo $candiate['vote_cnt']; ?>">
                                            <?php echo $candiate['vote_cnt']; ?></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php 
                }
            ?>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="panel-body text-center">
                    <div class="display-inline-block" id="c3-pie-chart"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="row action-btn-containers">
        <button type="button" class="btn btn-warning btn-rounded btn-log-out">Log out</button>
    </div>
</div>
<!-- /vote wrapper -->