<!-- Simple login form -->
<form action="login_simple.htm#">
    <div class="panel panel-body login-form border-left border-left-lg border-left-info">
        <div class="text-center m-b-20">
            <div class="icon-object bg-info"><i class="icon-user"></i></div>
            <h5>Sign in to your account</h5>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="log_email" type="email" class="form-control" placeholder="Email" name="email"
                required="required">
            <div class="form-control-feedback">
                <i class="icon-envelope text-muted"></i>
            </div>
            <label id="error_log_email" class="validation-error" for="log_email"></label>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="log_password" type="password" class="form-control" placeholder="Password" name="password"
                required="required">
            <div class="form-control-feedback">
                <i class="icon-lock text-muted"></i>
            </div>
            <label id="error_log_password" class="validation-error" for="log_password"></label>
        </div>

        <div class="login-options">
            <div class="row">
                <div class="col-sm-6">
                    <div class="checkbox m-l-5">
                        <label>
                            <input type="checkbox" class="styled" checked="checked">
                            Remember me
                        </label>
                    </div>
                </div>

                <div class="col-sm-6 text-right m-t-10">
                    <a href="http://localhost/templates/penguin/material/login_password_recover.html">Forgot
                        password?</a>
                </div>
            </div>
        </div>

        <div class="form-group">
            <button id="btn_login" type="button" class="btn btn-info btn-labeled btn-labeled-right btn-block">
                <b><i class="icon-enter"></i></b> Sign in
            </button>
        </div>

        <div class="form-group">
            <button id="btn_to_register" type="button" class="btn btn-success btn-labeled btn-labeled-right btn-block">
                <b><i class="icon-user-plus"></i></b> Create an account
            </button>
        </div>
    </div>

</form>
<!-- /simple login form -->