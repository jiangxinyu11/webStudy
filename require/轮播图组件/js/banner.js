/**
 * Created by SAMSUNG on 2017/2/20.
 */
define(["jquery"],function ($) {
    //圆形：circular 方形：square
    //image：图片url数组
    //shape：切换按钮的形状
    //button：左右键的位置
    //position:插入元素的id

    //坑：应当在所有的按键或者划入滑出功能写完后在把container添加到html中 不然如果新建了多个
    //   轮播图的时候已经插入html中在通过类名选取的时候会弄错 导致功能错误
    //   没有插入DOM的时候不能用选择器选取
    //   用构造函数下的方法写是在内存中的 如果设置全局变量会出错
    function Banner() {

    }
    Banner.prototype.init = function (options) {
        //设置参数初始值
        var setting = {
            shape:"square",
            button:"bottom",
            position: document.body

        };
        //将传进来的参数整合到初始值中
        $.extend(setting,options);
        //设置container滑入滑出的定时器
        var $container = $('<div class="container"></div>').hover(function () {
            stop();
        },function () {
            run();
        });
        var $arrow = $('<div class="arrow"></div>');
        //设置左边按键
        var $arrowLeft = $('<span class="left">&lt</span>').on('click',function () {
            self.index--;
            if(self.index == -1){
                self.index = setting.image.length - 1;
            }
            changeImg(self.index);
        });
        //设置右边按键
        var $arrowRight = $('<span class="right">&gt</span>').on('click',function () {
            self.index = (self.index+1) % setting.image.length;
            changeImg(self.index)
        });
        var $tab = $('<ul class="tab"></ul>');
        var $content = $('<div class="content"></div>');

        //循环插入li和image 并且设置tab按钮的形状
        for(var i=0; i<setting.image.length; i++){
            if(setting.shape == "circular"){
                var $li = $('<li></li>').css('border-radius','50%');
            }else if(setting.shape == "square"){
                var $li = $('<li>'+ (i+1) +'</li>').css('border-radius','0%');
            }
            //设置tab改变图片
            this.index = 0;
            var self = this;
            $li.on('mouseover',function () {
                self.index = $(this).index();
                changeImg(index);
            });
            $tab.append($li);
            var $img = $('<img src="'+ setting.image[i] +'">');
            $content.append($img);
        }
        //设置左右按键的位置
        if(setting.button == "center"){
            $arrow.css({
                top:'50%',
                marginTop:-10
            });
            $arrowLeft.css({
                float:'left',
                marginLeft:10
            });
            $arrowRight.css({
                float:'right',
                marginRight:10
            })
        }else if(setting.button == "bottom"){
            $arrow.css({
                left:10,
                bottom:10
            })
        }
        //将标签插入DOM中
        $tab.children().eq(0).addClass('selected');
        $content.children().eq(0).show().siblings().hide();
        $arrow.append($arrowLeft).append($arrowRight);
        $container.append($arrow).append($tab).append($content);
        $(setting.position).append($container);


        //改变图片和tab函数
        function changeImg(index) {
            $('li',$tab).eq(index).addClass('selected').siblings().removeClass('selected');
            $('img',$content).eq(index).show().siblings().hide();
        }
        //定时器
        this.timer = null;
        function run() {
            self.timer = setInterval(function () {
                $arrowRight.trigger('click');
            },1000);
        }
        run();
        function stop() {
            clearInterval(self.timer);
        }

    };
    return Banner;
});
