<!-- Simple register form -->
<form action="login_registration.htm#">
    <div class="panel panel-body login-form border-left border-left-lg border-left-success">
        <div class="text-center m-b-20">
            <div class="icon-object bg-success"><i class="icon-user"></i></div>
            <h5>Create new account</h5>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="reg_name" type="text" class="form-control" placeholder="Name" name="name" required="required">
            <div class="form-control-feedback">
                <i class="icon-user text-muted"></i>
            </div>
            <label class="validation-error" for="reg_name"></label>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="reg_email" type="email" class="form-control" placeholder="Email" name="email"
                required="required">
            <div class="form-control-feedback">
                <i class="icon-envelope text-muted"></i>
            </div>
            <label class="validation-error" for="reg_email"></label>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="reg_password" type="password" class="form-control" placeholder="Password" name="password"
                required="required">
            <div class="form-control-feedback">
                <i class="icon-lock text-muted"></i>
            </div>
            <label class="validation-error" for="reg_password"></label>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="reg_conf_password" type="password" class="form-control" placeholder="Confirm password"
                name="confirm" required="required">
            <div class="form-control-feedback">
                <i class="icon-lock text-muted"></i>
            </div>
            <label class="validation-error" for="reg_conf_password"></label>
        </div>

        <div class="form-group">
            <button id="btn_register" type="button" class="btn btn-success btn-labeled btn-labeled-right btn-block">
                <b><i class="icon-user-plus"></i></b> Register now
            </button>
        </div>
    </div>

</form>
<!-- /simple register form -->