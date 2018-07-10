// 优化：若需改动，在不需要改动数据的情况下也能实现功能
var container = document.getElementById("container"); // 获取容器
var carouselWrap = document.getElementById("carousel-wrap"); // 获取图片容器
var markContainer = document.getElementById("pages-wrap");
var mark = document.querySelectorAll("#pages-wrap span"); // 获取圆点标记
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var imgWidth = parseInt(carouselWrap.querySelectorAll("img")[0].width);
var index = 1;
var len = 4;
var interval = 3000;
var isSlide = false; // 是否处于轮播状态
var timer;

mark[index - 1].className = "active";

//图片切换动画
function play(offset) {
	if(offset == 0) return;
	isSlide = true;
	let newLeft = parseInt(carouselWrap.style.left) + offset;
	let time = 300; // 位移总时间
	let interval = 10; // 位移间隔时间
	let speed = offset / (time / interval);  //位移间隔量
	if(index < 1) {
		index = 4;
	}
	if(index > 4) {
		index = 1;
	}
	function go() {
		if((speed < 0 && parseInt(carouselWrap.style.left) > newLeft)
			|| (speed > 0 && parseInt(carouselWrap.style.left) < newLeft)) {
			carouselWrap.style.left = parseInt(carouselWrap.style.left) + speed + "px";
		setTimeout(go, interval);
		}else {
			carouselWrap.style.left = newLeft + "px";
			if(newLeft > -imgWidth) {
				carouselWrap.style.left = -imgWidth * len + "px";
			}
			if(newLeft < (-imgWidth * len)) {
				carouselWrap.style.left = "-980px";
			}
			isSlide = false;
		}
	}
	go();
}

// 更改按钮标记
function changeMark() {
	for(let i = 0; i < mark.length; i++) {
		mark[i].className = "";
	}
	mark[index - 1].className = "active";
}

for(let i = 0; i < mark.length; i++) {
	mark[i].index = i + 1;
}
// markContainer.onclick = function(e) {
// 	let target = e.target;
// 	target.onclick = function() {
// 		console.log(target);
// 		// target.className = "active";
// 		if(isSlide || this.className == "active") return false;
// 		let spanIndex = this.index;
// 		let offset = imgWidth * (spanIndex - );
// 		play(offset);
// 		index = spanIndex;
// 		changeMark();
// 	}
// }

// 右按键点击事件
next.onclick = function() {
	index++;
	if(!isSlide) {
		play(-imgWidth);
	}
	changeMark();

}
// 左按键点击事件
pre.onclick = function() {
	index--;
	if(!isSlide) {
		play(imgWidth);
	}
	changeMark();
}

// 自动轮播
function autoPlay() {
	timer = setInterval(function() {
		next.onclick();
	}, interval);
}

autoPlay();
container.onmouseover = function() {
	clearInterval(timer);
}
container.onmouseout = function() {
	autoPlay();
}