	// 移入图片时：
	small.onmouseover = function(){
		big.style.display = 'inline-block';
		this.onmousemove = function(e){
			
			//要获取元素距网页的距离和鼠标的位置
			var x = e.clientX - this.offsetLeft;
			var y = e.clientY - this.offsetTop;
			console.log(x,y);
			//设置大图的显示位置
			big.scrollTop = y*5-100;
			big.scrollLeft = x*5-100;
			//让大图跟随鼠标移动
			big.style.left = e.clientX +'px';
			big.style.top = e.clientY +'px';


		}

	}

	//移出小图时
	small.onmouseout = function(){
		big.style.display = 'none';
	}