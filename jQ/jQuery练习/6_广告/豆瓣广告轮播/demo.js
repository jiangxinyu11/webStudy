/**
 * Created by SAMSUNG on 2017/2/8.
 */
$(function () {
    var $index = 0;
    $('.list li').on('click',function () {
        $(this).addClass('on').siblings().removeClass('on');
        $index = $(this).index();
        $('.content>div').eq($index).show().siblings().hide();
    });
var timer=setInterval(function () {
    $index += 1;
    $index = $index%($('.list li').length);
    $(".list li:eq("+$index+")").trigger('click');
},1000);
    $('.bd').on('mouseover',function () {
        clearTimeout(timer);
    }).on('mouseout',function () {
        timer=setInterval(function () {
            $index += 1;
            $index = $index%($('.list li').length);
            $(".list li:eq("+$index+")").trigger('click');
        },1000);
    })

});
