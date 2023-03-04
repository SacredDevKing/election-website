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

<!-- Global Constants -->
<script type="text/javascript">
var BASE_URL = "<?php echo base_url() ?>";
</script>
<!-- /Global Constants -->

<!-- Begin Global scripts -->
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/jquery.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/bootstrap.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/forms/uniform.min.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/pnotify.min.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/sweetalert.js?v=' . $randNum) ?>">
</script>
<script type="text/javascript" src="<?php echo base_url('/assets/custom/js/global/global.js?v=' . $randNum) ?>">
</script>
<!-- End Global scripts -->

<?php
        if (isset($pageJsArr)) {
            foreach ($pageJsArr as $pageJs) { ?>
<script type="text/javascript" src="<?php echo base_url($pageJs . '?v=' . $randNum) ?>"></script>
<?php }
        }
    ?>