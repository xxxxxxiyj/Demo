
$(function(){
	var today,sk;

	//获取api中数据
	$.ajax({
		type:'get', 
		url:'http://v.juhe.cn/weather/index?cityname=%E7%84%A6%E4%BD%9C&dtype=json&format=2&key=f0a91216e8571b0926d112ff648d65dc',
		dataType:'jsonp',
		jsonp:'callback',
		success:function(json){
			today = json.result.today;
			sk = json.result.sk;
			$('#weather_temp').text(today.weather + ' ' + sk.temp + '℃');
			$('.humidity').text('湿度：' + sk.humidity);
			$('.uv').text('紫外线：' + today.uv_index);
			$('.travel').text('旅行指数：' + today.travel_index);
			$('.dressing_advice').text(today.dressing_advice);
			$('.date').html(today.date_y + '  ' + today.week + '</br>' + today.temperature);
			// console.log(json);
		},
		error:function(){
			console.log('fail');
		}
	});
})