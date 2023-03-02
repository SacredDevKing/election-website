function doValidationForm(validateFields) {
    var isValid = true;

    for (var i in validateFields) {
        var fieldOption = validateFields[i];
        var isFieldValid = checkInputValidation(fieldOption);
        isValid = !isFieldValid ? false : isValid;
    }

    return isValid;
}

function checkInputValidation(fieldOption) {
    var isValid = true;
    var value = $('#' + fieldOption.field_id).val();
    var conditions = fieldOption.conditions;

    for (var i in conditions) {
        var condition = conditions[i];
        var condArr = condition.split(CONST_VALIDATE_SPLITER);
        var cond = condArr[0];
        var error = condArr[1];

        if (cond === 'required') {
            if (value === '')
                isValid = false;
        } else if (cond === 'valid_email') {
            var emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!value.match(emailExp))
                isValid = false;
        } else if (cond.includes('min_length[')) {
            var len = parseInt(cond.split('min_length[')[1].split(']')[0]);
            if (value.length < len)
                isValid = false;
        } else if (cond.includes('max_length[')) {
            var len = parseInt(cond.split('max_length[')[1].split(']')[0]);
            if (value.length > len)
                isValid = false;
        } else if (cond.includes('is_match_field[')) {
            var confFieldName = cond.split('is_match_field[')[1].split(']')[0];
            if ($('#' + confFieldName).val() !== value)
                isValid = false;
        }

        if (!isValid) {
            showValidError(fieldOption.field_id, error);
            break;
        }
    }

    if (isValid)
        showValidError(fieldOption.field_id, "");

    return isValid;
}

function showValidError(tagId, error) {
    if (error == undefined)
        error = "";
    $('#error_' + tagId).html(error);
}