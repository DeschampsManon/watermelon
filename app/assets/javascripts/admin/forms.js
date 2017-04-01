function change_image_src(){
    var $element = $(this)[0];
    var $element_preview = $(this).parent().find("img");
    var ext = $element.files[0]['name'].substring($element.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
    if ($element.files && $element.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $element_preview.attr('src', e.target.result);
        }
        reader.readAsDataURL($element.files[0]);
    } else {
        var alert_error = '<div class="container"> <p class="alert alert-danger">'+I18n.translate('wrong_image_format')+'</p></div>';
        $("#page-header").after(alert_error);
    }
}

function remove_string_spaces(){
    var str = $(this).val().replace(/\s+/g, '');
    $(this).val(str);
}

$(document).ready(function(){
    $(".form-file input").change(change_image_src)
    $("input.no-spaces").keyup(remove_string_spaces);
    $("input.no-spaces").on('paste', remove_string_spaces);
    $("input.no-spaces").on('change', remove_string_spaces);
});