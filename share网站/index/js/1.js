
//下拉菜单
$(function(){  
        $("li").has("ul").mouseenter(function(){            //鼠标移入的时候
            $(this).children("ul").stop(true).slideDown(5); //找到含有ul标签的，下拉
        }).mouseleave(function () {                         //鼠标离开的时候
            $(this).children("ul").stop(true).slideUp(5);   //找到含有ul标签的，收起
        })  
 })


//轮播图
$(document).ready(function() {
var length,
currentIndex = 0,
interval,
hasStarted = false,       //是否已经开始轮播 
t = 3000;                //轮播时间间隔 
length = $('.slider-panel').length;   //length表示为图片的数量
$('.slider-panel:not(:first)').hide();  //将除了第一张图片隐藏 
$('.slider-item:first').addClass('slider-item-selected');    //将第一个slider-item设为激活状态 


$('.slider-panel').hover(function() {    //鼠标移入时停止动画，移出时开始动画
stop();
}, function() {
start();
});
$('.slider-item').hover(function(e) {    //鼠标移到按钮上时
stop();                                  //停止
var preIndex = $(".slider-item").filter(".slider-item-selected").index();   //令preIndex为当前的处于活跃状态的索引值
currentIndex = $(this).index();                     //令currentIndex为鼠标移入的索引值
play(preIndex, currentIndex);                       //执行翻页函数
}, function() {
start();                                           //鼠标移出按钮时开始动画
})

      
function next() {                             //向后翻页函数
var preIndex = currentIndex;
currentIndex = ++currentIndex % length;   // 使图片循环
play(preIndex, currentIndex);             //执行翻页函数
}



function play(preIndex, currentIndex) {        //翻页函数（从preIndex页翻到currentIndex页    preIndex 整数，翻页的起始页   currentIndex 整数，翻到的那页 ）
$('.slider-panel').eq(preIndex).fadeOut(500)    //获取起始页，并消失
.parent().children().eq(currentIndex).fadeIn(500);  //获取要翻到的那一页，并出现
$('.slider-item').removeClass('slider-item-selected');  //使当前页除去激活状态
$('.slider-item').eq(currentIndex).addClass('slider-item-selected');  //使要翻到的页处于激活状态
}


function start() {       //开始轮播
if (!hasStarted) {       //使hasStarted为true
hasStarted = true;       
interval = setInterval(next, t);  //设置计时器
}
}



function stop() {          //停止轮播
clearInterval(interval);   //使hasStarted为false
hasStarted = false;        //关闭记时器
}                          
//开始轮播                 打开页面时就开始轮播
start();
});




//轮播图的制作
$(function(){
var cur=0;
var auto=null;
var $btn=$("#btn li");
var $li=$("#banner_list li");
$li.eq(0).fadeIn();            //将第一副图显示
function lunbo(){                
$btn.eq(cur).addClass("sel").siblings().removeClass("sel"); //将第一个按钮变成激活状态，其他的按钮除去激活状态
$li.eq(cur).fadeIn(400).siblings().hide();                  //第一幅图显示，其他的图隐藏
cur++;                                                      //循环加1
cur=cur>=$btn.length?0:cur;                                 //判断如果cur大于按钮的长度，则变成0
auto=setTimeout(lunbo,2000);                                //每2秒执行一次函数，即每两秒轮播一次
}
lunbo();                                                    //一开始就执行函数，开始轮播
$btn.hover(function(){
clearTimeout(auto);                                        //当放到按钮上时，清除计时器
var index=$(this).index();                                 //获取鼠标所放按钮上的索引值
$(this).addClass("sel").siblings().removeClass("sel");     //将鼠标所放的按钮变成激活状态，其他的除去激活状态
$li.eq(index).fadeIn(0).siblings().hide();                 //图片所放按钮对应的图片显示，其他图片隐藏
},function(){
var index=$(this).index()+1;                                //当鼠标移出去时，使图片接着刚才的顺序继续轮播下去
cur=index;
auto=setTimeout(lunbo,2000);
})
})



//轮播图的制作

$(function(){
var firstImg = $('#ul li').first().clone();               // 获取第一张图片的节点对象，复制一张
$('#ul').append(firstImg).width($('#ul li').length * $('#ul img').width());  // 添加到最后的位置 并设置 ul 的宽度
var i = 0;
var imgW = $('#ul img').width();         //令imgW为图片的宽度
var timer=null;                          //设置计时器
$('#next').click(function() {            //点击下一张时，移动到下一张
moveImg(++i);                         
});
$('#prev').click(function() {            //点击上一张时，移动到上一张
moveImg(--i);
});
function moveImg() {
if (i == $('#ul li').length) {             //如果是最后一张的话，改变ul的样式，使他的left变为0，同时把i变成1；
$('#ul').css({
left: 0
})
i = 1;
}
if (i == -1) {
i =3;                                  //如果是第一张的话，改变left的值，使它当点击上一张时，跳转成最后一张
$('#ul').css({
left: ($('#ul li').length - 1) * -300
});
}
$('#ul').stop().animate({            //通过改变ul的left值来移动图片
left: i * -imgW
}, 400);
}
function autoPlay() {
timer = setInterval(function() {
i++;                                //设置图片每两秒自动播放一次
moveImg();
}, 2000);
}
autoPlay();
$('#play').mouseover(function() {       //当鼠标移入时，按钮显示，同时清除计时器；
$('#play button').show();                // 当鼠标移出时,继续自动播放，同时隐藏按钮
clearInterval(timer)                
}).mouseout(function() {
autoPlay();
$('#play button').hide();
})
})