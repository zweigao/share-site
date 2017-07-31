
//下拉菜单
$(function(){  
        $("li").has("ul").mouseenter(function(){  
            $(this).children("ul").stop(true).slideDown(5); 
        }).mouseleave(function () {  
            $(this).children("ul").stop(true).slideUp(5);
        })  
 })

//正则表达式的验证
function checkPhone(){ 
    var password = document.getElementById('text1').value;
    if (password=="") {
       alert("请输入密码！");
         return false;
    }
    if(!(/^\d{6}$/.test(password))){ 
           alert("密码格式有误，请重新输入！");  
           return false;
    }
    var password_a= document.getElementById('text5').value;
    if (password_a=="") {
       alert("请确认密码！");
         return false;
    }
    if(password_a!=password){ 
           alert("两次密码不一致，请重新输入！");  
           return false;
    }
    else{
    	alert("重置密码成功！");
    }
 }


//显示密码操作
 $(function(){
  function aa() {
    var btn = document.getElementById("btn");
    var pass = document.getElementById("text1")
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
  function aa() {
    var btn = document.getElementById("btn1");
    var pass = document.getElementById("text5")
    btn.onmousedown = function() {
        pass.type = "test"
    };
    btn.onmouseup = btn.onmouseout = function() {
        pass.type = "password"
    }
}
aa();
})