/**
 * @author Roger Wu
 * @version 1.0
 */
var showFileTimer = null;
(function($){
	$.fn.extend({jTable:function(options){
		 return this.each(function(){
		 	
		 	var table = this;
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
			tparent.css("width",(flength - (padleft + padright)));
			$(this).wrap("<div class='grid' style='width:" + (flength - (padleft + padright) -(brwidth + blwidth)) + "px;'></div>");
			
			var parent = $(table).parent();
			parent.html($(table).html());
			
			var thead = parent.find("thead");
			thead.wrap("<div class='gridHeader'><div class='gridThead'><table style='width:" + (flength - 34) + "px;'></table></div></div>");
			
			var firstH = $(">tr:first-child", thead);
			var lastH = $(">tr:last-child", thead);
			var ths = $(">th", lastH);
			var tlength = 0;
			$(">th",firstH).each(function(){
				$(this).html("<div class='gridCol'>"+ $(this).text() +"</div>");
			});
			for(var i = 0, l = ths.size(); i<l; i++){
				var $th = $(ths[i]);
				tlength += parseInt($th.css("width"));
				$th.html("<div class='gridCol'>"+ $th.text() +"</div>");			
			}
			setTimeout(function(){
				for(var i = 0, l = ths.size(); i < l; i++) {
					var $th = $(ths[i]);
					var style = [];
					style[0] = parseInt(parseInt($th.css("width")) * (flength - 34) / tlength);
					style[1] = $th.attr("align");
					$(">div", $th).css("width", style[0] - 9);
					$th.css("width", style[0])
					   .addClass(style[1])
					   .removeAttr("align")
					   .hover(function(){
							$(this).addClass("hover");
						}, function(){
							$(this).removeClass("hover");
						});
					$.jTableTool.styles[$.jTableTool.styles.length] = style;
				}
			},1);
			setTimeout(function(){
				lastH.click(function(e){
					var $th = $(e.target).parent();
					$("th",this).filter(".thSelected").removeClass("thSelected");
					$($th).addClass("thSelected");
					var cellNum = $.jTableTool.getCellNum($th);
					var tbody = $(".gridTbody", parent);
					$("table", tbody).each(function(){
						var tds = $("tr",this).children();
						$(tds).filter(".tdSelected").removeClass("tdSelected");
						$(tds).eq(cellNum - 1).addClass("tdSelected");								
					});
				});
			},1);
			
			var tbody = parent.find(">tbody"); 
			tbody.wrap("<div class='gridScroller' layoutH='" + layoutH + "' style='width:" + (flength - (padleft + padright) - (brwidth + blwidth)) + "px;'><div class='gridTbody' style='width:" + (flength - 30) +"px;'></div></div>");
			var bparent = tbody.parent();
			var cbody = tbody.clone();
			bparent.html("");
			setTimeout(function(){
				var $trs = $(">tr", cbody);
				var bodyhtml = "";
				for (var j = 0, k = $trs.size(); j < k; j++) {				
					var tr = $($trs[j]);
					var tds = $(">td", tr);
					var trhtml = "<div class='gridRow' style='width:" + (flength - 30) + "px;'><table style='width:" + (flength - 30) + "px;'><tbody><tr>";
					var i = 0
					for (var l = tds.size()-1; i < l; i++) {
						var $td = $(tds[i]);
						trhtml += "<td class=\"" + $.jTableTool.styles[i][1] + "\" style=\"width:"+ $.jTableTool.styles[i][0] + "px\"" + "><div class='gridCol' style=\"width:"+ ($.jTableTool.styles[i][0] - 9)+"px\">" + $td.text() + "</div></td>"
					}
					trhtml += "<td class=\"" + $.jTableTool.styles[i][1] + " tdLast\" style=\"width:"+ $.jTableTool.styles[i][0] + "px\"" + "><div class='gridCol' style=\"width:"+ ($.jTableTool.styles[i][0] - 9)+"px\">" + $td.text() + "</div></td>"
					trhtml += "</tr></tbody></table></div>";
					bodyhtml += trhtml;
				}
				bparent.html(bodyhtml);
				$("div.gridRow", bparent).each(function(){
					$(this).hover(function(){
						$(this).addClass("hover");
					},function(){
						$(this).removeClass("hover");
					}).click(function(){
						$("div.gridRow",bparent).filter(".selected").removeClass("selected");
						$(this).addClass("selected");
					});
				});
			}, 50);
			
			parent.append("<div class='resizeMarker' style='height:300px; left:57px;display:none;'></div><div class='resizeProxy' style=' height:300px; left:377px;display:none;'></div>");
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
												var move = pleft - mleft - $(">div",$(th)).outerWidth() - 9;
												var tbparent = $("table", parent);
												tbparent.css("width", tbparent.cssv("width") + move);
												var cols = $.jTableTool.getColspan($(th));
												var cellNum = $.jTableTool.getCellNum($(th));
												var start = $.jTableTool.getStart($(th));
												var totalW = 0;
												var cellW = [];											
												if (subTitle[0]) {
													var $ths = $(">th", subTitle);
													for (var i = start - 1, j = 0; j < cols; j++) {
														var wd = $(">div", $ths.eq(i + j)).cssv("width");
														cellW[cellW.length] = wd;
														totalW += wd;
													}
													for (var i = start - 1, j = 0; j < cols; j++) {
														$(">div", $ths.eq(i + j)).css("width", cellW[j] + parseInt((cellW[j] * move / totalW).toFixed(0)));
													}
												} else {
													var $div = $(">div", $(th));
													$div.css("width", $div.outerWidth() + move);
												}
												var tbody = $(".gridTbody", parent);
												tbody.css("width", tbody.cssv("width") + move);
												var $tables = $("table", tbody);
												for(var i = 0, l = $tables.size(); i < l; i+=1) {
													var $this = $($tables.eq(i));
													var tbparent = $($this).parent();												
													tbparent.css("width", tbparent.cssv("width") + move);
													if(subTitle[0]) {
														var tds = $("tr",$this).children();
														for(var k = start -1, j = 0; j < cols; j++) {
															var dcell = $(">div", $(tds).eq(k + j));
															dcell.css("width", cellW[j] + parseInt((cellW[j]*move/totalW).toFixed(0)));
														}
													} else {
														$("tr",$this).children().each(function(i){
															if(i == cellNum - 1) {
																var $div = $(">div", this);
																$div.css("width", $div.cssv("width") + move);
															}
														});
													}
												}
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
				var flength = parseInt($(parent).parent().css("width"));
				var brwidth = parseInt($(parent).parent().css("border-right-width"));
				if(isNaN(brwidth)) brwidth = 0;
				var blwidth = parseInt($(parent).parent().css("border-left-width"));
				if(isNaN(blwidth)) blwidth = 0;
				$(parent).css("width", flength - (brwidth + blwidth));
				$(".gridScroller", parent).css("width", flength - (brwidth + blwidth));
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
