

//轮播图原理
$(document).ready(function(){
 var slideShow=$(".slideShow"),                   //获取最外层框架的名称
 ul=slideShow.find("ul"), 
 showNumber=slideShow.find(".showNav span"),      //获取按钮
 oneWidth=slideShow.find("ul li").eq(0).width();  //获取每个图片的宽度
 var timer=null;                                  //定时器返回值，主要用于关闭定时器
 var iNow=0;                                      //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
  
 showNumber.on("click",function(){                //为每个按钮绑定一个点击事件 
  $(this).addClass("active").siblings().removeClass("active");         //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
  var index=$(this).index();                       //获取哪个按钮被点击，也就是找到被点击按钮的索引值
  iNow=index;
  ul.animate({
  "left":-oneWidth*iNow,                          //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNOWx确定
  })
 });
  
 timer=setInterval(function(){                   //打开定时器
  iNow++;                                         //让图片的索引值次序加1，这样就可以实现顺序轮播图片
  if(iNow>showNumber.length-1){                  //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
  iNow=0;
  }
  showNumber.eq(iNow).trigger("click");           //模拟触发数字按钮的click
 },3000);                                         //3000为轮播的时间
 $("#head1").mouseenter(function(){
   clearInterval(timer);
 })
 $("#head1").mouseleave(function(){
     timer=setInterval(function(){                //打开定时器
     iNow++;                                     //让图片的索引值次序加1，这样就可以实现顺序轮播图片
     if(iNow>showNumber.length-1){                //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
     iNow=0;
     }
     showNumber.eq(iNow).trigger("click");         //模拟触发数字按钮的click
     },3000); 
 })
})






//回到顶部特效

$(window).scroll(function(){               //当滚动条滚动时执行下面的函数
  var sc=$(window).scrollTop();            //获取滚动的高度
  if (sc>0) {                              //如果滚动的高度大于0，回到顶部的图标出现
    $(".gif").css("display","block");       
  }    
  if (sc==0) {                             //如果滚动的高度等于0，回到顶部的图标消失
    $(".gif").css("display","none");
  }                                        //由于回到顶部的按钮是由a标签组成的，a标签的默认值为#，即点击时会回到顶部
})



//实现字体向上滚动的特效
function autoScroll(obj) {                  //传入一个包含li数组的父级元素
    $(obj).find("ul").animate({             //使li执行动画
        marginTop: "-39px"                  //向上移动39px，移动的时间为0.5s;
    }, 500, function() {
        $(this).css({
            marginTop: "0px"                //然后改变ul的margin-top值，变为0;
        }).find("li:first").appendTo(this); //再将向上移动消失的元素加到ul标签的后面，这样就可以实现它的无限循环
    })
}

$(function() {
    setInterval('autoScroll(".apple")', 2000);

})


$(function(){
  $(".photo_a").click(function(){               //弹出层的实现方法，原理和article1中的原理相同
    var bw=$(document.body).width();
        hw=$(document.body).height();
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_a").show();
  })
  $(".photo_b").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_b").show();
  })
  $(".photo_c").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_c").show();
  })
  $(".photo_d").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_d").show();
  })
  $(".photo_e").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".picture_e").show();
  })
  $(".photo_f").click(function(){
    var bw=$(document.body).width();
        hw=$(document.body).height();
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

//搜索框的制作
$(function(){                                       
  $('.select_a').bind('keyup',function(){             //当搜索框输入文字时，执行下面的函数           
     $('#search-suggest').show().css({                //下面的搜索提示内容显示
     top:$('.select_a').offset().top+$('.select_a').height()+2,    //搜索提示内容放置的位置
     left:$('.select_a').offset().left
   });
 });
  $(document).click(function(){              //点击其他的位置，搜索提示内容消失
    $('#search-suggest').hide();
  });
})



$(function(){                                //点击弹出内容
  $(".list_b").click(function(){
    alert("你还没有登录，请先登录！");
  })
  $(".list_e").click(function(){
    alert("你还没有登录，请先登录！");
  })
  $(".hua").click(function(){
    alert("你还没有登录，请先登录！");
  })
  $(".slider-extra").click(function(){
    alert("你还没有登录，请先登录！");
  })
  $("#banner_list").click(function(){
    alert("你还没有登录，请先登录！");
  })
  $("#ul").click(function(){
    alert("你还没有登录，请先登录！");
  })
})