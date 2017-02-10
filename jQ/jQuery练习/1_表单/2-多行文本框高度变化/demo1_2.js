/**
 * Created by SAMSUNG on 2017/2/7.
 */
$(function () {
    var $comment = $('#comment');
        $('.bigger').on('click',function () {
            if(!$comment.is(':animated')){
                if($comment.height()<500) {
                    $comment.animate(
                        {
                            height: '+=50'
                        }
                        , 400)
                }
            }
        });
        $('.smaller').on('click',function () {
            if(!$comment.is(':animated')){
                if($comment.height()>50) {
                    $comment.animate(
                        {
                            height: '-=50'
                        }
                        , 400)
                }
            }
        })
});
