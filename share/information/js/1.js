
//下拉菜单的制作
$(function(){  
        $("li").has("ul").mouseenter(function(){  
            $(this).children("ul").stop(true).slideDown(5); 
        }).mouseleave(function () {  
            $(this).children("ul").stop(true).slideUp(5);
        })  
 })






//上传图片的操作
$(function(){   
$("#exampleInputFile").change(function() {  //点击时触发函数
var url;
if (navigator.userAgent.indexOf("Chrome") > 0) {     //如果是谷歌浏览器（判断浏览器的类型）
url = window.URL.createObjectURL(document.getElementById("exampleInputFile").files.item(0));  //js图片前端预览操作，获取图片的路径
} else if (navigator.userAgent.indexOf("MSIE") >= 1 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0)) {  //如果是IE浏览器而且版本大于10
url = document.getElementById("exampleInputFile").value;    
} else if (navigator.userAgent.indexOf("Firefox") > 0) {            //如果是火狐浏览器
url = window.URL.createObjectURL(document.getElementById("exampleInputFile").files.item(0));
}
$("#pre_img").attr("src", url);      //为图片设置图片路径
});
})  
 

//js正则表达式的验证
 function check(){
 	 var name=document.getElementById('name').value;
 	 if (name=="") {
 		alert("请输入昵称！");
 		return false;
 	}
    var re = /[^\u4e00-\u9fa5]/; 
    if (re.test(name)){ 
      alert("昵称填写有误，请重新填写！"); 
     return false; 
    }
    var password = document.getElementById("password").value;
    if (password=="") {
       alert("请输入密码！");
         return false;
    }
    if(!(/^\d{6}$/.test(password))){ 
           alert("密码格式不正确，请重新填写！");  
           return false; 
    }
    var password_a= document.getElementById("password_a").value;
    if (password_a=="") {
       alert("请填写确认密码！");
         return false;
    }
    if (password_a!=password) {
    	 alert("两次密码不一致，请重新填写！");
    	 return false;
    }
    var name_a=document.getElementById('name_a').value;
 	if (name_a=="") {
 		alert("请输入真实姓名！");
 		return false;
 	}
 	var re = /[^\u4e00-\u9fa5]/; 
    if (re.test(name_a)){ 
      alert("真实姓名填写有误，请重新填写！"); 
     return false; 
    }
    var date=document.getElementById('datemate').value;
 	if (date=="") {
 		alert("请输入出生年月！");
 		return false;
 	}
 	var re =/^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1]))/; 
    if (!re.test(date)){ 
      alert("日期格式有误，请重新填写！"); 
     return false; 
    }
    var phone = document.getElementById('phone').value;
    if (phone=="") {
      alert("请输入手机号码！");
       return false;
    }
     if(!(/^1[34578]\d{9}$/.test(phone))){ 
           alert("手机号码有误，请重填！");  
           return false; 
    }
    var email = document.getElementById('email').value;
    if (email=="") {
      alert("请输入邮箱！");
       return false;
    }
     if(!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email))){ 
           alert("邮箱格式有误，请重填！");  
           return false; 
    }
    var identy= document.getElementById('identy').value;
    if (identy=="") {
      alert("请输入有效的身份证号码！");
       return false;
    }
     if(!(/^440981\d{12}$/.test(identy))){ 
           alert("身份证号码有误，请重填！");  
           return false; 
    }
    else{
      $("#right_a").css("display","none");               //向类名为right的元素添加内容
      var right=$("#right_a");
      var result="";
      result+="<br><br><br><p>"+"昵称："+$(".name1").val()+"</p><br>";
      result+="<p>"+"密码：******"+"</p><br>";
      result+="<p>"+"真实姓名："+$(".name4").val()+"</p><br>";
      result+="<p>"+"性别："+$("input[type='radio']:checked").val()+"</p><br>";
      result+="<p>"+"出生年月日："+$(".name5").val()+"</p><br>";
      result+="<p>"+"联系电话："+$(".name6").val()+"</p><br>";
      result+="<p>"+"邮箱："+$(".name7").val()+"</p><br>";
      result+="<p>"+"身份证号码："+$(".name8").val()+"</p><br>";
      result+="<p>"+"家庭地址："+$(".name9").val()+"</p><br>";
      result+="<p>"+"兴趣爱好："+$(":checkbox:checked").val()+"</p><br>";
      result+="<p>"+"民族："+$('.ni1 option:selected').val()+"</p><br>";
      $("#right").html(result);
      var obj = $("<input type='button' id='txt' value='修改' />")    //向类名为right的元素后面添加一个一个修改的按钮
      $("#right").append(obj);
      $("#txt").addClass("xiu");         //为按钮添加一个属性
      $("#txt").click(function(){        //点击修改按钮时回复原状
        $("#right p").remove() ;
        $("#right input").remove();      //将类名为right的元素原本的内容移除
        $("#right br").remove();
        $("#right").html(right);         //向类名为right的元素中添加类名为right_a的内容
        $("#right_a").css("display","block");   //将类名为right_a的元素显示
      })
    }
    
}


//显示密码操作
$(function(){
  function aa() {
    var btn = document.getElementById("btn");       //动态的改变input的type属性，text为显示，password为隐藏
    var pass = document.getElementById("password")
    btn.onmousedown = function() {                  //按下鼠标时执行函数
        pass.type = "test"
    };
    btn.onmouseup = btn.onmouseout = function() {   //松开鼠标时执行函数
        pass.type = "password"
    }
}
aa();
})



$(function(){
  function aa() {
    var btn = document.getElementById("btn1");
    var pass = document.getElementById("password_a")
    btn.onmousedown = function() {
        pass.type = "test"
    };
    btn.onmouseup = btn.onmouseout = function() {
        pass.type = "password"
    }
}
aa();
})