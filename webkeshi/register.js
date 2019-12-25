$(function () {
	$('#username').blur(function(){
		var user_str=$('this').val();
		isUsername(user_str);
	})
	$('#youxiang').blur(function(){
		var youxiang=$(this).val();
		isyouxiang(youxiang);
	})
		$('#password').blur(function(){
		var password_str=$(this).val();
		ispassword(password_str);
	})
		$('#password2').blur(function(){
		var password2_str=$(this).val();
		ispassword2(password2_str);
	})
		$('#idnum').blur(function(){
		var idnum_str=$(this).val();
		isidnum(idnum_str);
	})
		$('#phoneonum').blur(function(){
		var phoneonum_str=$(this).val();
		isphoneonum(phoneonum_str);
	})



	$('#submit').click(function(){
		return checkALL();

	})

	// body...
})
//函数定义
//用户名判定
function isUsername(str){
	if (str=='') {
		$('#username').text('用户名不能为空！');
		$('#username').css('color','red');
		return false;

	}
	else{
		var re=/^\s*$/;
		if (re.test(str)) {
			$('#Username').text('*');
		$('#Username').css('color','#000');
		return true;
		}else{
		$('#Username').text('只能英文字母开头，4—16个英文、数字或下划线字符！！');
		$('#Username').css('color','red');
		return false;
			}
	}

}
function isyouxiang(str){
	if (str=='') {
		$('#Youxiang').text('邮箱不能为空！');
		$('#Youxiang').css('color','red');
		return false;

	}
	else{
		var re=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if (re.test(str)) {
			$('#Youxiang').text('*');
		$('#Youxiang').css('color','#000');
		return true;
		 }else{
		$('#Youxiang').text('邮箱格式不真确！请重新输入！');
		$('#Youxiang').css('color','red');
		return false;
			}
	}

}
//密码判定
function ispassword(str){
	if (str=='') {
		$('#Password').text('密码不能为空！');
		$('#Password').css('color','red');
		return false;

	}
	else{
		var re=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
		if (re.test(str)) {
			$('#Password').text('*');
		$('#Password').css('color','#000');
		return true;
		}else{
		$('#Password').text('英文字母、数字、下划线字符，且长度在6-24个长度！！');
		$('#Password').css('color','red');
		return false;
			}
	}

}
function ispassword2(str){
	if (str!='$(.password).val()') {
		$('#Password2').text('两次输入密码不一致!');
		$('#Password2').css('color','red');
		return false;

	}
	else{
		return true;
		}
	}
function isidnum(str){
	// if (str=='') {
	// 	$('username').text('用户名不能为空！');
	// 	$('username').css('color','red');
	// 	return false;

	// }
	// else{
		var re=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if (re.test(str)) {
			$('#Idnum').text('*');
		$('#Idnum').css('color','#000');
		return true;
		}else{
		$('#Idnum').text('请输入十八位身份证号码！');
		$('#Idnum').css('color','red');
		return false;
			}
	}
	//手机号码验证
	function isphoneonum(str){
	// if (str=='') {
	// 	$('phoneonum').text('！');
	// 	$('phoneonum').css('color','red');
	// 	return false;

	// // }
	// else{
		var re=/^(?:(?:\(0\d{2,3}\)[- ]?\d{7,8})|(?:(?:0\d{2,3}[- ]?)?\d{7,8})|(?:1\d{10}))$/;
		if (re.test(str)) {
			$('#Phoneonum').text('*');
		$('#Phoneonum').css('color','#000');
		return true;
		}
		else{
		$('#Phoneonum').text('英文字母、数字、下划线字符，且长度在6-24个长度！！');
		$('#Phoneonum').css('color','red');
		return false;
			}
	}




function checkALL(){
	var user_str=$('#username').val();
	var password_str=$('#password').val();
	var password2_str=$('#password2').val();
	var idnum_str=$('#idnum').val();
	var youxiang=$('#youxiang').val();
	var phoneonum_str=$('#phoneonum').val();
	var error_str='';

	if (!isUsername(user_str)) {
		
		error_str=error_str+'用户名输入不正确！\n';
	}
		if (!isyouxiang(youxiang)) {
	
		error_str=error_str+'邮箱输入不正确！\n';
	}
	if (!ispassword(password_str)) {
	
		error_str=error_str+'密码输入不正确！\n';
	}
		if (!ispassword2(password2_str)) {
	
		error_str=error_str+'再次输入密码不正确！\n';
	}
		if (!isidnum(idnum_str)) {
	
		error_str=error_str+'身份证输入不正确！\n';
	}
		if (!isphoneonum(phoneonum_str)) {
	
		error_str=error_str+'手机号输入不正确！\n';
	}
	if (error_str!='') {
		alert(error_str);
		return false;
	}else{
		return true;
	}
	
	}