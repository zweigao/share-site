
//下拉菜单
$(function(){  
        $("li").has("ul").mouseenter(function(){  
            $(this).children("ul").stop(true).slideDown(5); 
        }).mouseleave(function () {  
            $(this).children("ul").stop(true).slideUp(5);
        })  
 })


$(function(){
	$(".a3").click(function(){
		alert("保存草稿成功！")
	})
	$(".s6").click(function(){
		alert("保存草稿成功！")
	})
})


//图片上传操作
$(function(){ 
$("#exampleInputFile").change(function() {
var url;
if (navigator.userAgent.indexOf("Chrome") > 0) {
url = window.URL.createObjectURL(document.getElementById("exampleInputFile").files.item(0));
} else if (navigator.userAgent.indexOf("MSIE") >= 1 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0)) {
url = document.getElementById("exampleInputFile").value;
} else if (navigator.userAgent.indexOf("Firefox") > 0) {
url = window.URL.createObjectURL(document.getElementById("exampleInputFile").files.item(0));
}
$("#pre_img").attr("src", url);
});
}) 


//发表游记
$(function(){
	$(".publish").click(function(){
         var src=$("#pre_img").attr("src");       //获取上传图片的路径
         $(".photo_a").attr("src",src);           //设置图片
         var h3=$(".textbox").val();              //获取标题
         $(".h3").html(h3);                       //设置标题
         var ps=$(".textarea").val();             //获取内容
         var curLength=$(".textarea").val().length;   //设置内容不超过100个字
          if(curLength>=100){  
             var ps=$(".textarea").val().substr(0,100);
          }
         $(".ps").html(ps);
         var Height=$(".travel").height(); 
         $(".main_1").css("display","block");
         $(".travel").height(Height+250);
         alert("发表游记成功！");
     })
})

