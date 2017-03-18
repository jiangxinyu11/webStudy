/**
 * Created by SAMSUNG on 2017/2/19.
 */
define(["jquery"],function ($) {
    function Dialog() {

    }
    Dialog.prototype.open = function (options) {
        var setting={
            width:400,
            height:300,
            title:"标题"
        };
        $.extend(setting,options);
        var that = this;
        this.$container = $('<div class="container"></div>');
        var $mask = $('<div class="mask"></div>').on('click',function () {
            that.close();
        });
        var $content = $('<div class="demo-content"></div>').css({
            width: setting.width,
            height: setting.height
        });
        var $demoTitle = $('<div class="demo-title"></div>');
        var $left = $('<span class="title-left">'+setting.title+'</span>');
        var $right = $('<span class="title-right">[X]</span>').on('click',function () {
            that.close();
        });
        var $main = $('<div class="demo-main"></div>').load(setting.url);
        $demoTitle.append($left).append($right);
        $content.append($demoTitle).append($main);
        this.$container.append($mask).append($content);
        $(document.body).append(this.$container);
    };
    Dialog.prototype.close = function () {
        this.$container.remove();
    };
    return Dialog;

});
