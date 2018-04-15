/*
 * 在提供的 HTML 和 CSS 的基础上，补充todoList的功能逻辑，具体要求如下。
 * 1、实现点击添加任务按钮时，获取输入框内容，如果输入框不为空则添加一个新的任务到任务列表中的功能
 * 2、实现点击任务 item 元素时，被点击任务元素如果带有类名 "checked"，则去除类名 "checked", 否则增加类名 "checked" 的功能
 * 3、实现点击任务 item 右边的删除按钮是，删除相应的任务 item 的功能
 */

$(function(){
	$('#js-add-task').on('click',function(){
		if($('#add-task-input').val().trim() !== ""){
			$('.todoList-content').append('<li class="task"><p class="text">'
				+ $('#add-task-input').val() 
				+ '</p><span class="close">x</span></li>');
		}
	});


	// $(document).on("click","指定的元素",function(){});
	// 将指定的事件绑定在document上，而新产生的元素如果符合指定的元素，那就触发此事件
	$('.todoList-content').on('click', '.task', function(){
		$(this).toggleClass('checked');
	});

	$('.todoList-content').on('click', '.close', function(){
		$(this).parent().remove();
	})
});