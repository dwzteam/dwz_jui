/**
 * @author Roger Wu
 * @version 1.0
 */
var showFileTimer = null;
(function($){
	$.fn.extend({jTable:function(options){
		
		 return this.each(function(){
		 	
		 	var table = this;

		 	var tlength = $(table).width();
			$.jTableTool.styles = [];
			var tparent = $(table).parent();
			var layoutH = $(this).attr("layoutH");
			var flength = tparent.innerWidth();
			var padleft = parseInt(tparent.css("padding-left"));
			var padright = parseInt(tparent.css("padding-right"));
			var brwidth = parseInt(tparent.css("border-right-width"));
			if(isNaN(brwidth)) brwidth = 0;
			var blwidth = parseInt(tparent.css("border-left-width"));
			if(isNaN(blwidth)) blwidth = 0;

			var oldThs = $(table).find("thead>tr:last-child").find("th");

			for(var i = 0, l = oldThs.size(); i < l; i++) {
				var $th = $(oldThs[i]);
				var style = [];
				
				style[0] = parseInt($th.width() * (flength - 34) / tlength) - 10;
				style[1] = $th.attr("align");
				$.jTableTool.styles[$.jTableTool.styles.length] = style;
			}
			
			$(this).wrap("<div class='grid'></div>");
			
			var parent = $(table).parent();
			parent.html($(table).html());
			
			var thead = parent.find("thead");
			thead.wrap("<div class='gridHeader'><div class='gridThead'><table style='width:" + (flength - 34) + "px;'></table></div></div>");
			var firstH = $(">tr:first-child", thead);
			var lastH = $(">tr:last-child", thead);
			var ths = $(">th", lastH);

			
			$(">th",firstH).each(function(){
				$(this).html("<div class='gridCol'>"+ $(this).html() +"</div>");
			});
			
			for(var i = 0, l = ths.size(); i<l; i++){
				var $th = $(ths[i]);
				$th.html("<div class='gridCol' title='"+$th.text()+"'>"+ $th.html() +"</div>");		
			}
			//setTimeout(function(){

//				var ifirstIndex = 0;
//				$(">th",firstH).each(function(){
//					var icolspan = parseInt($(this).attr("colspan")) || 1;
//					var ihw = 0;
//					for (var i = 0; i < icolspan; i++){
//						ihw += $.jTableTool.styles[ifirstIndex][0];
//						ifirstIndex++;
//					}
//					$(this).width(ihw + icolspan-1);
//				});

				for(var i = 0, l = ths.size(); i < l; i++) {
					var $th = $(ths[i]);
					var style = $.jTableTool.styles[i];

					$th.addClass(style[1])
					   .removeAttr("align")
					   .hoverClass("hover")
					   .removeAttr("width")
					   .width(style[0]);

				}
			//},1);
			setTimeout(function(){
				lastH.click(function(e){
					var $th = $(e.target).parent().parent();
					$("th",this).filter(".thSelected").removeClass("thSelected");
					$($th).addClass("thSelected");
					var cellNum = $.jTableTool.getCellNum($th);
					var tbody = $(".gridTbody", parent);
					$("table>tbody>tr", tbody).each(function(){
						var tds = $(">td",this);
						$(tds).filter(".tdSelected").removeClass("tdSelected");
						$(tds).eq(cellNum - 1).addClass("tdSelected");								
					});
				});
				
			},1);
			var tbody = parent.find(">tbody"); 
			tbody.wrap("<div class='gridScroller' layoutH='" + layoutH + "' style='width:" + (flength - (padleft + padright) - (brwidth + blwidth)) + "px;'><div class='gridTbody'><table style='width:" + (flength - 34) + "px;'></table></div></div>");
			var ftr = $(">tr:first-child", tbody);
											
			$("tr", tbody).each(function(){
				var $ftds = $(">td", this);
				var i = 0;
				for (var l = $ftds.size(); i < l; i++) {
					var $ftd = $($ftds[i]);
					$ftd.html("<div>" + $ftd.html() + "</div>");
					$ftd.addClass($.jTableTool.styles[i][1]);
				}
			
				$(this).hoverClass().click(function(){
					$("tr",tbody).filter(".selected").removeClass("selected");
					$(this).addClass("selected");
					var sTarget = $(this).attr("target");
					if (sTarget){
						$("#"+sTarget).val($(this).attr("rel"));
					}
				});
			});
			

			$(">td",ftr).each(function(i){
				$(this).width($.jTableTool.styles[i][0]);	
			});
			
			parent.append("<div class='resizeMarker' style='height:300px; left:57px;display:none;'></div><div class='resizeProxy' style='height:300px; left:377px;display:none;'></div>");
			setTimeout(function(){
				var scroller = $(".gridScroller", parent);
				scroller.scroll(function(event){
					var header = $(".gridThead", parent);
					if(scroller.scrollLeft() > 0){
						header.css("position", "relative");
						var scroll = scroller.scrollLeft();
						header.css("left", scroller.cssv("left") - scroll);
					}
					if(scroller.scrollLeft() == 0) {
						header.css("position", "relative");
						header.css("left", "0px");
					}
			        return false;
				});		
			},1);
			setTimeout(function(){
				$(">tr", thead).each(function(){
					var tr = this;
					var subTitle = $(tr).next();
					$(">th", this).each(function(i){
						var th = this;
						$(th).mouseover(function(event){
							var offset = $.jTableTool.getOffset(th, event).offsetX;
							if($(th).outerWidth() - offset < 5) {
								$(th).css("cursor", "col-resize")
								    .mousedown(function(event){
									$(".resizeProxy", parent).show().css({
										left: $.jTableTool.getRight(th)- $(".gridScroller", parent).scrollLeft(),
										top:$.jTableTool.getTop(th),
										height:$.jTableTool.getHeight(th,parent),
										cursor:"col-resize"
									});
									$(".resizeMarker", parent).show().css({
											left: $.jTableTool.getLeft(th) + 1 - $(".gridScroller", parent).scrollLeft(),
											top: $.jTableTool.getTop(th),
											height:$.jTableTool.getHeight(th,parent)									
									});
									$.data($(".resizeProxy", parent)[0], 'pp-rwdrag', {
										options: $.extend(options, {scop:true, cellMinW:20, relObj:$(".resizeMarker", parent)[0],
											move: "left",
											stop: function(){
												var pleft = $(".resizeProxy", parent).position().left;
												var mleft = $(".resizeMarker", parent).position().left;
												var move = pleft - mleft - $(th).outerWidth() - 9;

												var tbparent = $("table", parent);

												var cols = $.jTableTool.getColspan($(th));
												var cellNum = $.jTableTool.getCellNum($(th));
												var start = $.jTableTool.getStart($(th));
												var totalW = 0;
												var cellW = [];							
												if (subTitle[0]) {
													var $ths = $(">th", subTitle);
													for (var i = start - 1, j = 0; j < cols; j++) {
														var wd = $(">div", $ths.eq(i + j)).outerWidth();
														cellW[cellW.length] = wd;
														totalW += wd;
													}
													for (var i = start - 1, j = 0; j < cols; j++) {
														$ths.eq(i+j).css("width", cellW[j] + parseInt((cellW[j] * move / totalW).toFixed(0)));
													}
												} else {
										
													var $div = $(">div", $(th));
													$(th).width($(th).width() + move);
												}
												
												
												var $lastH = $(">tr:last-child", thead);						
												var tbody = $(".gridTbody", parent);

												var $table = $(">table", tbody);
												$("tr", $table).each(function(index){
													var tds = $(">td", this);
												
													var $dcell = $(tds).eq(cellNum - 1);
													$dcell.css("width", $(">th",$lastH).eq(cellNum - 1).css("width"));
												});
												$(".resizeMarker,.resizeProxy", parent).hide();
											}
										})
									});
									if (!$.rwdrag.current) {
										$.rwdrag.current = {
											el: $(".resizeProxy", parent)[0],
											oleft: parseInt($(".resizeProxy", parent)[0].style.left) || 0,
											ox: event.pageX || event.screenX
										};
										$.rwdrag.addEvent(document, 'mouseup', $.rwdrag.stop, true);
										$.rwdrag.addEvent(document, 'mousemove', $.rwdrag.drag, true);
									}
									if (event.stopPropagation) event.stopPropagation();
									if (event.preventDefault) event.preventDefault();
									return false;
								});
							} else {
								$(th).css("cursor", "default");
								$(th).unbind("mousedown");
							}
							return false;
						});
					});
				});	
			},1);
			setInterval(function(){
				var flength = $(parent).parent().width();
				var brwidth = parseInt($(parent).parent().css("border-right-width"));
				if(isNaN(brwidth)) brwidth = 0;
				var blwidth = parseInt($(parent).parent().css("border-left-width"));
				if(isNaN(blwidth)) blwidth = 0;
				$(parent).width(flength - (brwidth + blwidth));
				$(".gridScroller", parent).width(flength - (brwidth + blwidth));
			}, 1000);
			
		 });
	}
	});
	$.jTableTool = {
		styles:[],
		 getLeft:function(obj) {
			var width = 0;
			$(obj).prevAll().each(function(){
				width += $(this).outerWidth();
			});
			return width - 1;
		},
		getRight:function(obj) {
			var width = 0;
			$(obj).prevAll().andSelf().each(function(){
				width += $(this).outerWidth();
			});
			return width - 1;
		},
		getTop:function(obj) {
			var height = 0;
			$(obj).parent().prevAll().each(function(){
				height += $(this).outerHeight();
			});
			return height;
		},
		getHeight:function(obj, parent) {
			var height = 0;
			var head = $(obj).parent();
			head.nextAll().andSelf().each(function(){
				height += $(this).outerHeight();
			});
			$(".gridTbody", parent).children().each(function(){
				height += $(this).outerHeight();
			});
			return height;
		},
		getCellNum:function(obj) {
			return $(obj).prevAll().andSelf().size();
		},
		getColspan:function(obj) {
			return $(obj).attr("colspan") || 1;
		},
		getStart:function(obj) {
			var start = 1;
			$(obj).prevAll().each(function(){
				start += parseInt($(this).attr("colspan") || 1);
			});
			return start;
		},
		getPageCoord:function(element){
			var coord = {x: 0, y: 0};
			while (element){
			    coord.x += element.offsetLeft;
			    coord.y += element.offsetTop;
			    element = element.offsetParent;
			}
			return coord;
		},
		getOffset:function(obj, evt){
			if($.browser.msie ) {
				var objset = $(obj).offset();
				var evtset = {
					offsetX:evt.pageX || evt.screenX,
					offsetY:evt.pageY || evt.screenY
				};
				var offset ={
			    	offsetX: evtset.offsetX - objset.left,
			    	offsetY: evtset.offsetY - objset.top
				};
				return offset;
			}
			var target = evt.target;
			if (target.offsetLeft == undefined){
			    target = target.parentNode;
			}
			var pageCoord = $.jTableTool.getPageCoord(target);
			var eventCoord ={
			    x: window.pageXOffset + evt.clientX,
			    y: window.pageYOffset + evt.clientY
			};
			var offset ={
			    offsetX: eventCoord.x - pageCoord.x,
			    offsetY: eventCoord.y - pageCoord.y
			};
			return offset;
		}
	}
})(jQuery);
