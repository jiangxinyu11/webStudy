/**
 * Created by SAMSUNG on 2017/2/7.
 */
$(function () {
    var $comment = $('#comment');
    $('.bigger').on('click',function () {
        if($comment.height()<500){

            $comment.height($comment.height()+50);
        }else{

        }
        // console.log($comment.height());
    })
});
