/**
 * Created by SAMSUNG on 2017/2/7.
 */
$(function () {
    var $comment = $('#comment');
    $('.bigger').on('click',function () {
        // if($comment.height()<500){
        //
        //     $comment.height($comment.height()+50);
        // }
        $comment.height($comment.height()<500?$comment.height()+50:$comment.height());
        // console.log($comment.height());
    });
    $('.smaller').on('click',function () {
        // if($comment.height()>50){
        //
        //     $comment.height($comment.height()-50);
        // }
        $comment.height($comment.height()>50?$comment.height()-50:$comment.height());
        // console.log($comment.height());
    })
});
