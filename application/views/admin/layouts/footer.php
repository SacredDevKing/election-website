<!-- Global scripts -->
<script src="<?php echo base_url('/assets/global/js/jquery.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/bootstrap.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/jquery.ui.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/nav.accordion.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/hammerjs.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/jquery.hammer.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/scrollup.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/jquery.slimscroll.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/smart-resize.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/blockui.min.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/wow.min.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/fancybox.min.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/venobox.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/forms/uniform.min.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/forms/switchery.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/forms/select2.min.js?v=' . $randNum) ?>"></script>
<script src="<?php echo base_url('/assets/global/js/core.js?v=' . $randNum) ?>"></script>
<!-- /global scripts -->

<!-- Global Constants -->
<script type="text/javascript">
    var BASE_URL = "<?php echo base_url() ?>";
</script>
<!-- /Global Constants -->

<!-- Custom Scripts -->
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
<!-- /Custom Scripts -->
</body>

</html>