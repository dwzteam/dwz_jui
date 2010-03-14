/**
 * @desc 兼容不同的浏览器居中scrollCenter
 * @author ZhangHuihua@msn.com
 */
(function($){
	$.fn.extend({

		getWindowSize: function(){
			if ($.browser.opera) { return { width: window.innerWidth, height: window.innerHeight }; }
			return { width: $(window).width(), height: $(window).height() };
		},
		/**
		 * @param options
		 */		
		scrollCenter: function(options){
			// 扩展参数
			var op = $.extend({ z: 1000000, mode:"WH"}, options);
			
			// 追加到 document.body 并设置其样式
			var windowSize = this.getWindowSize();

			if (op.mode == "W") {
				this.appendTo(document.body).css({
					'left': (windowSize.width - this.width()) / 2 + $(window).scrollLeft() + 'px'
				});
			} else if (op.model == "H"){
				this.appendTo(document.body).css({
					'top': (windowSize.height - this.height()) / 2 + $(window).scrollTop() + 'px'
				});	
			} else {
				this.appendTo(document.body).css({
				//	'position': 'absolute',
				//	'z-index': op.z,
					'top': (windowSize.height - this.height()) / 2 + $(window).scrollTop() + 'px',
					'left': (windowSize.width - this.width()) / 2 + $(window).scrollLeft() + 'px'
				});
			}

			
			// 保存当前位置参数
			var bodyScrollTop = $(document).scrollTop();
			var bodyScrollLeft = $(document).scrollLeft();
			var movedivTop = this.offset().top;
			var movedivLeft = this.offset().left;
			
			var thisjQuery = this;
			
			// 滚动事件
			$(window).scroll(function(e){
				var windowSize = thisjQuery.getWindowSize();
				var tmpBodyScrollTop = $(document).scrollTop();
				var tmpBodyScrollLeft = $(document).scrollLeft();
				
				movedivTop += tmpBodyScrollTop - bodyScrollTop;
				movedivLeft += tmpBodyScrollLeft - bodyScrollLeft;
				bodyScrollTop = tmpBodyScrollTop;
				bodyScrollLeft = tmpBodyScrollLeft;

				// 以动画方式进行移动
				if (op.mode == "W") {
					thisjQuery.stop().animate({
						'left': movedivLeft + 'px'
					});
				} else if (op.mode == "H") {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px'
					});
				} else {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px',
						'left': movedivLeft + 'px'
					});
				}
				
			});
			
			// 窗口大小重设事件
			$(window).resize(function(){
				var windowSize = thisjQuery.getWindowSize();
				movedivTop = (windowSize.height - thisjQuery.height()) / 2 + $(document).scrollTop();
				movedivLeft = (windowSize.width - thisjQuery.width()) / 2 + $(document).scrollLeft();
				
				if (op.mode == "W") {
					thisjQuery.stop().animate({
						'left': movedivLeft + 'px'
					});
				} else if (op.mode == "H") {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px'
					});
				} else {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px',
						'left': movedivLeft + 'px'
					});
				}
				
			});
			
			return this;
		}
	});
})(jQuery);