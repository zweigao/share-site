$(function(){
	$(".share").mouseenter(function(){               //这里的注释和article1的js文件中的注释相同
		$(".index").css("display","block")
	})
	$(".share").mouseleave(function(){
		$(".index").css("display","none")
	})
	$(".index").mouseenter(function(){
		$(this).css("display","block")
	})
	$(".index").mouseleave(function(){
		$(this).css("display","none")
	})
})



$(function(){
	var _click_count = 0;
    $(".story").bind("click", function(e) { 
    var $i = $("<b>").text("+" + "1"); 
    var x = e.pageX,
        y = e.pageY;
    $i.css({
        "z-index": 99999,
        "top": y - 15,
        "left": x,
        "position": "absolute",
        "color": "red"
    });
    $("body").append($i);
    $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        }
    );
});
})


$(function(){
	$(".shou").click(function(){
		alert("收藏成功！")
	})
})



$(function(){
    $(".story").click(function () {
       $(this).attr("src","images/j1.png");
       $(".click").html("已点赞");
       $(".k1 span").css({
        "margin-left":"15px",
       })
    })
})


$(function(){
    $(".inputa").click(function(){
        alert("发表评论成功！")
        $(".t1").val("");
    })
})

$(function(){
    $(".p6").click(function(){
    var bw=$(document).width();
        hw=$(document).height();
       $(".layer").css({
          width:bw,
          height:hw,
          display:"block"
    })
    $(".main_c").show();
  });
    $(".layer").click(function(){
     $(this).css("display","none");
     $(".main_c").hide();
  });
    $(".inputb").click(function() {
     alert("发送成功！");
     $(".t2").val("");
    })
});



