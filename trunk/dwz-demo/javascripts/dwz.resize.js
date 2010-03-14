/**
 * @author Roger Wu
 * @version 1.0
 */
(function($){
 	$.fn.extend({jresize:function(options) {
        if (typeof options == 'string') {
                if (options == 'destroy') 
					return this.each(function() {
							var dialog = this;		
							$("div[class^='resizable']",dialog).each(function() {
								$(this).hide();
							});
	                });
        }
		return this.each(function(){
			var dialog = $(this);			
			var resizable = $(".resizable");
			$("div[class^='resizable']",dialog).each(function() {
				var bar = this;
				$(bar).mousedown(function(event) {
					$.pdialog.switchDialog(dialog);
					$.resizeTool.start(resizable, dialog, event, $(bar).attr("tar"));
					return false;
				}).show();
			});
		});
	}});
	$.resizeTool = {
		start:function(resizable, dialog, event, target) {
			$.pdialog.initResize(resizable, dialog, target);
			$.data(resizable[0], 'layer-drag', {
				options: $.extend($.pdialog._op, {target:target, dialog:dialog,stop:$.resizeTool.stop})
			});
			$.layerdrag.start(resizable[0], event, $.pdialog._op);
		},
		stop:function(){
			var data = $.data(arguments[0], 'layer-drag');
			$.pdialog.resizeDialog(arguments[0], data.options.dialog, data.options.target);
			$("body").css("cursor", "");
			$(arguments[0]).hide();
		}
	};
	$.layerdrag = {  
		start:function(obj,event, options) {
			if (!$.layerdrag.current) {
				$.layerdrag.current = {
					el: obj,
					oleft: parseInt(obj.style.left) || 0,
					owidth: parseInt(obj.style.width) || 0,
					otop: parseInt(obj.style.top) || 0,
					oheight:parseInt(obj.style.height) || 0,
					ox: event.pageX || event.screenX,
					oy: event.pageY || event.clientY
				};
				$.layerdrag.addEvent(document, 'mouseup', $.layerdrag.stop, true);
				$.layerdrag.addEvent(document, 'mousemove', $.layerdrag.drag, true);
			}
			if (event.stopPropagation) event.stopPropagation();
			if (event.preventDefault) event.preventDefault();				
		},
        drag: function(event) {
                if (!event) var event = window.event;
                var current = $.layerdrag.current;
				var data = $.data(current.el, 'layer-drag');
				var lmove = (event.pageX || event.screenX) - current.ox;
				var tmove = (event.pageY || event.clientY) - current.oy;
				if((event.pageY || event.clientY) <= 0 || (event.pageY || event.clientY) >= ($(window).height() - $(".dialogHeader", $(data.options.dialog)).outerHeight())) return false;
				var target = data.options.target;	
				var width = current.owidth;	
				var height = current.oheight;		
				if (target != "n" && target != "s") {
					width += (target.indexOf("w") >= 0)?-lmove:lmove;
				}
				if (width >= 300) {
					if (target.indexOf("w") >= 0) {
						current.el.style.left = (current.oleft + lmove) + 'px';
					}
					if (target != "n" && target != "s") {
						current.el.style.width = width + 'px';
					}
				}
				if (target != "w" && target != "e") {
					height += (target.indexOf("n") >= 0)?-tmove:tmove;
				}
				if (height >= 250) {
					if (target.indexOf("n") >= 0) {
						current.el.style.top = (current.otop + tmove) + 'px';
					}
					if (target != "w" && target != "e") {
						current.el.style.height = height + 'px';
					}
				}
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                return false;
        },     
        stop: function(event) {
                var current = $.layerdrag.current;
                var data = $.data(current.el, 'layer-drag');
                $.layerdrag.removeEvent(document, 'mousemove', $.layerdrag.drag, true);
                $.layerdrag.removeEvent(document, 'mouseup', $.layerdrag.stop, true);
                if (data.options.stop) {
                        data.options.stop.apply(current.el, [ current.el ]);
                }
                $.layerdrag.current = null;
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                return false;
        },     
        addEvent: function(obj, type, fn, mode) {
                if (obj.addEventListener)
                        obj.addEventListener(type, fn, mode);
                else if (obj.attachEvent) {
                        obj["e"+type+fn] = fn;
                        obj[type+fn] = function() { return obj["e"+type+fn](window.event); }
                        obj.attachEvent("on"+type, obj[type+fn]);
                }
        },
        removeEvent: function(obj, type, fn, mode) {
                if (obj.removeEventListener)
                        obj.removeEventListener(type, fn, mode);
                else if (obj.detachEvent) {
                        obj.detachEvent("on"+type, obj[type+fn]);
                        obj[type+fn] = null;
                        obj["e"+type+fn] = null;
                }
        }
	};
})(jQuery);