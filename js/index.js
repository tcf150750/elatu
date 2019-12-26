var obj = ['./images/bck7.png', './images/back4.png','./images/back5.png'];
var imgIndex= 0;

function show (){
	$("#box").css('background-image',"url(" + obj[imgIndex] + ")");

}
function start(){
			setInterval(function(){
			show();//切换图片
			imgIndex++;//改变索引
			 // 超过最后一张图则显示第一张
			 console.dir(imgIndex);

            if (imgIndex >obj.length - 1) {
                    imgIndex = 0;
                }

			},2000)	;
		}
start();
// $(document).ready(function(){
//     $("#box img").fadeOut(0).eq(0).fadeIn(0);
//     var i = 0;
//     setInterval(function(){
//         if($("#box img").length > (i+1)){
//             $("#box img").eq(i).fadeOut(0).next("img").fadeIn(1000);
//             i++;
//         }
//         else{
//             $("#box img").eq(i).fadeOut(0).siblings("img").eq(0).fadeIn(1000);
//             i = 0;
//         }
//     },2000);
// });