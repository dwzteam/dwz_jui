$(document).ready(function() {
	initLayout();
	$(window).resize(function(){
		initLayout();
		$("#container .tabsPageContent [layoutH]").layoutH();
	});

	$("#leftside").jbar({obj:"#sidebar", minW:150, maxW:700, move:"left"});	

	navTab.init();
	if ($.taskBar) $.taskBar.init();
	initUI();
	
	$("body").append("<div id='background' class='background'></div>").append("<div id='progressBar' class='progressBar'>数据加载中，请稍等...</div>");
	$("#progressBar").scrollCenter();

	$(document).ajaxStart(function(){
		$("#background,#progressBar").show();
	}).ajaxStop(function(){
		$("#background,#progressBar").hide();
	});

	$("#taskbar li").hoverClass("hover");
	$("#taskbar li.selected").hoverClass("selectedHover");
	$("#taskbar .close").hoverClass("closeHover");
	$("#taskbar .restore").hoverClass("restoreHover");
	$("#taskbar .minimize").hoverClass("minimizeHover");
	$("#taskbar .taskbarLeft").hoverClass("taskbarLeftHover");
	$("#taskbar .taskbarRight").hoverClass("taskbarRightHover");
	
	// tab styles
	var jTabsPH = $("div.tabsPageHeader");
	jTabsPH.find(".tabsLeft").hoverClass("tabsLeftHover");
	jTabsPH.find(".tabsRight").hoverClass("tabsRightHover");
	jTabsPH.find(".tabsMore").hoverClass("tabsMoreHover");
	
	$("#themeList").theme();
});

function initLayout(){
	var iContentW = $(window).width() - (DWZ.ui.sbar ? $("#sidebar").width() + 10 : 34) - 5;
	var iContentH = $(window).height() - $("#header").height() - 34;

	$("#container").width(iContentW);
	$("#container .tabsPageContent").height(iContentH - 34);
	$("#sidebar, #sidebar_s .collapse, #splitBar, #splitBarProxy").height(iContentH - 7);
	$("#taskbar").css({top: iContentH + $("#header").height() + 5});
	$("#taskbar").width($(window).width());
	initPageContent();
}

function initPageContent() {
	var iContentW = $(window).width() - (DWZ.ui.sbar ? $("#sidebar").width() + 10 : 34) - 5;
	$(".pageContent",$("#container")).each(function(){
		$(this).css("width",iContentW -2);
	});
}

function initUI(jP){
	var jParent = jP || $(document);
	//validate form
	$("form.required-validate", jParent).each(function(){
		$(this).validate({
			focusInvalid: false,
			focusCleanup: true,
			errorElement: "span"
		});
	});
	
	
//	$("textarea.editor").each(function(){
//		var oFCKeditor = new FCKeditor($(this).attr("name"));
//		oFCKeditor.BasePath = "fckeditor/";
//		oFCKeditor.Config.LinkBrowser = false;
//		oFCKeditor.Config.ImageBrowser = false;
//		oFCKeditor.Config.FlashBrowser = false;
//		oFCKeditor.Config.LinkUpload = false;
//		oFCKeditor.Config.ImageUpload = false;
//		oFCKeditor.Config.FlashUpload = false;
//		oFCKeditor.ToolbarSet = 'SystemBar';
//		oFCKeditor.ReplaceTextarea();
//	});

	$("textarea.editor").xheditor(true, {
		skin: 'o2007blue',
		tools: 'GStart,Fontface,FontSize,Bold,Italic,Underline,Strikethrough,FontColor,BackColor,GEnd,Separator,GStart,Align,List,Outdent,Indent,GEnd,Separator,GStart,Link,Fullscreen,Source,GEnd'
	});
	

	//auto bind tabs
	$("div.tabs-hover", jParent).tabs({eventType:"hover"});
	$("div.tabs", jParent).tabs({eventType:"click"});
	
	// navTab
	$("a[target=navTab]", jParent).each(function(){
		$(this).click(function(){
			var title = $(this).attr("title") || $(this).text();
			var rel = $(this).attr("rel") || "_blank";
			navTab.openTab(rel, $(this).attr("href"), title);
			return false;
		});
	});
	//dialogs
	$.pdialog.init();
	$("a[target=dialog]", jParent).each(function(){
		$(this).click(function(){
			var title = $(this).attr("title") || $(this).text();
			var rel = $(this).attr("rel") || "_blank";
			$.pdialog.open($(this).attr("href"), rel, title);
			return false;
		});
	});
	$("a[target=ajax]", jParent).each(function(){
		$(this).click(function(){
			var rel = $(this).attr("rel") || "container";
			$("#"+rel).loadUrl($(this).attr("href"));
			return false;
		});
	});
	//tables
	$("table.table", jParent).jTable();
	
	$("ul.tree", jParent).jTree();
	$('div.accordion').accordion({fillSpace:true,active:0});
	//$("div.dialog", jParent).rwdrag({shadow:".shadow", selector:".dialogHeader"}).jresize();
	
	// init styles
	$("input[type=text], input[type=password], textarea", jParent).addClass("textInput").focusClass("focus");

	$("input[readonly], textarea[readonly]", jParent).addClass("readonly");
	$("input[disabled=true], textarea[disabled=true]", jParent).addClass("disabled");

	$("input[type=text]").filter("[alt]").inputAlert();

	//Grid ToolBar
	$("div.panelBar li, div.panelBar .pagination li", jParent).hoverClass("hover");
		
	//Button
	$("div.button", jParent).hoverClass("buttonHover");
	$("div.buttonActive", jParent).hoverClass("buttonActiveHover");
	
	//tabsPageHeader
	$("div.tabsHeader li, div.tabsPageHeader li, div.accordionHeader, div.accordion", jParent).hoverClass("hover");
	
}

