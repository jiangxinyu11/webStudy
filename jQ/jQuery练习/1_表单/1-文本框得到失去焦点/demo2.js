/**
 * Created by SAMSUNG on 2017/2/7.
 */
$(function () {
    $(':input').focus(function () {
        $(this).addClass('focus');
        //defaultValue 是原生代码
        if($(this).val() == this.defaultValue){
            $(this).val('');
        }

    }).blur(function () {
        $(this).removeClass('focus');
        $(this).val($(this).val()==''?this.defaultValue:$(this).val());
    })
});
