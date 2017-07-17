
//图像的显示和隐藏特效
$(function(){
	$(".share").mouseenter(function(){       //移入分享的图标中
		$(".index").css("display","block")   //出现三个小图标
	})
	$(".share").mouseleave(function(){       //移出分享的图标
		$(".index").css("display","none")    //三个小图标消失
	})
	$(".index").mouseenter(function(){       //移入三个小图标
		$(this).css("display","block")       //三个小图标出现
	})
	$(".index").mouseleave(function(){       //移出三个小图标
		$(this).css("display","none")        //三个小图标消失
	})
})






//点击红色数字加一特效
$(function(){
	var _click_count = 0;
    $(".story").bind("click", function(e) {        //直接给story一个事件好了.    
    var $i = $("<b>").text("+" + "1");             //添加到页面的元素  
    var x = e.pageX,                               //鼠标点击的位置  
        y = e.pageY;                           
    $i.css({
        "z-index":2,                          //让添加的元素修改样式
        "top": y - 15,
        "left": x,
        "position": "absolute",                //绝对定位
        "color": "red"
    });
    $("body").append($i);                    //向页面中添加元素与
    $i.animate({                             //移动元素
            "top": y - 180,
            "opacity": 0                     //使元素消失                    
        },
        1500,                                //元素移动的时间为1.5s
        function() {
            $i.remove();                     //移除元素
        }
    );
});
})


$(function(){
	$(".shou").click(function(){             //点击收藏图标时，提示收藏成功
		alert("收藏成功！")
	})
})


//点赞特效原理
$(function(){
    $(".story").click(function () {            //点击，改变图像的路径
       $(this).attr("src","images/j1.png");   
       $(".click").html("已点赞");             //改变文字      
       $(".s1 span").css({
        "margin-left":"15px",
       })
    })
})

$(function(){
    $(".inputa").click(function(){            //点击弹出发布成功
        alert("发表评论成功！")
        $(".t1").val("");                     //清除文本框的内容
    })
})



//弹出层的实现原理
$(function(){
    $(".p6").click(function(){                //点击，获取屏幕的高度和宽度
    var bw=$(document).width();  //获取页面的宽度
        hw=$(document).height();//获取页面高度
       $(".layer").css({         //将类名为layer的元素，高度设置为页面高度，宽度设置为页面宽度，
          width:bw,              //类名为layer的元素为遮罩层
          height:hw,
          display:"block"        //让类名为layer的元素显示
    })
    $(".main_d").show();         //将类名为main_d的元素显示
  });
    $(".layer").click(function(){   //点击其他的地方时，清除遮罩层
     $(this).css("display","none");
     $(".main_d").hide();            //将元素隐藏
  });
    $(".inputb").click(function() {  //点击弹出，同时清除文本框
     alert("发送成功！");
     $(".t2").val("");
    })
});
