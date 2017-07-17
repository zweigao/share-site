
//下拉菜单的制作
$(function(){  
        $("li").has("ul").mouseenter(function(){  
            $(this).children("ul").stop(true).slideDown(5); 
        }).mouseleave(function () {  
            $(this).children("ul").stop(true).slideUp(5);
        })  
 })



//验证码倒计时
$(function(){
   $("#text2").click(function(){
       var $this = $(this),            //获取text2元素
       _this = this,
        i = 60;                       //设置倒计时的时间
       _this.disabled = 'disabled';   //disabled属性禁用input元素，点击操作没有反应
       clearInterval(repeat);         //清除计时器
       var repeat = setInterval(function() {
       i--;                           //倒计时
       if (i == 0) {
       _this.disabled = false;        //解除，可以点击input元素
        $this.val("发送验证码");       //设置text2的内容
        clearInterval(repeat);        //清除计时器
        }
        else {
        $this.val(i);
       } 
    },1000);                         //每秒钟i减少1，实现倒计时
    })
  });


//正则表达式的验证
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
    var password = document.getElementById('text5').value;
    if (password=="") {
       alert("请输入验证码！");
         return false;
    }
    if(!(/\d{6}$/.test(password))){ 
           alert("验证码有误，请重填！");  
           return false;
    }
    else
    {   
      return true;
    }
}
function checkPhone(){        //验证通过就跳转页面
  if (check()) {
     document.getElementById("a2").href="2.html";
  }
}



