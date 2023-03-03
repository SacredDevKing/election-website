<!-- Vote wrapper -->
<div class="p-t-20 p-b-20">
    <!-- <img src="<?php echo base_url('/assets/global/images/up_come.png?v=' . $randNum) ?>"
        class="error_img img-responsive" alt="" /> -->
    <div class="row">
        <h1 class="text-center text-brand launching-text no-margin-top text-danger"><?php echo $event['name']?>
            &nbsp;&nbsp;Activated
        </h1>
    </div>
    <div class="text-center banner-container ">
        <img class="banner-img shadow" src="<?php echo $event['event_banner'] ?>">
    </div>

    <div class="candidates-container">
        <h3 class="candidate-select-cnt"> You can select up 2 candidates.</h3>
        <div class="row">
            <?php  
                foreach ($candidates as $candiate) {
            ?>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="candidate">
                    <div class="panel panel-flat">
                        <div class="panel-body">
                            <div class="well profile-flat no-padding-bottom border-none">
                                <div class="col-sm-12 no-padding">
                                    <div class="col-xs-12 col-sm-4">
                                        <figure>
                                            <img src="<?php echo $candiate['candi_photo'] ?>" alt=""
                                                class="img-circle img-responsive">
                                        </figure>
                                    </div>
                                    <div class="col-xs-12 col-sm-8">
                                        <div class="checkbox vote-check">
                                            <label>
                                                <input type="checkbox"
                                                    class="candi-checkbox control-success candi-selected"
                                                    data-candi-id=<?php echo $candiate['id']; ?>>
                                            </label>
                                        </div>
                                        <h3 class="no-margin">No. <?php echo $candiate['candi_no']; ?></h3>
                                        <h3 class="no-margin"><?php echo $candiate['candi_name']; ?></h3>
                                        <p><strong>Campagin: </strong> <?php echo $candiate['candi_campaign']; ?> </p>
                                    </div>
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
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"></div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="candidate">
                <div class="panel panel-flat">
                    <div class="panel-body text-center" style="min-height: 40px">
                        <div class="no-vote-container">
                            <label class="no-vote-label">No Vote
                            </label>
                            <div class="checkbox vote-check" style="margin-top: 2px">
                                <label style="padding-right: 32px">
                                    <input type="checkbox" class="control-success" id="no_vote_selected">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"></div>
    </div>

    <div class="row action-btn-containers">
        <button type="button" class="btn btn-warning btn-rounded btn-log-out">Log out</button>
        <button type="button" class="btn btn-primary btn-rounded pull-right m-l-10 btn-reset">Reset</button>
        <button type="button" class="btn btn-success btn-rounded pull-right btn-vote">Vote</button>
    </div>
</div>
<!-- /vote wrapper -->