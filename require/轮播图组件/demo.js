/**
 * Created by SAMSUNG on 2017/2/20.
 */
require(["jquery","banner"],function ($,Banner) {
    $('#button').on('click',function () {

        var banner = new Banner();
        banner.init({
            image:[
                'image/1.jpg',
                'image/2.jpg',
                'image/3.jpg',
                'image/4.jpg'
            ],
            shape:"square",
            button:"center",
            position:document.body
        });

    });
});
