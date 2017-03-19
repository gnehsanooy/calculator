var num=0;//第一个数
var calcul=0;//switch中选择加减乘除
var num2="0";//第二个数
var operator=0;//为0时输入第一个数，输完为1，然后为0，输入第二个数
var quit=0;//防止连续按多次加减乘除时出现错误
var time= new Date();//获取当前时间
var minute=null;
$("#home").click(function(){//欢迎界面
	$("#welcome").css({
		display: "none"
	});
	$("#bordershow").css({
		border: "none",
		background: "none"
	});
	$("#screen").css({
		display: "block"
	});
});
function maxlen(){//限制长度
	var str = String($("#calculator_result").val());
	if(str.length>11){
		str=str.slice(0,11);
		$("#calculator_result").val(str);
	}
}
if(String(time.getMinutes()).length==1){//时间1位时补0
	minute="0"+time.getMinutes();
}else{
	minute=time.getMinutes();
}
$("#top #time").html(time.getHours()+":"+minute);//获取时间
function command(num){//点击数字时输入
	var str = String($("#calculator_result").val());
    str=(str!=0)?(operator==0?str:""):"";
    str=str+String(num);
    $("#calculator_result").val(str);
    operator=0;
    quit=0;
}
function calculator(){//运算
	num2=Number($("#calculator_result").val());
	if(num!=0 && quit!=1){//此时num等于0，不执行switch
		switch(calcul){
           case 1:result=num+num2;break;
           case 2:result=num-num2;break;
           case 3:result=num*num2;break;
           case 4:
                 if(num2==0){
                 	alert("错误");
                 }else{
                 	result=num/num2;
                 }
                 break;
           case 5:result=num%num2;break;
		}
		quit=1;//防止连续按多次+-*/
	}else{
		result=num2;
	}
	num2=String(result);
    $("#calculator_result").val(num2);
    num=result;//把输入的第一个数存到num中
}

function plus(){//+
	calculator();
	operator=1;
	calcul=1;
}
function minus(){//-
	calculator();
	operator=1;
	calcul=2;
}
function times(){//*
	calculator();
	operator=1;
	calcul=3;
}
function divide(){// /
	calculator();
	operator=1;
	calcul=4;
}
function persent(){//%
	calculator();
	operator=1;
	calcul=5;
}
function equal(){//
	calculator();
	operate=1;
    num=0;
    result=0;
    num2="0";
}
function cleanscreen(){//清零
	operator=0;
	quit=0;
	num2="0";
	num=0;
	$("#calculator_result").val("0");
}
function del(){//删除
	var str = String($("#calculator_result").val());
	if(str=="0"){
		str="";
	}
	str=str.substr(0,str.length-1);
	if(str==""){
		str="0";
	}
	$("#calculator_result").val(str);
}
function dot(){//小数点
	var str = String($("#calculator_result").val());
	for(var i=0;i<str.length;i++){
		if(str[i]=="."){
			return;
		}
	}
	str=str+".";
	$("#calculator_result").val(str);
}
function oppose(){//取反
	var str = Number($("#calculator_result").val());
	str=0-str;
	$("#calculator_result").val(str);
}