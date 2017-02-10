/**
 * Created by SAMSUNG on 2017/2/7.
 */
/**
 * Created by SAMSUNG on 2017/2/7.
 */
$(function () {
    var $comment = $('#comment');
    $('.up').on('click',function () {
        if(!$comment.is(':animated')){
                $comment.animate(
                    {
                        scrollTop:'-=50'
                    }
                    , 400)
        }
    });
    $('.down').on('click',function () {
        if(!$comment.is(":animated")){
            if($comment.height()>50) {
                $comment.animate(
                    {
                        scrollTop:'+ =50'
                    }
                    , 400)
            }
        }
    })
});
