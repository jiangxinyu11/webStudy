/**
 * Created by SAMSUNG on 2017/2/20.
 */
define(["jquery"],function ($) {
    //圆形：circular 方形：square
    //image：图片url数组
    //shape：切换按钮的形状
    //button：左右键的位置
    //position:插入元素的id
    function Banner() {

    }
    Banner.prototype.init = function (options) {
        var setting = {
            shape:"square",
            button:"bottom",
            position: document.body

        };
        $.extend(setting,options);

        var $container = $('<div class="container"></div>');
        var $arrow = $('<div class="arrow"></div>');
        var $arrowLeft = $('<span class="left">&lt</span>');
        var $arrowRight = $('<span class="right">&gt</span>');
        var $tab = $('<ul class="tab"></ul>');
        var $content = $('<div class="content"></div>');

        //循环插入li和image 并且设置tab按钮的形状
        for(var i=0; i<setting.image.length; i++){
            if(setting.shape == "circular"){
                var $li = $('<li></li>').css('border-radius','50%');
            }else if(setting.shape == "square"){
                var $li = $('<li>'+ (i+1) +'</li>').css('border-radius','0%');
            }
            $tab.append($li);
            var $img = $('<img src="'+ setting.image[i] +'">');
            $content.append($img);
        }
        $tab.children().eq(0).addClass('selected');
        $content.children().eq(0).show().siblings().hide();
        $arrow.append($arrowLeft).append($arrowRight);
        $container.append($arrow).append($tab).append($content);
        $(setting.position).append($container);
        //设置左右键的位置
        if(setting.button == "center"){
            $('.arrow').css({
                top:'50%',
                marginTop:-10
            });
            $('.arrow .left').css({
                float:'left',
                marginLeft:10
            });
            $('.arrow .right').css({
                float:'right',
                marginRight:10
            })
        }else if(setting.button == "bottom"){
            $('.arrow').css({
                left:10,
                bottom:10
            })
        }

        //设置tab改变图片
        this.index = 0;
        $('.tab li').hover(function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            this.index = $(this).index();
            $('.content img').eq(index).show().siblings().hide();
        });

        //设置左右键切换图片
        $('.arrow .left').on('click',function () {
            this.index--;
            if(index == -1){
                this.index = setting.image.length - 1;
            }
            changeImg(this.index);
        });
        $('.arrow .right').on('click',function () {
            this.index = (this.index+1) % setting.image.length;
            changeImg(this.index)
        });

        //改变图片和tab函数
        function changeImg(index) {
            $('.tab li').eq(index).addClass('selected').siblings().removeClass('selected');
            $('.content img').eq(index).show().siblings().hide();
        }
        //定时器
        var timer;
        function run() {
            timer = setInterval(function () {
                $('.arr ow .right').trigger('click');
            },1000);
        }
        run();

        $('.container').hover(function () {
            clearInterval(timer);
        },function () {
            run();
        })

    };
    return Banner;
});
