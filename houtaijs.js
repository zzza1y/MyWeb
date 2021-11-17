function regist()
{
	window.location.href="reg.html";
}
function regist1()
{
	var username = document.getElementById("username1");
	var password = document.getElementById("password1");
	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem(username.value, password.value);
		alert('注册成功');
		document.getElementById("registForm").action="index.html";
	} else {
    	alert('注册失败');
	}
}
function login()
{	
    var password0=document.getElementById("password");
	var username0=document.getElementById("username");
	var pas=localStorage.getItem(username0.value);
    if (pas.value!="undefined")
	{
		if(pas==password0.value)
		{
			alert('登录成功');
			document.getElementById("forms").action="houtai.html";
		}
		else
		{
			alert('密码错误');
		}
    }
	else
	{
		alert('用户不存在');
	}
}
function shouye()
{
	window.location.href="houtai.html";
}
function jianjie()
{
	window.location.href="jianjie.html";
}
function img()
{
	window.location.href="img.html";
}
function liuyan()
{
	window.location.href="liuyan.html";
}
function left()
{
	var type="left";
	jiantou(type);
}
function right()
{
	var type="right";
	jiantou(type);
}
function jiantou(type){	
	var $demo = $('.demo'),
	index = parseInt( $demo.attr('index_cur')||2 ),
	$item = $('.demo .item'),
	len = $item.length;
	if( type=='left' ){
		index = (index+1)%len;
	}else{
		index = (index-1+len)%len;
	}
	$demo.attr('index_cur', index);
			
	$item.removeClass('item_0 item_1 item_3 item_4 item_cur item_5 item_6 item_7 item_8 item_9');
				   
	$item.eq( (index-2+len)%len ).addClass('item_0');
	$item.eq( (index-1+len)%len ).addClass('item_1');
	$item.eq(index).addClass('item_cur');
	$item.eq( (index+1)%len ).addClass('item_3');
	$item.eq( (index+2)%len ).addClass('item_4');
	$item.eq( (index+3)%len ).addClass('item_5');
	$item.eq( (index+4)%len ).addClass('item_6');
	$item.eq( (index+5)%len ).addClass('item_7');
	$item.eq( (index+6)%len ).addClass('item_8');
	$item.eq( (index+7)%len ).addClass('item_9');
}
function updatewb()
{
	var userwb=$("#wb").val();
	$("#wb1").html(userwb);
	document.getElementById("wb").value="";
	return false;
}