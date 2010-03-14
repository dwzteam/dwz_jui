/**
 * @author Roger Wu 
 * @version 1.0
 */
(function($) {
        $.fn.rwdrag = function(options) {
				var select = options.selector;
                if (typeof options == 'string') {
                        if (options == 'destroy') return this.each(function() {
                                $.rwdrag.removeEvent(this, 'mousedown', $.rwdrag.start, false);
                                $.data(this, 'pp-rwdrag', null);
                        });
                }
                return this.each(function() {
					var obj = this;
                    $.data($(select,obj)[0], 'pp-rwdrag', { options: $.extend({obj:obj}, options) });
                    $.rwdrag.addEvent($(select,obj)[0], 'mousedown', $.rwdrag.start, false);					
                });
        };      
        $.rwdrag = {
                	start: function(event) {
							    var data = $.data(this, 'pp-rwdrag');
								var obj = data.options.obj;
                        if (!$.rwdrag.current) {
								$.data(obj, 'pp-rwdrag', { options: data.options});
                                $.rwdrag.current = { 
                                        el: obj,
                                        oleft: parseInt(obj.style.left) || 0,
                                        otop: parseInt(obj.style.top) || 0,
                                        ox: event.pageX || event.screenX,
                                        oy: event.pageY || event.screenY								
                                };
                                $.rwdrag.addEvent(document, 'mouseup', $.rwdrag.stop, true);
                                $.rwdrag.addEvent(document, 'mousemove', $.rwdrag.drag, true);
                        }
                        if (event.stopPropagation) event.stopPropagation();
                        if (event.preventDefault) event.preventDefault();
                        return false;
                },            
                drag: function(event) {
                        if (!event) var event = window.event;
                        var current = $.rwdrag.current;
						var data = $.data(current.el, 'pp-rwdrag');
						var left = (current.oleft + (event.pageX || event.screenX) - current.ox);
						var top = (current.otop + (event.pageY || event.clientY) - current.oy);
						if(top < 1) top = 0;
						if(data.options.move =='left') {
							if ((data.options.minW && left >= $(data.options.obj).cssv("left") + data.options.minW) && (data.options.maxW && left <= $(data.options.obj).cssv("left") + data.options.maxW)) 
								current.el.style.left = left + 'px';
							else 
								if (data.options.scop) {
									if(data.options.relObj) {
										if((left - parseInt(data.options.relObj.style.left)) > data.options.cellMinW) {
											current.el.style.left = left + 'px';
										}
									} else 
										current.el.style.left = left + 'px';
							}
						} else if(data.options.move == 'top'){
							current.el.style.top = top + 'px';
						} else {
							var selector = $(data.options.selector, $(data.options.obj));
							if(left >= -selector.outerWidth()*2/3 && top >=0 && (left + selector.outerWidth()/3 < $(window).width()) && (top + selector.outerHeight() < $(window).height())) {
	                        	current.el.style.left = left + 'px';
	                        	current.el.style.top = top + 'px';								
							}
						}
                        if (event.stopPropagation) event.stopPropagation();
                        if (event.preventDefault) event.preventDefault();
                        return false;
                },
                stop: function(event) {
                        var current = $.rwdrag.current;
                        var data = $.data(current.el, 'pp-rwdrag');
                        $.rwdrag.removeEvent(document, 'mousemove', $.rwdrag.drag, true);
                        $.rwdrag.removeEvent(document, 'mouseup', $.rwdrag.stop, true);
                        if (data.options.stop) {
                                data.options.stop.apply(current.el, [ current.el ]);
                        }
						if(data.options.done) {
								data.options.done($(data.options.obj), $(data.options.dialog));
						}
                        $.rwdrag.current = null;
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