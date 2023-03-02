</div>
<footer>
    <div class="text-center">
        <div class="col-sm-12">
            <p>© 2023 Kitty Phong&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Web app kit by <a
                    href="http://followtechnique.com"
                    target="_blank">FollowTechnique</a>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Version -
                1.1.0</p>
        </div>
    </div>
</footer>
</div>

<!-- Begin Global scripts -->
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/jquery.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/bootstrap.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/forms/uniform.min.js?v=' . $randNum) ?>">
</script>
<!-- 
<script src="js/jquery.ui.js"></script>
<script src="js/nav.accordion.js"></script>
<script src="js/hammerjs.js"></script>
<script src="js/jquery.hammer.js"></script>
<script src="js/scrollup.js"></script>
<script src="js/jquery.slimscroll.js"></script>
<script src="js/smart-resize.js"></script>
<script src="js/blockui.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/fancybox.min.js"></script>
<script src="js/venobox.js"></script>
<script src="js/forms/switchery.js"></script>
<script src="js/forms/select2.min.js"></script>
<script src="js/core.js"></script> -->


<script src="<?php echo base_url('/assets/global/js/pnotify.min.js?v=' . $randNum) ?>"></script>
<!-- End Global scripts -->

<?php
        if (isset($pageJsArr)) {
            foreach ($pageJsArr as $pageJs) { ?>
<script type="text/javascript" src="<?php echo base_url($pageJs . '?v=' . $randNum) ?>"></script>
<?php }
        }
    ?>