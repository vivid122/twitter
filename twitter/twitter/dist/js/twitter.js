


//顶栏搜索框的变色
var search=document.getElementById('search');
var searchfocus=document.getElementById('s-search');
  search.onfocus=function(){
  	searchfocus.style.backgroundColor="white";
  }
  search.onblur=function(){
  	searchfocus.style.backgroundColor="rgb(245,248,250)";
  }

var txt = document.getElementById('textarea');
var m1 = document.getElementById('m1');
 txt.onfocus=function(){
 	 m1.style.display="block";
 }
  txt.onblur=function(){
	 m1.style.display="none";
}

//发推弹出效果
var twitte = document.getElementById('twi-sub');
var outer = document.getElementById('outer');
var close_0 = document.getElementById('close-0');
var body =document.getElementsByTagName('body');
  twitte.onclick=function  () {
  	outer.style.display="block";
  	body[0].style.overflow="hidden";
  }
  close_0.onclick=function  () {
  	outer.style.display="none";
  	body[0].style.overflow="visible";
  }


//关闭推荐关注
var close0 = document.getElementById('close-b0');
var su_view0=document.getElementById("su-view0");
close0.onclick=function () {
   su_view0.className="disappear";
}
var close1 = document.getElementById('close-b1');
var su_view1=document.getElementById("su-view1");
close1.onclick=function () {
   su_view1.className="disappear";
}
var close2 = document.getElementById('close-b2');
var su_view2=document.getElementById("su-view2");
close2.onclick=function () {
   su_view2.className="disappear";
}
//关注/正在关注
    
 var button0 = document.getElementById('view0');
  button0.onclick = function (){
    button0.innerHTML="正在关注";
    button0.id="outbutton";
    setTimeout(function(){su_view0.style.display="none";},10000);
  }
  var button1 = document.getElementById('view1');
  button1.onclick = function (){
    button1.innerHTML="正在关注";
    button1.id="outbutton";
    setTimeout(function(){su_view1.style.display="none";},10000);
  }
  var button2 = document.getElementById('view2');
  button2.onclick = function (){
    button2.innerHTML="正在关注";
    button2.id="outbutton";
     setTimeout(function(){su_view2.style.display="none";},10000);
  }

 // var button0x = document.getElementById('outbutton');
 //    button0x.onmouseover = function(){
 //      button0x.innerHTML="取消关注";
 //      button0x.id="outbuttonx";
 //    }


   //字数统计
   var counter = document.getElementById('counter');
   var counterx = document.getElementById('counterx');
   var input = document.getElementById('textarea');
   var inputx = document.getElementById('textareax');
   var out_twi = document.getElementById('out-twi');
   var out_twix = document.getElementById('out-twix')
   function count(textareaName,spanName){
    counter.innerHTML=140-input.value.length;
    counterx.innerHTML=140-inputx.value.length;

    var num = 140-input.value.length;
    var numx = 140-inputx.value.length;

    if (num>20) {
      counter.style.color="grey";
    }else if(num>10){
      counter.style.color="#8B3A3A";
    }else{
      counter.style.color="red";
  
     };

     
     

     if (numx>20) {
      counterx.style.color="grey";
    }else if(numx>10){
      counterx.style.color="#8B3A3A";
    }
     else{
      counterx.style.color="red";
     };
   }
   txt.onkeydown=function (){count("textarea","counter")};
   txt.onkeyup=function (){count("textarea","counter")};
   
   var txtx = document.getElementById('textareax');
   txtx.onkeydown=function (){count("textareax","counterx")};
   txtx.onkeyup=function (){count("textareax","counterx")};

  

   