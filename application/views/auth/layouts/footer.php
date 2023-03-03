<!-- Footer -->
<!-- <div class="footer text-size-mini">
    &copy; 2016 Penguin - Web app kit by <a href="http://followtechnique.com"
        target="_blank">FollowTechnique</a>&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;Version - 1.1.0
</div> -->
<!-- /footer -->

</div>
<!-- /page content -->

</div>

<!-- Begin Global Constants -->
<script type="text/javascript">
    var BASE_URL = "<?php echo base_url() ?>";
</script>
<!-- End Global Constants -->

<!-- Begin Global scripts -->
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/jquery.js?v=' . $randNum) ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/assets/global/js/bootstrap.js?v=' . $randNum) ?>"></script>
<script type="text/javascript"
    src="<?php echo base_url('/assets/global/js/forms/uniform.min.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/pnotify.min.js?v=' . $randNum) ?>"></script>
<!-- End Global scripts -->

<!-- Begin Custom Scripts -->
<script type="text/javascript"
    src="<?php echo base_url('/assets/custom/js/global/constants.js?v=' . $randNum) ?>"></script>
<script type="text/javascript"
    src="<?php echo base_url('/assets/custom/js/global/cookie.js?v=' . $randNum) ?>"></script>
<script type="text/javascript"
    src="<?php echo base_url('/assets/custom/js/global/validator.js?v=' . $randNum) ?>"></script>
<?php
if (isset($pageJsArr)) {
    foreach ($pageJsArr as $pageJs) { ?>
        <script type="text/javascript" src="<?php echo base_url($pageJs . '?v=' . $randNum) ?>"></script>
    <?php }
}
?>
<!-- End Custom Scripts -->

</body>

</html>