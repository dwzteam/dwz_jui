/**
 * @author Roger Wu
 */
(function($){
	$.fn.dialogDrag = function(options){
        if (typeof options == 'string') {
                if (options == 'destroy') 
					return this.each(function() {
							var dialog = this;		
							$("div.dialogHeader", dialog).unbind("mousedown");
	                });
        }
		return this.each(function(){
			var dialog = $(this);
			$("div.dialogHeader", dialog).mousedown(function(e){
				$.pdialog.switchDialog(dialog);
				dialog.data("task",true);
				setTimeout(function(){
					if(dialog.data("task"))$.dialogDrag.start(dialog,e);
				},100);
				return false;
			}).mouseup(function(e){
				dialog.data("task",false);
			});
		});
	};
	$.dialogDrag = {
		currId:null,
		_init:function(dialog) {
			this.currId = new Date().getTime();
			var shadow= "<div id=\""+ this.currId +"\"class=\"dialog dialogProxy\">"+
				"<div class=\"dialogHeader\">"+
				"<div class=\"dialogHeader_r\">"+
				"<div class=\"dialogHeader_c\">"+
				"<a class=\"close\" href=\"#close\">close</a>"+
				"<a class=\"maximize\" href=\"#maximize\">maximize</a>"+
				"<a class=\"minimize\" href=\"#minimize\">minimize</a>"+
				"<h1>" +$(".dialogHeader h1", dialog).text() + "</h1></div></div></div>"+
				"<div class=\"dialogContent\"></div>"+
				"<div class=\"dialogFooter\"><div class=\"dialogFooter_r\"><div class=\"dialogFooter_c\"></div></div></div>"+
				"</div>";
				$("body").append(shadow);
		},
		start:function(dialog,event){
				this._init(dialog);
				var sh = $("#"+ this.currId);
				sh.css({
					left: dialog.css("left"),
					top: dialog.css("top"),
					height: dialog.css("height"),
					width: dialog.css("width"),
					zIndex:parseInt(dialog.css("zIndex")) + 1
				}).show();
				$("div.dialogContent",sh).css("height",$("div.dialogContent",dialog).css("height"));
				sh.data("dialog",dialog);
				dialog.css({left:"-10000px",top:"-10000px"});
				$(".shadow").hide();
				$.data(sh[0], 'pp-rwdrag', {
					options: {
						selector:".dialogHeader",
						obj:sh,
						stop: this.stop
					}
				});
				if (!$.rwdrag.current) {
					$.rwdrag.current = {
						el: sh[0],
						oleft: parseInt(sh[0].style.left) || 0,
	                    otop: parseInt(sh[0].style.top) || 0,
	                    ox: event.pageX || event.screenX,
	                    oy: event.pageY || event.clientY
					};
					$.rwdrag.addEvent(document, 'mousemove', $.rwdrag.drag, true);
					$.rwdrag.addEvent(document, 'mouseup', $.rwdrag.stop, true);
				}
				return false;
		},
		stop:function(){
			var sh = $(arguments[0]);
			var dialog = sh.data("dialog");
			$(dialog).css({left:$(sh).css("left"),top:$(sh).css("top")});
			$.pdialog.attachShadow(dialog);
			$(sh).remove();
		}
	}
})(jQuery);