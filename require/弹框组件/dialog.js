/**
 * Created by SAMSUNG on 2017/2/19.
 */
define(["jquery"],function ($) {
        function dialog() {
            var $container = $('<div class="container"></div>');
            var $mask = $('<div class="mask"></div>').on('click',function () {
                $container.remove();
            });
            var $content = $('<div class="demo-content"></div>');
            var $demoTitle = $('<div class="demo-title"></div>');
            var $left = $('<span class="title-left">登录</span>');
            var $right = $('<span class="title-right">[X]</span>').on('click',function () {
                $container.remove();
            });
            var $main = $('<div class="demo-main"></div>');
            $demoTitle.append($left).append($right);
            $content.append($demoTitle).append($main);
            $container.append($mask).append($content);
            $(document.body).append($container);
    }
    return dialog;

});
