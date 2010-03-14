/**
 * @author ZhangHuihua@msn.com
 * 
 */
var navTab = {
	componentBox: null, // tab component. contain tabBox, prevBut, nextBut, panelBox
	_tabBox: null,
	_prevBut: null,
	_nextBut: null,
	_panelBox: null,
	_moreBut:null,
	_moreBox:null,
	_currentIndex: 0,
	
	_op: {id:"navTab", stTabBox:".navTab-tab", stPanelBox:".navTab-panel", mainTabId:"main", closeClass:"close", prevClass:"tabsLeft", nextClass:"tabsRight", stMore:".tabsMore", stMoreLi:"ul.tabsMoreList"},
	
	init: function(options){
		var $this = this;
		$.extend(this._op, options);

		this.componentBox = $("#"+this._op.id);
		this._tabBox = this.componentBox.find(this._op.stTabBox);
		this._panelBox = this.componentBox.find(this._op.stPanelBox);
		this._prevBut = this.componentBox.find("."+this._op.prevClass);
		this._nextBut = this.componentBox.find("."+this._op.nextClass);
		this._moreBut = this.componentBox.find(this._op.stMore);
		this._moreBox = this.componentBox.find(this._op.stMoreLi);

		this._prevBut.click(function(event) {$this._scrollPrev()});
		this._nextBut.click(function(event) {$this._scrollNext()});
		this._moreBut.click(function(){
			$this._moreBox.toggle();
			return false;
		});
		$(document).click(function(){$this._moreBox.hide()});
		
		this._init();
		this._ctrlScrollBut();
	},
	_init: function(){
		var $this = this;
		this._getTabs().each(function(iTabIndex){
			$(this).unbind("click").click(function(event){$this._switchTab(iTabIndex)});
			$(this).find("a."+navTab._op.closeClass).unbind("click").click(function(){
				$this._closeTab(iTabIndex);
			});
		});
		this._getMoreLi().each(function(iTabIndex){
			$(this).find(">a").unbind("click").click(function(event){
				$this._switchTab(iTabIndex);
			});
		});
		this._switchTab(this._currentIndex);
	},

	_getTabs: function(){
		return this._tabBox.find("> li");
	},
	_getPanels: function(){
		return this._panelBox.find("> div");
	},
	_getMoreLi: function(){
		return this._moreBox.find("> li");
	},
	_getTabsW: function(iStart, iEnd){
		return this._tabsW(this._getTabs().slice(iStart, iEnd));
	},
	_tabsW:function(jTabs){
		var iW = 0;
		jTabs.each(function(){
			iW += $(this).outerWidth(true);
		});
		return iW;
	},
	_indexTabId: function(tabid){
		if (!tabid) return -1;
		var iOpenIndex = -1;
		this._getTabs().each(function(index){
			if ($(this).attr("tabid") == tabid){iOpenIndex = index; return;}
		});
		return iOpenIndex;
	},
	_getLeft: function(){
		return this._tabBox.position().left;
	},
	_getScrollBarW: function(){
		return this.componentBox.width()-55;
	},
	
	_visibleStart: function(){
		var iLeft = this._getLeft(), iW = 0;
		var jTabs = this._getTabs();
		for (var i=0; i<jTabs.size(); i++){
			if (iW + iLeft >= 0) return i;
			iW += jTabs.eq(i).outerWidth(true);
		}
		return 0;
	},
	_visibleEnd: function(){
		var iLeft = this._getLeft(), iW = 0;
		var jTabs = this._getTabs();
		for (var i=0; i<jTabs.size(); i++){
			iW += jTabs.eq(i).outerWidth(true);
			if (iW + iLeft > this._getScrollBarW()) return i;
		}
		return jTabs.size();
	},
	_scrollPrev: function(){
		var iStart = this._visibleStart();
		if (iStart > 0){
			this._scrollTab(-this._getTabsW(0, iStart-1));
		}
	},
	_scrollNext: function(){
		var iEnd = this._visibleEnd();
		if (iEnd < this._getTabs().size()){
			this._scrollTab(-this._getTabsW(0, iEnd+1) + this._getScrollBarW());
		}	
	},
	_scrollTab: function(iLeft, isNext){
		var $this = this;
		this._tabBox.animate({ left: iLeft+'px' }, 200, function(){$this._ctrlScrollBut();});
	},
	_scrollCurrent: function(){ // auto scroll current tab
		var iW = this._tabsW(this._getTabs());
		if (iW <= this._getScrollBarW()){
			this._scrollTab(0);
		} else if (this._getLeft() < this._getScrollBarW() - iW){
			this._scrollTab(this._getScrollBarW()-iW);
		} else if (this._currentIndex < this._visibleStart()) {
			this._scrollTab(-this._getTabsW(0, this._currentIndex));
		} else if (this._currentIndex >= this._visibleEnd()) {
			this._scrollTab(this._getScrollBarW() - this._getTabs().eq(this._currentIndex).outerWidth(true) - this._getTabsW(0, this._currentIndex));
		}
	},
	_ctrlScrollBut: function(){
		var iW = this._tabsW(this._getTabs());
		if (this._getScrollBarW() > iW){
			this._prevBut.hide();
			this._nextBut.hide();
			this._tabBox.parent().removeClass("tabsPageHeaderMargin");
		} else {
			this._prevBut.show().removeClass("tabsLeftDisabled");
			this._nextBut.show().removeClass("tabsRightDisabled");
			this._tabBox.parent().addClass("tabsPageHeaderMargin");
			if (this._getLeft() >= 0){
				this._prevBut.addClass("tabsLeftDisabled");
			} else if (this._getLeft() <= this._getScrollBarW() - iW) {
				this._nextBut.addClass("tabsRightDisabled");
			} 
		}
	},
	
	_switchTab: function(iTabIndex){
		var jTabs = this._getTabs();
		this._currentIndex = iTabIndex;
		jTabs.removeClass("selected").eq(iTabIndex).addClass("selected");
		this._getPanels().hide().eq(iTabIndex).show();
		this._scrollCurrent();
		
		this._getMoreLi().removeClass("selected").eq(iTabIndex).addClass("selected");
	},
			
	_closeTab: function(index){
		this._getTabs().eq(index).remove();
		this._getPanels().eq(index).remove();
		this._getMoreLi().eq(index).remove();
		if (this._currentIndex >= index) this._currentIndex--;

		this._init();
		this._scrollCurrent();
	},
	closeAllTab: function(){
		this._getTabs().gt(0).remove();
		this._getPanels().gt(0).remove();
		this._init();
	},

	_getPanel: function(tabid){
		var index = this._indexTabId(tabid);
		return this._getPanels().eq(index);
	},
	loadTabUrl: function(tabid, url, data){
		var jPanel = this._getPanel(tabid);
		if (!jPanel) return false;
		jPanel.loadUrl(url, data, function(){
			jPanel.find("[layoutH]").layoutH();
		});
	},
	closeTab: function(tabid){
		var index = this._indexTabId(tabid);
		if (index > 0) {this._closeTab(index);}
	},
	closeCurrentTab: function(){
		if (this._currentIndex > 0) {this._closeTab(this._currentIndex);}
	},
	openTab: function(tabid, url, title){ //if found tabid replade tab, else create a new tab.
		var iOpenIndex = this._indexTabId(tabid);

		if (iOpenIndex >= 0){
			var jTab = this._getTabs().eq(iOpenIndex);
			var stSpan = jTab.attr("tabid") == this._op.mainTabId ? "> a > span > span" : "> a > span";
			jTab.find(stSpan).text(title);
			var jPanel = this._getPanels().eq(iOpenIndex);
			jPanel.loadUrl(url, {}, function(){
				jPanel.find("[layoutH]").layoutH();
			});
			this._currentIndex = iOpenIndex;
		} else {
			var tabFrag = '<li tabid="#tabid#"><a href="#"><span>#title#</span></a><a href="#" class="close">close</a></li>';
			this._tabBox.append(tabFrag.replace("#tabid#", tabid).replace("#title#", title));
			this._panelBox.append('<div></div>');
			this._moreBox.append('<li><a href="#">#title#</a></li>'.replace("#title#", title));
			
			var jTabs = this._getTabs();
			var jPanel = this._getPanels().filter(":last");
			jPanel.loadUrl(url, {}, function(){
				jPanel.find("[layoutH]").layoutH();
			});
			this._currentIndex = jTabs.size() - 1;
			
			jTabs.filter(":last").hover(function(){
				$(this).addClass("hover");
			},function(){
				$(this).removeClass("hover");
			});
		}
		
		this._init();
		this._scrollCurrent();
	}
};