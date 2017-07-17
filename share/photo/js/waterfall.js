window.onload=function(){
    waterfall('main','pin');                //调用waterfall函数；
    //创建json数据，date对象，属性和属性值；
    var dataInt={'data':[{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'17.jpg'},{'src':'18.jpg'}]};   
    window.onscroll=function(){            //当页面滚动时执行函数
        if(checkscrollside()){             //判断如果达到滚动的条件，就执行接下来的内容：动态的创建一个类名为box的div;
            var oParent = document.getElementById('main');// 获取父级对象main;
            for(var i=0;i<dataInt.data.length;i++){          //依次将每一张图片添加上去
                var oPin=document.createElement('div');      //添加 元素节点
                oPin.className='pin';                        //添加 类名 name属性
                oParent.appendChild(oPin);                   //添加 子节点
                var oBox=document.createElement('div');      //添加div元素
                oBox.className='box';                        //给div加上类名box
                oPin.appendChild(oBox);                      //将box加入元素pin之中；
                var oImg=document.createElement('img');      //添加img标签；
                oImg.src='./images/'+dataInt.data[i].src;    //给img标签加上属性值src;
                oBox.appendChild(oImg);                      //将img标签加入元素box之中；
                var oP=document.createElement('p');          //添加p标签；
                oP.className="p1";                           //加上类p1;
                oP.innerHTML="人心都是孤独的，希望自己可以走过这段孤独，一定可以的加油!";   //设置p标签的内容；
                oBox.appendChild(oP);                        //将p标签加入元素box之中;
            }
            waterfall('main','pin');                         //执行waterfall函数；
        };
    }
}

function waterfall(parent,pin){
    var oParent=document.getElementById(parent);       // 获取父级对象main
    var aPin=getClassObj(oParent,pin);                 // 获取存储pin块框的数组aPin
    var iPinW=aPin[0].offsetWidth;                     // 一个块框pin的宽
    var num=Math.floor(document.documentElement.clientWidth/iPinW);       //获取页面的高度，每行中能容纳的pin个数【页面宽度除以一个块框宽度】
    oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';        //设置父级居中样式：定宽+自动水平外边距
    var pinHArr=[];                                                       //用于存储 每列中的所有块框相加的高度。
    for(var i=0;i<aPin.length;i++){                                       //遍历数组aPin的每个块框元素
        var pinH=aPin[i].offsetHeight;                                    //
        if(i<num){
            pinHArr[i]=pinH; //第一行中的num个块框pin 先添加进数组pinHArr
        }else{
            var minH=Math.min.apply(null,pinHArr);//数组pinHArr中的最小值minH
            var minHIndex=getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';//设置绝对位移
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[minHIndex]+=aPin[i].offsetHeight;//更新添加了块框后的列高
        }
    }
}

/****
    *通过父级和子元素的class类 获取该同类子元素的数组
    */
function getClassObj(parent,className){
    var obj=parent.getElementsByTagName('*');//获取 父级的所有子集
    var pinS=[];//创建一个数组 用于收集子元素
    for (var i=0;i<obj.length;i++) {//遍历子元素、判断类别、把我们要找的元素放入数组中
        if (obj[i].className==className){
            pinS.push(obj[i]);
        }
    }; 
    return pinS;
}
/****
    *获取 pin高度 最小值的索引index
    */
function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}


function checkscrollside(){
    var oParent=document.getElementById('main');
    var aPin=getClassObj(oParent,'pin');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}