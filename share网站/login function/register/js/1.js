
//实现验证码
var code;                    //在全局 定义验证码
function createCode() {
    code = new Array();
    var codeLength = 4;          //验证码的长度
    var checkCode = document.getElementById("checkCode");
    checkCode.value = "";
    var selectChar = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 32);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode();
    }
    checkCode.value = code;
}
function validate() {         //js正则表达式的验证
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
    var password = document.getElementById('text2').value;
    if (password=="") {
       alert("请输入密码！");
         return false;
    }
    if(!(/^\d{6}$/.test(password))){ 
           alert("密码格式有误，请重填！");  
           return false; 
    }
    var password_a = document.getElementById('text3').value;
    if (password_a=="") {
       alert("请确认密码！");
         return false;
    }
    if(password_a!=password){ 
           alert("两次密码不一致，请重新填！");  
           return false; 
    }  
    var inputCode = document.getElementById("input1").value.toUpperCase();
    if (inputCode.length <= 0) {
        alert("请输入验证码！");
        return false;
    } else if (inputCode != code) {
        alert("验证码输入错误！");
        createCode();
        return false;
    } else {
        alert("恭喜你！注册成功！");
        return true;
    }
   }
   if (check()) {
    $("#href").attr("href","../../index-a/index.html");
  }
}




//下拉菜单
$(function(){  
        $("li").has("ul").mouseenter(function(){  
            $(this).children("ul").stop(true).slideDown(5); 
        }).mouseleave(function () {  
            $(this).children("ul").stop(true).slideUp(5);
        })  
 })


$(function(){
  $(".list_e").click(function(){
    alert("你还没有登录，请你先登录！");
  })
  $(".list_b").click(function(){
    alert("你还没有登录,请你先登录！");
  })
})


