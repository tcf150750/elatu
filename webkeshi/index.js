$(function(argument) {
	
	updatetime();
	setInterval('updatetime()',1000);

})
function updatetime(){
		//现获取目标时间对象
	var target_td= new Date(2020,0,25);
	var now_td= new Date();
		//目标时间-当前（秒）
	var itime=(target_td.getTime()-now_td.getTime());//返回目标时间和现在时间相差的毫秒
	//秒转换成xxx天xxx小时xxxx分xxx秒

	var iday=parseInt(itime/(1000*24*60*60));//还剩多少天
	itime=itime%(1000*24*60*60);
	var ihour=parseInt(itime/(1000*60*60));
		itime=itime%(1000*60*60);
	var imin=parseInt(itime/(1000*60));
    itime=itime%(1000*60);
    var isec=parseInt(itime/1000);

		//---》HTML
    $('#iday').text(iday);
    $('#ihour').text(ihour);
    $('#imin').text(imin);
    $('#isec').text(isec);

	}