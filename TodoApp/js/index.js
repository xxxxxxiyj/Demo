;(function(){
	'use strict';

	// 添加任务
	$('#add-task').on('click',function(){
		if($('#add-task-input').val()!==""){
			$('.todoList-content').append('<div class="todoList-item"><span class="completed"></span>'
				+'<span class="item-content">' + $('#add-task-input').val()
				+'</span><span class="delete"></span><span class="details"></span></div>');
			

			$('#add-task-input').val(''); //清空input
		}
	});

	//删除任务
	$('.todoList-content').on('click', '.delete', function(){
		$(this).parent().remove();
	});
	$('.todoList-completed').on('click', '.delete', function(){
		$(this).parent().remove();
	});

	//显示任务详情
	

	//确认任务完成
	$('.todoList-content').on('click', '.completed', function(){
		$(this).parent().remove();
		$('.todoList-completed').append($(this).parent());
		$(this).addClass('uncompleted');
		$(this).removeClass('completed');
	});

	localStorage.setItem('con',1);
	var con = localStorage.getItem('con');
	console.log(con);

})()

