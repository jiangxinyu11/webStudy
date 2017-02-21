/**
 * Created by SAMSUNG on 2017/2/19.
 */
require(["jquery","dialog2"],function($,Dialog) {
    $('#click').on('click',function () {

        Dialog.open({
            title:"登录",
            url:'login.html'
        });
    });
    $('#close').on('click',function () {
        Dialog.close();
    })
});
