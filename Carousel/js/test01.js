var container = document.getElementById("container"); // 获取容器
var width = container.offsetWidth;  // 每次移动的距离
var carouselWrap = document.getElementById("carousel-wrap"); // 获取图片容器
var mark = document.querySelectorAll("#pages-wrap span"); // 获取圆点标记
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var index = 0;
var timer = null;

mark[index].setAttribute("class", "active");

// 轮换图片
function play() {
	if(index > 3) {
		index = 0;
	changeMask();
	}
	if(index < 0) {
		index = 3;
	}
	carouselWrap.style.transform = "translateX(" + (-width * index) + "px";
	changeMask();
}

// 改变圆圈标记
function changeMask() {
	for(let i = 0; i < mark.length; i++) {
		mark[i].className = "";
	}
	mark[index].className = "active";
}

// 自动播放
function autoPlay() {
	timer = setInterval(function() {
		index++;
		play();
	}, 2000);
}

// 停止播放
function stopPlay() {
	clearInterval(timer);
}

// 左按键点击事件
pre.addEventListener("click", function() {
	index--;
	play();
}, false);
// 右按键点击事件
next.addEventListener("click", function() {
	index++;
	play();
}, false);

// 自动播放
autoPlay();

// 鼠标经过停止轮换，鼠标移开继续轮换图片
container.onmouseover = function() {
	stopPlay();
}
container.onmouseout = function() {
	autoPlay();
}
// container.addEventListener("mouseout", autoPlay(), false);
// container.addEventListener("mouseover", stopPlay(), false);

