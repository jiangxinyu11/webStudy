
/**
 * Created by SAMSUNG on 2017/2/7.
 */
$(function () {
    $(':input').on('focus',function () {
        // $(this).css("background","#fcc");
        $(this).addClass('focus');
    }).on('blur',function () {
        // $(this).css("background","");
        $(this).removeClass('focus');
    })
});
