/**
 * @author ZhangHuihua@msn.com
 * 
 */

var DWZ = {
	// sbar: show sidebar
	ui:{sbar:true},
	frag:{}, //page fragment
	msg:{}, //alert message
	loginUrl:"/render.do?method=login",
	ajaxDoneEval:function (json) { //session timeout
		try{
			return eval('(' + json + ')');
		} catch (e){
			return {};
		}
	},
	init: function(pageFrag){
		$.ajax({
			url:pageFrag,
			type:'GET',
			dataType:'xml',
			timeout: 30000,
			error: function(){alert('Error loading XML document: ' + pageFrag);}, 
			success: function(xml){
				$(xml).find("_PAGE_").each(function(){
					var pageId = $(this).attr("id");
					if (pageId) DWZ.frag[pageId] = $(this).text();
				});
				
				$(xml).find("_MSG_").each(function(){
					var id = $(this).attr("id");
					if (id) DWZ.msg[id] = $(this).text();
				});
			}
		});
	}
};

jQuery.extend(String.prototype, {
	isNumber:function() {
		return (new RegExp(/^[0-9]+$/).test(this));
	},
	isPositiveInteger:function(){
		return (new RegExp(/^[1-9]\d*$/).test(this));
	},
	
	trim:function(){
		return this.replace(/(^\s*)|(\s*$)|\r|\n/g, "");
	},
	
	trans:function() {
		return this.replace(/&lt;/g, '<').replace(/&gt;/g,'>').replace(/&quot;/g, '"');
	},
	
	replaceAll:function(os, ns) {
		return this.replace(new RegExp(os,"gm"),ns);
	},
	
	skipChar:function(ch) {
		if (!this || this.length===0) {return '';}
		if (this.charAt(0)===ch) {return this.substring(1).skipChar(ch);}
		return this;
	},

	/**
	 * check if Valid password
	 */
	isValidPwd:function() {
		return (new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this)); 
	},

	/**
	 * check if Valid email
	 */
	isValidMail:function(){ 
		return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim()));
	},
	
	isSpaces:function() {
		for(var i=0; i<this.length; i+=1) {
			var ch = this.charAt(i);
			if (ch!=' '&& ch!="\n" && ch!="\t" && ch!="\r") {return false;}
		}
		return true;		
	},
	
	isPhone:function() {
		return (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(this));
	},
	
	isCreditCard:function(){
		if(this.isNumber && this.length == 16){return true;}
		return false;
	},
	isURL:function(){
		return (new RegExp(/^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/).test(this)); 
	}
});


(function($){
	$.fn.extend({

		loadUrl: function(url,data,callback){
			var aData = data || {};
			aData["timestamp"] = new Date().getTime();
//			this.load(url,aData,function(){
//				initUI(this);
//				if (jQuery.isFunction(callback)) callback();
//			});

			var $this = $(this);
			$.get(url, aData, function(data){
				var json = DWZ.ajaxDoneEval(data);
				if (json.statusCode==301){
					alertMsg.error(json.message, {okCall:function(){
						window.location = "/render.do?method=login";
					}});
				} else {
					$this.html(data).initUI();
					if (jQuery.isFunction(callback)) callback();
				}
			});
		},
		initUI: function(){
			initUI(this);
		},
		/**
		 * adjust component inner content box height
		 * @param {Object} content: content box jQuery Obj
		 */
		layoutH: function(content){
			var jBox = content || $("#container .tabsPageContent");
			var iTabsContentH = jBox.height();
			return this.each(function(){
				var iLayoutH = $(this).attr("layoutH") || 0;
				try {
					iLayoutH = parseInt(iLayoutH);
				} catch (e) {
					iLayoutH = 0
				}
				$(this).height(iTabsContentH - iLayoutH > 50 ? iTabsContentH - iLayoutH : 50);
			});
		},
		hoverClass: function(className){
			var _className = className || "hover";
			return this.each(function(){
				$(this).hover(function(){
					$(this).addClass(_className);
				},function(){
					$(this).removeClass(_className);
				});
			});
		},
		focusClass: function(className){
			var _className = className || "textInputFocus";
			return this.each(function(){
				$(this).focus(function(){
					$(this).addClass(_className);
				}).blur(function(){
					$(this).removeClass(_className);
				});
			});
		},
		inputAlert: function(){
			return this.each(function(){
				
				var $this = $(this);
				var altStr = $this.attr("alt");
				var isEmpty = function(){
					return (!$this.val() || $this.val() == altStr);
				}
				
				$this.val(altStr).addClass("gray");
				$this.focus(function(){
					$this.removeClass("gray")
					if (isEmpty()) $this.val("");
				}).blur(function(){
					if (isEmpty()) $this.val(altStr).addClass("gray");
				});		
			});
		}
	});
})(jQuery);
