/**
 * Created by SAMSUNG on 2017/2/9.
 */
$(function () {
   $('.main').on('click',function () {
       $(this).children('ul').toggle();
       if($(this).children('ul').is(':hidden')){
           $(this).children('a').css('background-image','url("images/down.gif")');
       }else{
           $(this).children('a').css('background-image','url("images/up.gif")');
       }
   });
    //hover中有两个函数 第一个函数是滑入事件第二个函数是滑出事件
    $('.hmain').hover(function () {
        $(this).children('ul').stop().slideDown();
        $(this).children('a').css('background-image','url("images/up.gif")');
    },function () {
        $(this).children('ul').stop().slideUp();
        $(this).children('a').css('background-image','url("images/down.gif")');
    })
});
