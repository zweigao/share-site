$(document).ready(function(){
 var slideShow=$(".slideShow"), //获取最外层框架的名称
 ul=slideShow.find("ul"), 
 showNumber=slideShow.find(".showNav span"),//获取按钮
 oneWidth=slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
 var timer=null; //定时器返回值，主要用于关闭定时器
 var iNow=0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
  
 showNumber.on("click",function(){  //为每个按钮绑定一个点击事件 
  $(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
  var index=$(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
  iNow=index;
  ul.animate({
  "left":-oneWidth*iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNOWx确定
  })
 });
  
 timer=setInterval(function(){ //打开定时器
  iNow++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
  if(iNow>showNumber.length-1){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
  iNow=0;
  }
  showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
 },3000); //4000为轮播的时间
 $("#head1").mouseenter(function(){
   clearInterval(timer);
 })
 $("#head1").mouseleave(function(){
     timer=setInterval(function(){ //打开定时器
     iNow++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
     if(iNow>showNumber.length-1){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
     iNow=0;
     }
     showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
     },3000); 
 })
})








$(window).scroll(function(){
  var sc=$(window).scrollTop();
  if (sc>0) {
    $(".gif").css("display","block");
  }
  if (sc==0) {
    $(".gif").css("display","none");
  }
})




  //滚动
function autoScroll(obj) {
    $(obj).find("ul").animate({
        marginTop: "-39px"
    }, 500, function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    })
}

$(function() {
    setInterval('autoScroll(".apple")', 2000);

})


$(function(){
  $(".photo_a").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();//获取屏幕宽度
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_a").show();
  })
  $(".photo_b").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();//获取屏幕宽度
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_b").show();
  })
  $(".photo_c").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();//获取屏幕宽度
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_c").show();
  })
  $(".photo_d").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();//获取屏幕宽度
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_d").show();
  })
  $(".photo_e").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();//获取屏幕宽度
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_e").show();
  })
  $(".photo_f").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();//获取屏幕宽度
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_f").show();
  })
  $(".layer").click(function(){
     $(this).css("display","none");
     $(".picture_a").hide();
     $(".picture_b").hide();
     $(".picture_c").hide();
     $(".picture_d").hide();
     $(".picture_e").hide();
     $(".picture_f").hide();
  })
})


$(function(){
  $('.select_a').bind('keyup',function(){
     $('#search-suggest').show().css({
     top:$('.select_a').offset().top+$('.select_a').height()+2,
     left:$('.select_a').offset().left
   });
 });
  $(document).click(function(){
    $('#search-suggest').hide();
  });
})

