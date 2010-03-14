/**
 * @author Roger Wu 
 * @version 1.0
 */
(function($){
	$.fn.cssv = function(pre){
		var cssPre = $(this).css(pre);
		return cssPre.substring(0, cssPre.indexOf("px")) * 1;
	};
	$.fn.jbar = function(options){
		var op = $.extend({container:"#container", collapse:".collapse", toggleBut:".toggleCollapse div", sideBar:"#sidebar", sideBar2:"#sidebar_s", splitBar:"#splitBar", splitBar2:"#splitBarProxy"}, options);
		return this.each(function(){
			var jbar = this;
			var sbar = $(op.sideBar2, jbar);
			var bar = $(op.sideBar, jbar);
			$(op.toggleBut, bar).click(function(){
				DWZ.ui.sbar = false;
				var sbarwidth = sbar.cssv("left") + sbar.outerWidth();
				var barleft = sbarwidth - bar.outerWidth();
				bar.animate({left: barleft}, 200, function(){
					$(op.splitBar).hide();
					bar.hide();
					var cleft = $(op.container).cssv("left") - (bar.outerWidth() - sbar.outerWidth());
					var cwidth = bar.outerWidth() - sbar.outerWidth() + $(op.container).outerWidth();
					$(op.container).css({left: cleft,width: cwidth});
					sbar.show().css("left", -50).animate({left: 5}, 200);
					initPageContent();
				});
				$(op.collapse,sbar).click(function(){
					if(bar.is(":hidden")) {
						$(op.toggleBut, bar).hide();
						bar.show().animate({left: sbarwidth}, 500);
					} else {
						bar.animate({left: barleft}, 500, function(){
							bar.hide();
						});
					}
					return false;
				});
				return false;
			});
			$(op.toggleBut, sbar).click(function(){
				DWZ.ui.sbar = true;
				bar.show();
				sbar.hide();
				bar.animate({left: 5}, 500, function(){
					$(op.splitBar).show();
					$(op.toggleBut, bar).show();					
					var cleft = 5 + bar.outerWidth() + $(op.splitBar).outerWidth();
					var cwidth = $(op.container).outerWidth() - (cleft - $(op.container).cssv("left"));
					$(op.container).css({left: cleft,width: cwidth});
					$(op.collapse, sbar).unbind('click');
					initPageContent();
				});
				return false;
			});
			$(op.splitBar).mousedown(function(event){
				$(op.splitBar2).each(function(){
					var spbar2 = this;
					setTimeout(function(){$(spbar2).show();}, 500);
					$(this).css({visibility: "visible",left: $(op.splitBar).css("left")});
					$.data(this, 'pp-rwdrag', {options: $.extend(options, {stop: function(){
								$(this).css("visibility", "hidden");
								var move = $(this).cssv("left") - $(op.splitBar).cssv("left");
								var sbarwidth = bar.outerWidth() + move;
								var cleft = $(op.container).cssv("left") + move;
								var cwidth = $(op.container).outerWidth() - move;
								bar.css("width", sbarwidth);
								$(op.splitBar).css("left", $(this).css("left"));
								$(op.container).css({left: cleft,width: cwidth});
								initPageContent();
							}
						})
					});
					if (!$.rwdrag.current) {
						$.rwdrag.current = {
							el: this,
							oleft: parseInt(this.style.left) || 0,
							ox: event.pageX || event.screenX
						};
						$.rwdrag.addEvent(document, 'mouseup', $.rwdrag.stop, true);
						$.rwdrag.addEvent(document, 'mousemove', $.rwdrag.drag, true);
					}
					if (event.stopPropagation) 
						event.stopPropagation();
					if (event.preventDefault) 
						event.preventDefault();
					return false;
					
				});
			});
		});
	}
})(jQuery);
