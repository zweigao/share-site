
//下拉菜单
$(function(){  
        $("li").has("ul").mouseenter(function(){            //鼠标移入的时候
            $(this).children("ul").stop(true).slideDown(5); //找到含有ul标签的，下拉
        }).mouseleave(function () {                         //鼠标离开的时候
            $(this).children("ul").stop(true).slideUp(5);   //找到含有ul标签的，收起
        })  
 })