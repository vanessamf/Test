//console.log('lala')
;
$(function(){
	'use strict';
	var sidebar=$('#sidebar'),//选择侧栏
		mask=$('.mask'),
		sidebar_trigger=$('#sidebar_trigger'),
		backButton=$('.back-to-top');  
		
//	sidebar_trigger.on('click',function(){
//		//console.log('clicked')
//		mask.fadeIn();
//		//sidebar.animate({'right':0});
//		sidebar.css('right',0);
//	})
	
//	function showSideBar(){
//		//console.log('clicked')
//		mask.fadeIn();
//		//sidebar.animate({'right':0});
//		sidebar.css('right',0);
//	};
//	function hideSideBar(){
//		 
//		mask.fadeOut();
//		 //debugger;
//		sidebar.css('right',-sidebar.width());
//	}

function showSideBar(){//显示侧栏
		mask.fadeIn();//显示mask
		sidebar.css('transform','translate(0,0)');
	};
	function hideSideBar(){		 
		mask.fadeOut();
		//debugger;
		sidebar.css('transform','translate('+sidebar.width()+'px,0)');
	}
	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSideBar);
	
	function backToTop(){
		$('html,body').animate({
			scrollTop:0   
		},800)		  
	}
	backButton.on('click',backToTop);
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height())
		  backButton.fadeIn();
		  else
		  backButton.fadeOut();
	})
	$(window).trigger('scroll');//只要一刷新让程序自己触发事件
})


