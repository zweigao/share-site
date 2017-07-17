
//下拉菜单的制作
$(function(){  
        $("li").has("ul").mouseenter(function(){  
            $(this).children("ul").stop(true).slideDown(5); 
        }).mouseleave(function () {  
            $(this).children("ul").stop(true).slideUp(5);
        })  
 })


//弹出层原理
$(function(){
    $(".qq").click(function(){
       var bw=$(window).width();
       $(".layer").css({
          width:bw,
          display:"block"
    });
    $(".pop").show();
  });
  $(".wechat").click(function(){
       var bw=$(window).width();
       $(".layer").css({
          width:bw,
          display:"block"
    });
    $(".pop_a").show();
  });
  $(".weibo").click(function(){
       var bw=$(window).width();
       $(".layer").css({
          width:bw,
          display:"block"
    });
    $(".pop_b").show();
  });
  $(".layer").click(function(){
     $(this).css("display","none");
     $(".pop").hide();
     $(".pop_a").hide();
     $(".pop_b").hide();
  })
})



//js的正则表达式
function checkPhone(){
 function check(){ 
    var phone = document.getElementById('text1').value;
    if (phone=="") {
      alert("请输入手机号码！");
       return false;
    }
     if(!(/^1[34578]\d{9}$/.test(phone))){ 
           alert("手机号码有误，请重填！");  
           return false; 
    } 
    var password = document.getElementById('text4').value;
    if (password=="") {
       alert("请输入密码！");
         return false;
    }
    if(!(/^\d{6}$/.test(password))){ 
           alert("密码有误，请重填！");  
           return false; 
    }
    else
    {
      alert("恭喜你！登陆成功！");
      return true;
    }
  }
  if (check()) {
    $("#href").attr("href","../../index-a/index.html");
  }
}

//显示密码操作
$(function(){
  function aa() {
    var btn = document.getElementById("btn");
    var pass = document.getElementById("text4")
    btn.onmousedown = function() {
        pass.type = "test"
    };
    btn.onmouseup = btn.onmouseout = function() {
        pass.type = "password"
    }
}
aa();
})



$(function(){
  $(".list_e").click(function(){
    alert("你还没有登录，请你先登录！");
  })
  $(".list_b").click(function(){
    alert("你还没有登录,请你先登录！");
  })
  $(".list_d").click(function(){
    alert("还没有注册?那赶快去注册吧！");
  })
})