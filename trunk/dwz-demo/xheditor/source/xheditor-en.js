/*!
 * xhEditor - WYSIWYG XHTML Editor
 * @requires jQuery v1.3.2
 * 
 * @author Yanis.Wang<yanis.wang@gmail.com>
 * @site http://pirate9.com/
 * @licence LGPL(http://www.opensource.org/licenses/lgpl-license.php)
 * 
 * @Version: 0.9.9 build 091123
 */
(function($){
$.fn.xheditor=function(bInit,options)
{
	return this.each(function(){
		if(this.tagName.toLowerCase()!='textarea')return;
		if(bInit)//初始化
		{
			if(!this.xheditor)
			{
				var editor=new $.xheditor(this,options);
				if(editor.init())this.xheditor=editor;			
				else editor=null;	
			}
		}
		else//卸载
		{
			if(this.xheditor)
			{
				this.xheditor.remove();
				this.xheditor=null;
			}
		}
	});
}
var xCount=0,isIE=$.browser.msie,isMozilla=$.browser.mozilla,isSafari=$.browser.safari,bShowPanel=false;
var _jPanel,_jCntLine,_jPanelButton;
var baseURL,jsURL;
baseURL=window.location.href.replace(/[\?#].*$/, '').replace(/[\/\\][^\/]*$/, '');
baseURL+= '/';
var arrs=$('script[src*=xheditor]'),s;
for(var i=0;i<arrs.length;i++){
	s=arrs[i].src;
	if(s.match(/xheditor[^\/]*\.js/i)){
		jsURL=s.replace(/[\?#].*$/, '').replace(/(^|[\/\\])[^\/]*$/, '');
		if(jsURL!='')jsURL+= '/';
		break;
	}
}
var specialKeys={ 27: 'esc', 9: 'tab', 32:'space', 13: 'return', 8:'backspace', 145: 'scroll', 
          20: 'capslock', 144: 'numlock', 19:'pause', 45:'insert', 36:'home', 46:'del',
          35:'end', 33: 'pageup', 34:'pagedown', 37:'left', 38:'up', 39:'right',40:'down', 
          112:'f1',113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 
          120:'f9', 121:'f10', 122:'f11', 123:'f12' };
var itemColors=['#FFFFFF','#E5E4E4','#D9D8D8','#C0BDBD','#A7A4A4','#8E8A8B','#827E7F','#767173','#5C585A','#000000','#FEFCDF','#FEF4C4','#FEED9B','#FEE573','#FFED43','#F6CC0B','#E0B800','#C9A601','#AD8E00','#8C7301','#FFDED3','#FFC4B0','#FF9D7D','#FF7A4E','#FF6600','#E95D00','#D15502','#BA4B01','#A44201','#8D3901','#FFD2D0','#FFBAB7','#FE9A95','#FF7A73','#FF483F','#FE2419','#F10B00','#D40A00','#940000','#6D201B','#FFDAED','#FFB7DC','#FFA1D1','#FF84C3','#FF57AC','#FD1289','#EC0078','#D6006D','#BB005F','#9B014F','#FCD6FE','#FBBCFF','#F9A1FE','#F784FE','#F564FE','#F546FF','#F328FF','#D801E5','#C001CB','#8F0197','#E2F0FE','#C7E2FE','#ADD5FE','#92C7FE','#6EB5FF','#48A2FF','#2690FE','#0162F4','#013ADD','#0021B0','#D3FDFF','#ACFAFD','#7CFAFF','#4AF7FE','#1DE6FE','#01DEFF','#00CDEC','#01B6DE','#00A0C2','#0084A0','#EDFFCF','#DFFEAA','#D1FD88','#BEFA5A','#A8F32A','#8FD80A','#79C101','#3FA701','#307F00','#156200','#D4C89F','#DAAD88','#C49578','#C2877E','#AC8295','#C0A5C4','#969AC2','#92B7D7','#80ADAF','#9CA53B'];
var arrBlocktag=[{n:'p',t:'Paragraph'},{n:'h1',t:'Heading 1'},{n:'h2',t:'Heading 2'},{n:'h3',t:'Heading 3'},{n:'h4',t:'Heading 4'},{n:'h5',t:'Heading 5'},{n:'h6',t:'Heading 6'},{n:'pre',t:'Preformatted'},{n:'address',t:'Address'}];
var arrFontname=['Arial','Arial Narrow','Arial Black','Comic Sans MS','Courier New','System','Times New Roman','Tahoma','Verdana'];
var arrFontsize=[{n:'xx-small',wkn:'x-small',s:'8pt',t:'xx-small'},{n:'x-small',wkn:'small',s:'10pt',t:'x-small'},{n:'small',wkn:'medium',s:'12pt',t:'small'},{n:'medium',wkn:'large',s:'14pt',t:'medium'},{n:'large',wkn:'x-large',s:'18pt',t:'large'},{n:'x-large',wkn:'xx-large',s:'24pt',t:'x-large'},{n:'xx-large',wkn:'-webkit-xxx-large',s:'36pt',t:'xx-large'}];
var menuAlign=[{s:'Align left',v:'justifyleft',t:'Align left'},{s:'Align center',v:'justifycenter',t:'Align center'},{s:'Align right',v:'justifyright',t:'Align right'},{s:'Align full',v:'justifyfull',t:'Align full'}],menuList=[{s:'Ordered list',v:'insertOrderedList',t:'Ordered list'},{s:'Unordered list',v:'insertUnorderedList',t:'Unordered list'}];
var htmlPastetext='<div>Use Ctrl+V on your keyboard to paste the text.</div><div><textarea id="xhEdtPastetextValue" wrap="soft" spellcheck="false" style="width:300px;height:100px;" /></div><div style="text-align:right;"><input type="button" id="xhEdtSave" value="OK" /></div>';
var htmlLink='<div>Link URL: <input type="text" id="xhEdtLinkHref" value="http://" class="text" /></div><div>Target:&nbsp;&nbsp; <select id="xhEdtLinkTarget"><option selected="selected" value="">Default</option><option value="_blank">New window</option><option value="_self">Same window</option><option value="_parent">Parent window</option></select></div><div style="text-align:right;"><input type="button" id="xhEdtSave" value="Ok" /></div>';
var htmlImg='<div>Img URL:&nbsp; <input type="text" id="xhEdtImgSrc" value="http://" class="text" /></div><div>Alt text: <input type="text" id="xhEdtImgAlt" /></div><div>Alignment:<select id="xhEdtImgAlign"><option selected="selected" value="">Default</option><option value="left">Left</option><option value="right">Right</option><option value="top">Top</option><option value="middle">Middle</option><option value="baseline">Baseline</option><option value="bottom">Bottom</option></select></div><div>Dimension:<input type="text" id="xhEdtImgWidth" style="width:40px;" /> x <input type="text" id="xhEdtImgHeight" style="width:40px;" /></div><div>Border:&nbsp;&nbsp;&nbsp;<input type="text" id="xhEdtImgBorder" style="width:40px;" /></div><div>Hspace:&nbsp;&nbsp;&nbsp;<input type="text" id="xhEdtImgHspace" style="width:40px;" /> Vspace:<input type="text" id="xhEdtImgVspace" style="width:40px;" /></div><div style="text-align:right;"><input type="button" id="xhEdtSave" value="OK" /></div>';
var htmlFlash='<div>Flash URL:<input type="text" id="xhEdtFlashSrc" value="http://" class="text" /></div><div>Dimension:<input type="text" id="xhEdtFlashWidth" style="width:40px;" value="480" /> x <input type="text" id="xhEdtFlashHeight" style="width:40px;" value="400" /></div><div style="text-align:right;"><input type="button" id="xhEdtSave" value="OK" /></div>';
var htmlMedia='<div>Media URL:<input type="text" id="xhEdtMediaSrc" value="http://" class="text" /></div><div>Dimension:<input type="text" id="xhEdtMediaWidth" style="width:40px;" value="480" /> x <input type="text" id="xhEdtMediaHeight" style="width:40px;" value="400" /></div><div style="text-align:right;"><input type="button" id="xhEdtSave" value="OK" /></div>';
var htmlTable='<div>Rows&Cols:&nbsp;&nbsp;<input type="text" id="xhEdtTableRows" style="width:40px;" value="3" /> x <input type="text" id="xhEdtTableColumns" style="width:40px;" value="2" /></div><div>Headers:&nbsp;&nbsp;&nbsp;&nbsp;<select id="xhEdtTableHeaders"><option selected="selected" value="">None</option><option value="row">First row</option><option value="col">First column</option><option value="both">Both</option></select></div><div>Dimension:&nbsp;&nbsp;<input type="text" id="xhEdtTableWidth" style="width:40px;" value="200" /> x <input type="text" id="xhEdtTableHeight" style="width:40px;" value="" /></div><div>Border:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="xhEdtTableBorder" style="width:40px;" value="1" /></div><div>CellSpacing:<input type="text" id="xhEdtTableCellSpacing" style="width:40px;" value="1" /> CellPadding:<input type="text" id="xhEdtTableCellPadding" style="width:40px;" value="1" /></div><div>Align:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id="xhEdtTableAlign"><option selected="selected" value="">Default</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div><div>Caption:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="xhEdtTableCaption" /></div><div style="text-align:right;"><input type="button" id="xhEdtSave" value="OK" /></div>';
var htmlAbout='<div style="width:200px;word-wrap:break-word;word-break:break-all;"><p><span style="font-size:20px;color:#1997DF;">xhEditor</span><br />ver: v0.9.9 build 20091123</p><p>xhEditor is a simple,small,fast WYSWYG(What You See What You Get) XHTML editor based by jQuery.</p><p><a href="http://xheditor.com/" target="_blank">http://xheditor.com/</a></p></div>';
var itemEmots=[{t:'Big grin',s:'biggrin.gif'},{t:'Smile',s:'smile.gif'},{t:'Titter',s:'titter.gif'},{t:'Lol',s:'lol.gif'},{t:'Call',s:'call.gif'},{t:'Victory',s:'victory.gif'},{t:'Shy',s:'shy.gif'},{t:'Handshake',s:'handshake.gif'},{t:'Kiss',s:'kiss.gif'},{t:'Sad',s:'sad.gif'},{t:'Cry',s:'cry.gif'},{t:'Huffy',s:'huffy.gif'},{t:'Mad',s:'mad.gif'},{t:'Tongue',s:'tongue.gif'},{t:'Sweat',s:'sweat.gif'},{t:'Shocked',s:'shocked.gif'},{t:'Time',s:'time.gif'},{t:'Hug',s:'hug.gif'}];
var arrTools={GStart:{},GEnd:{},Separator:{},Cut:{t:'Cut (Ctrl+X)'},Copy:{t:'Copy (Ctrl+C)'},Paste:{t:'Paste (Ctrl+V)'},Pastetext:{t:'Paste as plain text'},Blocktag:{t:'Block tag'},Fontface:{t:'Font family'},FontSize:{t:'Font size'},Bold:{t:'Bold (Ctrl+B)',s:'Ctrl+B'},Italic:{t:'Italic (Ctrl+I)',s:'Ctrl+I'},Underline:{t:'Underline (Ctrl+U)',s:'Ctrl+U'},Strikethrough:{t:'Strikethrough (Ctrl+S)',s:'Ctrl+S'},FontColor:{t:'Select text color'},BackColor:{t:'Select background color'},Removeformat:{t:'Remove formatting'},Align:{t:'Align'},List:{t:'List'},Outdent:{t:'Outdent (Shift+Tab)',s:'Shift+Tab'},Indent:{t:'Indent (Tab)',s:'Tab'},Link:{t:'Insert/edit link'},Unlink:{t:'Unlink'},Img:{t:'Insert/edit image'},Flash:{t:'Insert/edit flash'},Media:{t:'Insert/edit media'},Emot:{t:'Emotions'},Table:{t:'Insert a new table'},Source:{t:'Edit source code'},Preview:{t:'Preview'},Fullscreen:{t:'Toggle fullscreen (Esc)',s:'Esc'},About:{t:'About xhEditor'}};
var toolsThemes={
	mini:'GStart,Bold,Italic,Underline,Strikethrough,GEnd,Separator,GStart,Align,List,GEnd,Separator,GStart,Link,Img,About,GEnd',
	simple:'GStart,Blocktag,Fontface,FontSize,Bold,Italic,Underline,Strikethrough,FontColor,BackColor,GEnd,Separator,GStart,Align,List,Outdent,Indent,GEnd,Separator,GStart,Link,Img,Emot,About,GEnd',
	full:'GStart,Cut,Copy,Paste,Pastetext,GEnd,Separator,GStart,Blocktag,Fontface,FontSize,Bold,Italic,Underline,Strikethrough,FontColor,BackColor,Removeformat,GEnd,Separator,GStart,Align,List,Outdent,Indent,GEnd,Separator,GStart,Link,Unlink,Img,Flash,Media,Emot,Table,GEnd,Separator,GStart,Source,Preview,Fullscreen,About,GEnd'};
$.xheditor=function(textarea,options)
{
	var defaults={skin:'default',tools:'full',internalScript:false,inlineScript:false,internalStyle:false,inlineStyle:true,showBlocktag:false,forcePtag:true,keepValue:true,upLinkExt:"zip,rar,txt",upImgExt:"jpg,jpeg,gif,png",upFlashExt:"swf",upMediaExt:"avi",modalWidth:350,modalHeight:220,modalTitle:true,baseUrl:baseURL,attachLinkText:'Click to open link'};
	var _this=this,_text=textarea,_jText=$(_text),_jForm=_jText.closest('form'),_jTools,_win,_jWin,_doc,_jDoc;
	var bookmark;
	var bInit=false,bSource=false,bPreview=false,bFullscreen=false,bReadonly=false,bShowBlocktag=false,sLayoutStyle='',ev;
	var toolbarHeight=0,editHeight=0;
	this.settings=$.extend({},defaults,options );
	if(_this.settings.plugins)
	{
		arrTools=$.extend({},arrTools,_this.settings.plugins);
	}
	if(_this.settings.tools.match(/^\s*(mini|simple|full)\s*$/i))
	{
		_this.settings.tools=$.trim(_this.settings.tools);
		_this.settings.tools=toolsThemes[_this.settings.tools];
	}
	if(!_this.settings.tools.match(/(^|,)\s*About\s*(,|$)/i))_this.settings.tools+=',About';
	_this.settings.tools=_this.settings.tools.split(',');
	
	//基本控件名
	var idCSS='xhEdtCSS_'+_this.settings.skin,idContainer='xhEdt'+xCount+'_container',idTools='xhEdt'+xCount+'_Tool',idIframeArea='xhEdt'+xCount+'_iframearea',idIframe='xhEdt'+xCount+'_iframe';
	var bodyClass='',skinPath=jsURL+'xheditor_skin/'+_this.settings.skin+'/';
	bShowBlocktag=_this.settings.showBlocktag;
	if(bShowBlocktag)bodyClass+=' showBlocktag';
	
	var arrShortCuts=[];
	
	this.init=function()
	{
		//加载样式表
		if($('#'+idCSS).size()==0)$('head').append('<link id="'+idCSS+'" rel="stylesheet" type="text/css" href="'+skinPath+'ui.css" />');
		//初始化编辑器
		var cw = _this.settings.width || _text.style.width || _jText.width();
		editHeight = _this.settings.height || _jText.height();
		if(/^[0-9\.]+$/i.test(''+cw))cw+='px';
		
		//工具栏内容初始化
		var sToolHtml='',tool,rcount=1;
		$.each(_this.settings.tools,function(i,n)
		{
			tool=arrTools[n];
			if(n=='GStart')sToolHtml+='<span class="xhEdtGStart"/>';
			else if(n=='GEnd')sToolHtml+='<span class="xhEdtGEnd"/>';
			else if(n=='Separator')sToolHtml+='<span class="xhEdtSeparator"/>';
			else if(n=='BtnBr'){sToolHtml+='<br />';rcount++;}
			else
			{
				var cn;
				if(tool.c)cn=tool.c;
				else cn='xhEdtIcon xhEdtBtn'+n;
				sToolHtml+='<span><a href="javascript:;" title="'+tool.t+'" name="'+n+'" class="xhEdtButton xhEdtEnabled"><span class="'+cn+'" /></a></span>';
				if(tool.s)_this.addShortCut(tool.s,n);
			}
		});
		toolbarHeight=rcount*24+2;
		sToolHtml+='<br />';
		
		if((editHeight-toolbarHeight)<16)editHeight=toolbarHeight+16;

		_jText.after($('<span id="'+idContainer+'" class="xhEdt_'+_this.settings.skin+'" style="display:none"><table cellspacing="0" cellpadding="0" class="xhEdtLayout" style="width:'+cw+';height:'+editHeight+'px;"><tbody><tr><td id="'+idTools+'" class="xhEdtTool" style="height:'+toolbarHeight+'px"></td></tr><tr><td id="'+idIframeArea+'" class="xhEdtIframeArea" style="height:'+(editHeight-toolbarHeight)+'px"><iframe frameborder="0" id="'+idIframe+'" src="javascript:;" style="width:100%;"></iframe></td></tr></tbody></table></span>'));
		var iframeHTML='<html><head><base target="_blank"'+(_this.settings.baseUrl!=baseURL?' href="'+_this.settings.baseUrl+'"':'')+' /><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/><link rel="stylesheet" href="'+skinPath+'iframe.css"/>';
		if(_this.settings.loadCSS)iframeHTML+='<link rel="stylesheet" href="'+_this.settings.loadCSS+'"/>';
		iframeHTML+='</head><body spellcheck="false" dir="ltr" class="editMode'+bodyClass+'"></body></html>';
		
		_win=$('#'+idIframe)[0].contentWindow;
		_jWin=$(_win);
		try{
			_doc = _win.document;_jDoc=$(_doc);
			_doc.open();
			_doc.write(iframeHTML);
			_doc.close();
			if(isIE)_doc.body.contentEditable='true';
			else _doc.designMode = 'On';
		}catch(e){}
		setTimeout(_this.setOpts,300);
		_this.setSource();
		_win.setInterval=null;
		
		//添加工具栏
		_jTools=$('#'+idTools).append(sToolHtml);
		_jTools.find('.xhEdtButton').click(function(event)
		{
			_this.hidePanel();
			_this.focus();
			ev=event;
			var aButton=$(this);
			if(aButton.is('.xhEdtEnabled'))_this.exec(aButton.attr('name'));
			ev.stopPropagation();
		}).mousedown(function(){return false;});
		//初始化面板
		_jPanel=$('#xhEdtPanel');
		_jCntLine=$('#xhEdtCntLine');
		if(_jPanel.size()==0)
		{
			_jPanel=$('<div id="xhEdtPanel"></div>').mousedown(function(ev){ev.stopPropagation()});
			_jCntLine=$('<div id="xhEdtCntLine"><img src="'+skinPath+'img/spacer.gif" /></div>');
			$(document.body).append(_jPanel).append(_jCntLine);
		}
		$(document).mousedown(_this.hidePanel);
		_jDoc.mousedown(_this.hidePanel);
		
		//切换显示区域
		$('#'+idContainer).show();
		_jText.hide();
		_this.bind();
		xCount++;
		bInit=true;
		if(_this.settings.fullscreen)_this.toggleFullscreen();
		if(_this.settings.readonly)_this.toggleReadonly(true);
		else if(_this.settings.sourceMode)setTimeout(_this.toggleSource,20);
		return true;
	}
	this.remove=function()
	{
		_this.unbind();
		$('#'+idContainer).remove();
		_jText.show();
		bInit=false;
	}
	this.bind=function()
	{
		_jText.focus(_this.focus);
		_jForm.submit(_this.getSource).bind('reset', _this.setSource);
		var jpWin=$(window);
		jpWin.unload(_this.getSource).bind('beforeunload', _this.getSource);
		jpWin.resize(_this.fixFullHeight);
		_jWin.blur(_this.getSource).focus(function(){if(_this.settings.focus)_this.settings.focus();}).blur(function(){if(_this.settings.blur)_this.settings.blur();});
		if(isSafari)_jWin.click(_this.fixAppleSel);
		_jDoc.keydown(_this.checkShortCut).keydown(_this.forcePtag);
	}
	this.unbind=function()
	{
		_jText.unbind('focus',_this.focus);
		_jForm.unbind('submit',_this.getSource).unbind('reset', _this.setSource);
		var jpWin=$(window);
		jpWin.unbind('unload',_this.getSource).unbind('beforeunload', _this.getSource);
		jpWin.unbind('resize',_this.fixFullHeight);
		_jWin.unbind('blur',_this.getSource);
		if(isSafari)_jWin.unbind('click',_this.fixAppleSel);
		_jDoc.unbind('keydown',_this.checkShortCut).unbind('keydown',_this.forcePtag);
	}
	this.setCSS=function(css)
	{
		try{_this._exec('styleWithCSS',css);}
		catch(e)
		{try{_this._exec('useCSS',!css);}catch(e){}}
	}
	this.setOpts=function()
	{
		if(bInit&&!bPreview&&!bSource)
		{
			_this.setCSS(false);
			try{_this._exec('enableObjectResizing',true);}catch(e){}
			try{_this._exec('enableInlineTableEditing',false);}catch(e){}
			if(isIE)try{_this._exec('BackgroundImageCache',true);}catch(e){}
		}
	}
	this.forcePtag=function(ev)
	{
		if(bSource||bPreview||ev.keyCode!=13||ev.shiftKey||ev.ctrlKey||ev.altKey)return true;
		var pNode=_this.getParent('p,h1,h2,h3,h4,h5,h6,pre,address,div,li');
		if(_this.settings.forcePtag){if(pNode.size()==0)_this._exec('formatblock','<p>');}
		else
		{
			_this.pasteHTML('<br />');
			return false;
		}
	}
	this.fixFullHeight=function()
	{		
		if(!isMozilla&&!isSafari)
		{
			var jArea=$('#'+idIframeArea);
			jArea.height('100%');
			if(bFullscreen)jArea.height((jArea.height()-toolbarHeight)+'px');
			if(isIE)_jTools.hide().show();
		}
	}
	this.fixAppleSel=function(e)
	{
		e=e.target;
		if(e.tagName.match(/(img|embed)/i))
		{
			var sel=_this.getSel(),rng=_doc.createRange();
			rng.selectNode(e);
			sel.removeAllRanges();
			sel.addRange(rng);
		}
	}
	this.focus=function()
	{
		if(!bSource)_jWin.focus();
		else $('#sourceCode',_doc).focus();
		if(isIE&&!bSource&&bookmark){bookmark.select();bookmark=null;}
		return false;
	}
	this.getSel=function()
	{
		return _win.getSelection ? _win.getSelection() : _doc.selection;
	}
	this.getRng=function()
	{
		var sel=_this.getSel(),rng;
		try{
			rng = sel.rangeCount > 0 ? sel.getRangeAt(0) : (sel.createRange ? sel.createRange() : _doc.createRange());
		}catch (ex){}
		if(!rng)rng = isIE ? _doc.body.createTextRange() : _doc.createRange();	
		return rng;
	}
	this.getParent=function(tag)
	{
		var rng=_this.getRng(),p;
		if(!isIE)
		{
			p = rng.commonAncestorContainer;
			if(!rng.collapsed)if(rng.startContainer == rng.endContainer&&rng.startOffset - rng.endOffset < 2&&rng.startContainer.hasChildNodes())p = rng.startContainer.childNodes[rng.startOffset];
		}
		else p=rng.item?rng.item(0):rng.parentElement();
		tag=tag?tag:'*';p=$(p);
		if(!p.is(tag))p=$(p).closest(tag);
		return p;
	}
	this.getSelect=function(format)
	{
		var sel=_this.getSel(),rng=_this.getRng(),isCollapsed=true;
		if (!rng || rng.item)isCollapsed=false
		else isCollapsed=!sel || rng.boundingWidth == 0 || rng.collapsed;
		if(format=='text')return isCollapsed ? '' : (rng.text || (sel.toString ? sel.toString() : ''));
		var sHtml;
		if(rng.cloneContents)
		{
			var tmp=$('<div></div>'),c;
			c = rng.cloneContents();
			if(c)tmp.append(c);
			sHtml=tmp.html();
		}
		else if(is(rng.item))sHtml=rng.item(0).outerHTML;
		else if(is(rng.htmlText))sHtml=rng.htmlText;
		else sHtml=rng.toString();
		sHtml=_this.processHTML(sHtml,'read');
		sHtml=_this.cleanHTML(sHtml);
		sHtml=_this.formatXHTML(sHtml);
		return sHtml;
	}
	function is(o,t)
	{
		var n = typeof(o);
		if (!t)return n != 'undefined';
		if (t == 'array' && (o.hasOwnProperty && o instanceof Array))return true;
		return n == t;
	}
	this.pasteHTML=function(sHtml)
	{
		if(bSource||bPreview)return false;
		_this.focus();
		sHtml=_this.processHTML(sHtml,'write');
		var rng=_this.getRng();
		sHtml+='<span id="__caret" />';
		if(rng.insertNode)
		{
			rng.deleteContents();
			rng.insertNode(rng.createContextualFragment(sHtml));
		}
		else rng.pasteHTML(sHtml);
		var jc=$('#__caret',_doc),c=jc[0],sel=_this.getSel();
		if(isIE)
		{
			rng.moveToElementText(c);
			rng.select();
		}
		else
		{
			rng.selectNode(c); 
			sel.removeAllRanges();
			sel.addRange(rng);
		}
		jc.remove();
	}
	this.pasteText=function(text)
	{
		if(!text)text='';
		text=_this.domEncode(text);
		text = text.replace(/\r?\n/g, '<br>');
		_this.pasteHTML(text);
	}
	this.appendHTML=function(sHtml)
	{
		if(bSource||bPreview)return false;
		_this.focus();
		sHtml=_this.processHTML(sHtml,'write');
		$(_doc.body).append(sHtml);
	}
	this.domEncode=function(str)
	{
		if(str)
		{
			var filter={'<':'&lt;','>':'&gt;'};
			str=str.replace(/[<>]/g,function(c){return filter[c];});
		}
		return str;
	}
	this.setSource=function(sHtml)
	{
		setTimeout(function(){_this._setSource(sHtml);},10);
	}
	this._setSource=function(sHtml)
	{
		bookmark=null;
		if(typeof sHtml!='string'&&sHtml!='')sHtml=_jText.val();
		if(bSource)$('#sourceCode',_doc).val(sHtml);
		else
		{
			if(_this.settings.beforeSetSource)sHtml=_this.settings.beforeSetSource(sHtml);
			sHtml=_this.formatXHTML(sHtml);
			$(_doc.body)[0].innerHTML=_this.processHTML(sHtml,'write');
		}
	}
	this.processHTML=function(sHtml,mode)
	{
		var appleClass=' class="Apple-style-span"';
		if(mode=='write')
		{//write
			if(_this.settings.keepValue)//保存属性值:src,href
			{
				function saveValue(all,tag,attrs,n,q,v,e)
				{
					attrs+=' _xhe_'+n+'="'+v+'"'
					return '<'+tag+attrs+' '+e+'>';
				}
				sHtml = sHtml.replace(/<(\w+(?:\:\w+)?)(\s+[^>]*?(src|href)\s*=\s*(['"]?)\s*([^'"\s]*)\s*\4[^\/>]*?)(\/?)>/ig,saveValue);
			}
			sHtml = sHtml.replace(/<(\/?)del( [^>]+)?>/ig,'<$1strike$2>');//编辑状态统一转为strike
			if(isMozilla)
			{
				sHtml = sHtml.replace(/<(\/?)strong( [^>]+)?>/ig,'<$1b$2>');
				sHtml = sHtml.replace(/<(\/?)em( [^>]+)?>/ig,'<$1i$2>');	
			}
			else if(isSafari)
			{
				sHtml = sHtml.replace(/("|;)\s*font-size\s*:\s*([a-z-]+)(;?)/ig,function(all,pre,sname,aft){
					var t,s;
					for(var i=0;i<arrFontsize.length;i++)
					{
						t=arrFontsize[i];
						if(sname==t.n){s=t.wkn;break;}
					}
					return pre+'font-size:'+s+aft;
				});
				sHtml = sHtml.replace(/<strong( [^>]+)?>/ig,'<span'+appleClass+' style="font-weight: bold;"$1>');
				sHtml = sHtml.replace(/<em( [^>]+)?>/ig,'<span'+appleClass+' style="font-style: italic;"$1>');
				sHtml = sHtml.replace(/<u( [^>]+)?>/ig,'<span'+appleClass+' style="text-decoration: underline;"$1>');
				sHtml = sHtml.replace(/<strike( [^>]+)?>/ig,'<span'+appleClass+' style="text-decoration: line-through;"$1>');
				sHtml = sHtml.replace(/<\/(strong|em|u|strike)>/ig,'</span>');
				sHtml = sHtml.replace(/<span((?:\s+[^>]+)?\s+style="([^"]*;)*\s*(font-family|font-size|color|background-color)\s*:\s*[^;"]+\s*;?"[^>]*)>/ig,'<span'+appleClass+'$1>');
			}
			else if(isIE)
			{
				sHtml = sHtml.replace(/&apos;/ig, '&#39;');
				sHtml = sHtml.replace(/\s+(disabled|checked|readonly|selected)\s*=\s*[\"\']?(false|0)[\"\']?/ig, '');
			}
			sHtml = sHtml.replace(/<a(\s+[^>]+)?\/>/,'<a$1></a>');
			
			if(!isSafari)
			{
				//style转font
				function style2font(all,tag,style,content)
				{
					var attrs='',f,s1,s2,c;
					f=style.match(/font-family\s*:\s*([^;"]+)/i);
					if(f)attrs+=' face="'+f[1]+'"';
					s1=style.match(/font-size\s*:\s*([^;"]+)/i);
					if(s1)
					{
						s1=s1[1].toLowerCase();
						for(var j=0;j<arrFontsize.length;j++)if(s1==arrFontsize[j].n||s1==arrFontsize[j].s){s2=j+1;break;}
						if(s2)
						{
							attrs+=' size="'+s2+'"';
							style=style.replace(/(^|;)(\s*font-size\s*:\s*[^;"]+;?)+/ig,'$1');
						}
					}
					c=style.match(/(?:^|[\s;])color\s*:\s*([^;"]+)/i);
					if(c)
					{
						var rgb;
						if(rgb=c[1].match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i))
						{
							rgb=Number(rgb[1])*65536+Number(rgb[2])*256+Number(rgb[3]);
							rgb=rgb.toString(16);
							while(rgb.length<6)rgb='0'+rgb;
							c[1]='#'+rgb;
						}
						else if(rgb=c[1].match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i))c[1]='#'+rgb[1]+rgb[1]+rgb[2]+rgb[2]+rgb[3]+rgb[3];
						attrs+=' color="'+c[1]+'"';
					}
					style=style.replace(/(^|;)(\s*(font-family|color)\s*:\s*[^;"]+;?)+/ig,'$1');
					if(attrs!='')
					{
						if(style)attrs+=' style="'+style+'"';
						return '<font'+attrs+'>'+content+"</font>";
					}
					else return all;
				}
				sHtml = sHtml.replace(/<(span)(?:\s+[^>]+)? style="((?:[^"]*?;)*\s*(?:font-family|font-size|color)\s*:[^"]*)"(?: [^>]+)?>(((?!<\1(\s+[^>]+)?>)[\s\S])*?)<\/\1>/ig,style2font);//最里层
				sHtml = sHtml.replace(/<(span)(?:\s+[^>]+)? style="((?:[^"]*?;)*\s*(?:font-family|font-size|color)\s*:[^"]*)"(?: [^>]+)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?)<\/\1>/ig,style2font);//第2层
				sHtml = sHtml.replace(/<(span)(?:\s+[^>]+)? style="((?:[^"]*?;)*\s*(?:font-family|font-size|color)\s*:[^"]*)"(?: [^>]+)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig,style2font);//第3层
			}
		}
		else
		{//read
			if(_this.settings.keepValue)//恢复属性值
			{
				function restoreValue(all,tag,attrs,n,q,v)
				{
					attrs=attrs.replace(new RegExp('\\s+'+n+'\\s*=\\s*(["\']?)[^"\'\\s]*\\1','ig'),' '+n+'="'+v+'"');
					return '<'+tag+attrs+'>';
				}
				sHtml = sHtml.replace(/<(\w+(?:\:\w+)?)(\s+[^>]*?_xhe_(src|href)\s*=\s*(['"]?)\s*([^'"\s]*)\s*\4[^>]*)>/ig,restoreValue);
			}
			if(isSafari)
			{
				sHtml = sHtml.replace(/("|;)\s*font-size\s*:\s*([a-z-]+)(;?)/ig,function(all,pre,sname,aft){
					var t,s;
					for(var i=0;i<arrFontsize.length;i++)
					{
						t=arrFontsize[i];
						if(sname==t.wkn){s=t.n;break;}
					}
					return pre+'font-size:'+s+aft;
				});
				var arrAppleSpan=[{r:/font-weight:\sbold/ig,t:'strong'},{r:/font-style:\sitalic/ig,t:'em'},{r:/text-decoration:\sunderline/ig,t:'u'},{r:/text-decoration:\sline-through/ig,t:'strike'}];
				function replaceAppleSpan(all,tag,attr1,attr2,content)
				{
					var attr=attr1+attr2,newTag='';
					for(var i=0;i<arrAppleSpan.length;i++)
					{
						if(attr.match(arrAppleSpan[i].r))
						{
							newTag=arrAppleSpan[i].t;
							break;
						}
					}
					if(newTag)return '<'+newTag+'>'+content+'</'+newTag+'>';
					else return all;					
				}
				sHtml = sHtml.replace(/<(span)(\s+[^>]+|)? class="Apple-style-span"(\s+[^>]+|)?>(((?!<\1(\s+[^>]+)?>)[\s\S])*?)<\/\1>/ig,replaceAppleSpan);//最里层
				sHtml = sHtml.replace(/<(span)(\s+[^>]+|)? class="Apple-style-span"(\s+[^>]+|)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?)<\/\1>/ig,replaceAppleSpan);//第2层
				sHtml = sHtml.replace(/<(span)(\s+[^>]+|)? class="Apple-style-span"(\s+[^>]+|)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig,replaceAppleSpan);//第3层
			}
			sHtml = sHtml.replace(/(\s+)(?:_xhe_|_moz_|_webkit_)[^=]+?\s*=\s*(["']?)[^"'\s>]*\2\s*/ig,'$1');
			sHtml = sHtml.replace(/<(\w+[^>]*?)\s+class="?(?:apple|webkit)\-[^ >]*([^>]*?)>/ig, "<$1$2>");
		}
		
		return sHtml;
	}
	this.getSource=function()
	{
		var sHtml;
		if(bSource)sHtml=$('#sourceCode',_doc).val();
		else
		{
			sHtml=_this.processHTML($(_doc.body).html(),'read');
			sHtml=_this.cleanWord(sHtml);
			sHtml=_this.cleanHTML(sHtml);
			sHtml=_this.formatXHTML(sHtml);
			if(_this.settings.beforeGetSource)sHtml=_this.settings.beforeGetSource(sHtml);
		}
		_jText.val(sHtml);
		return sHtml;
	}	
	this.cleanWord=function(sHtml)
	{
		if(sHtml.match(/mso-|MsoNormal/i))
		{
			//区块清理
			sHtml = sHtml.replace(/<!--([\s\S]*?)-->|<style(\s+[^>]+)?>[\s\S]*?<\/style>/ig, "");
			sHtml = sHtml.replace(/<\/?\w+:[^>]*>/ig, "");
			
			//属性清理
			sHtml = sHtml.replace(/<(\w+[^>]*?)\s+class="?mso[^ >]*([^>]*?)>/ig, "<$1$2>");//删除所有mso开头的样式
			sHtml = sHtml.replace(/<(\w+[^>]*?)\s+lang="?[^ \>]*([^>]*?)>/ig, "<$1$2>");//删除lang属性
			sHtml = sHtml.replace(/<(\w+[^>]*?)\s+align="?left"?([^>]*?)>/ig, "<$1$2>");//取消align=left
			//sHtml = sHtml.replace(/<(\w+[^>]*?) style="?[^">]+"?([^>]*?)>/ig, "<$1$2>");//删除所有style
			
			//样式清理
			sHtml = sHtml.replace(/\s*mso-[^:]+:[^;"]+;?\s*/ig,'');
			sHtml = sHtml.replace(/\s*margin: 0cm 0cm 0pt\s*;\s*/ig,'');
			sHtml = sHtml.replace(/\s*margin: 0cm 0cm 0pt\s*"/ig,'"');
			sHtml = sHtml.replace(/\s*text-align:[^;"]+;?\s*/ig,'');
			sHtml = sHtml.replace(/\s*font-variant:[^;"]+;?\s*/ig,'');
			sHtml = sHtml.replace(/<(\w+[^>]*?)\s+style="?"?(\s+|>)/ig,'<$1$2');//空style
			sHtml = sHtml.replace(/<(\w+[^>]*?)\s+style="?\s*([^">]+)\s*"?([^>]*?)>/ig, function(all,attr1,styles,attr2){return '<'+attr1+' style="'+styles.replace(/&quot;/ig,'')+'"'+attr2+'>';});//清理style里的&quot;
		}
		return sHtml;
	}
	this.cleanHTML=function(sHtml)
	{
		sHtml = sHtml.replace(/<\??xml(:\w+)?( [^>]+)?>([\s\S]*?<\/xml>)?/ig, "");
		sHtml = sHtml.replace(/<(meta|link)(\s+[^>]+)?>/ig, "");
		if(!_this.settings.internalScript)sHtml = sHtml.replace(/<(script)(\s+[^>]+)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig, '');
		if(!_this.settings.inlineScript)sHtml=sHtml.replace(/<(\w+)(\s+[^>]+?)?\s+on(?:click|dblclick|mousedown|mouseup|mousemove|mouseover|mouseout|mouseenter|mouseleave|keydown|keypress|keyup|change|select|submit|reset|blur|focus|load|unload)\s*=\s*(["']?)[^"']*?\3(\s+[^>]+?)?>/ig,'<$1$2$4>');
		if(!_this.settings.internalStyle)sHtml = sHtml.replace(/<(style)(\s+[^>]+)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig, '');
		if(!_this.settings.inlineStyle)sHtml=sHtml.replace(/<(\w+)(\s+[^>]+?)?\s+style\s*=\s*(["']?)[^"']*?\3(\s+[^>]+?)?>/ig,'<$1$2$4>');
		
		for(var i=0;i<3;i++)sHtml=sHtml.replace(/<(strong|b|u|del|strike|s|em|i)(?:\s+[^>]+)?>(((?!<\1(\s+[^>]+)?>)([ \t\r\n]|&nbsp;))*?)<\/\1>/ig,function(all,tag,content){
				if(content.match(/&nbsp;/i))return content.replace(/ +/g,'');
				else return '';
		});//内部空白的标签: <span|b|u|s|i> &nbsp;</b>
		sHtml=sHtml.replace(/<\/(strong|b|u|strike|em|i)>((?:\s|<br\/?>|&nbsp;)*?)<\1>/ig,'$2');//连续相同标签

		sHtml = sHtml.replace(/<(p|div)(?:\s+[^>]+)?>(((?!<\1(?: [^>]+)?>)[\s\S])+?)<\/\1>/ig,function(all,tag,content){//p内空白显示
			var temp=content.replace(/<\/?(span|strong|b|u|strike|em|i)(\s+[^>]+)?>/ig,'');
			temp=temp.replace(/([ \t\r\n]|&nbsp;)+/ig,'');
			if(temp!='')return all;
			else return '<'+tag+'></'+tag+'>';
			});
		
		sHtml=sHtml.replace(/^(\r?\n)+/g,'');//开头换行
		sHtml=sHtml.replace(/(\r?\n)+/g,"\r\n");//多行变一行
		sHtml=sHtml.replace(/\s+$/g,'');//结尾换行
		
		return sHtml;
	}
	this.formatXHTML=function(sHtml)
	{//HTML Parser By John Resig (ejohn.org)
		var emptyTags = makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");	
		var blockTags = makeMap("address,applet,blockquote,button,center,dd,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");
		var inlineTags = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,del,strong,sub,sup,textarea,tt,u,var");
		var closeSelfTags = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
		var fillAttrsTags = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
		var specialTags = makeMap("script,style");
		var tagReplac={'b':'strong','i':'em','s':'del','strike':'del'};
		var startTag = /^<(\w+(?:\:\w+)?)((?:\s+[\w-\:]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
		var endTag = /^<\/(\w+(?:\:\w+)?)[^>]*>/;
		var attr = /([\w-(?:\:\w+)?]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
		var index,skip=0,stack=[],last=sHtml,text='',results=[];
		stack.last = function(){return this[ this.length - 1 ];};
		while(sHtml)
		{
			if(!stack.last()||!specialTags[stack.last()])
			{
				skip=0;
				if(sHtml.indexOf("<!") == 0 )
				{//注释标签
					match = sHtml.match(/^<!(?:--)?(.*?)(?:--)?>/);
					if(match)
					{
						skip = match[0].length;
						results.push('<!--'+match[1]+'-->');
					}
					else skip=1;
				}
				else if(sHtml.indexOf("</")== 0)
				{//结束标签
					match = sHtml.match( endTag );
					if(match)
					{
						skip = match[0].length;
						match[0].replace( endTag, parseEndTag );
					}
					else skip=1;
				}
				else if(sHtml.indexOf("<")==0)
				{//开始标签
					match = sHtml.match( startTag );
					if(match)
					{
						skip = match[0].length;
						match[0].replace( startTag, parseStartTag );
					}
					else skip=1;
				}
				if(skip==1)results.push('&lt;');
				if(skip>0)sHtml=sHtml.substring(skip)
				else
				{
					index = sHtml.search(/<[^<>]+>/);
					text = index < 0 ? sHtml : sHtml.substring( 0, index );
					sHtml = index < 0 ? "" : sHtml.substring( index );
					results.push(_this.domEncode(text));
				}
			}
			else
			{//处理style和script
				sHtml=sHtml.replace(/^([\s\S]*?)<\/(?:style|script)>/i, function(all, text){
					results.push(text);
					return '';
				});
				parseEndTag('',stack.last());
			}
			last = sHtml;
		}
		parseEndTag();
		sHtml=results.join('');
		function makeMap(str)
		{
			var obj = {}, items = str.split(",");
			for ( var i = 0; i < items.length; i++ )obj[ items[i] ] = true;
			return obj;
		}
		function processTag(tagName)
		{
			if(tagName)
			{
				tagName=tagName.toLowerCase();
				var tag=tagReplac[tagName];
				if(tag)tagName=tag;
			}
			else tagName='';
			return tagName;
		}
		function parseStartTag( tag, tagName, rest, unary )
		{
			tagName=processTag(tagName);
			if(blockTags[tagName])while(stack.last()&&inlineTags[stack.last()])parseEndTag("",stack.last());
			if(closeSelfTags[tagName]&&stack.last()==tagName )parseEndTag("",tagName);
			unary = emptyTags[ tagName ] || !!unary;
			if (!unary)stack.push(tagName);
			results.push("<" + tagName);
			rest.replace(attr, function(match, name)
			{
				name=name.toLowerCase();
				var value = arguments[2] ? arguments[2] :
						arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
						fillAttrsTags[name] ? name : "";
				if(value)results.push(" "+name+'="'+value.replace(/(^|[^\\])"/g, '$1\\\"')+'"');
			});
			results.push((unary ? " /" : "") + ">");
		}
		function parseEndTag(tag, tagName)
		{
			if(!tagName)var pos = 0;
			else
			{
				tagName=processTag(tagName);
				for(var pos=stack.length-1;pos>=0;pos--)if(stack[pos]==tagName)break;
			}
			if(pos>=0)
			{
				for(var i=stack.length-1;i>=pos;i--)results.push("</" + stack[i] + ">");
				stack.length=pos;
			}
		}
		//font转style
		function font2style(all,tag,attrs,content)
		{
			var styles='',f,s,c,style;
			f=attrs.match(/ face\s*=\s*"\s*([^"]+)\s*"/i);
			if(f)styles+='font-family:'+f[1]+';';
			s=attrs.match(/ size\s*=\s*"\s*(\d+)\s*"/i);
			if(s)styles+='font-size:'+arrFontsize[s[1]-1].n+';';
			c=attrs.match(/ color\s*=\s*"\s*([^"]+)\s*"/i);
			if(c)styles+='color:'+c[1]+';';
			style=attrs.match(/ style\s*=\s*"\s*([^"]+)\s*"/i);
			if(style)styles+=style[1];
			if(styles)content='<span style="'+styles+'">'+content+'</span>';
			return content;			
		}
		sHtml = sHtml.replace(/<(font)(\s+[^>]+|)?>(((?!<\1(\s+[^>]+)?>)[\s\S])*?)<\/\1>/ig,font2style);//最里层
		sHtml = sHtml.replace(/<(font)(\s+[^>]+|)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?)<\/\1>/ig,font2style);//第2层
		sHtml = sHtml.replace(/<(font)(\s+[^>]+|)?>(((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S]|<\1(\s+[^>]+)?>((?!<\1(\s+[^>]+)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig,font2style);//第3层
			
		return sHtml;
	}
	this.toggleShowBlocktag=function(state)
	{
		if(bShowBlocktag===state)return;
		bShowBlocktag=!bShowBlocktag;
		var _jBody=$(_doc.body);
		if(bShowBlocktag)
		{
			bodyClass+=' showBlocktag';
			_jBody.addClass('showBlocktag');
		}
		else
		{
			bodyClass=bodyClass.replace(' showBlocktag','');
			_jBody.removeClass('showBlocktag');
		}
	}
	this.toggleReadonly=function(state)
	{
		if(bReadonly===state)return;
		if(bSource)_this.toggleSource(true);
		bReadonly=!bReadonly;
		if(bReadonly)
		{
			if(!bPreview)_this.togglePreview(true);
			_jTools.find('[name=Preview]').toggleClass('xhEdtEnabled').toggleClass('xhEdtActive');
		}
		else
		{
			_jTools.find('[name=Preview]').toggleClass('xhEdtEnabled').toggleClass('xhEdtActive');
			if(bPreview)_this.togglePreview();
		}
		
	}
	this.toggleSource=function(state)
	{
		if(bPreview||bSource===state)return;
		_jTools.find('[name=Source]').toggleClass('xhEdtEnabled').toggleClass('xhEdtActive');
		_jTools.find('.xhEdtButton').not('[name=Source],[name=Fullscreen],[name=About]').toggleClass('xhEdtEnabled');
		if(bShowPanel)_this.hidePanel();
		var jBody=$(_doc.body),sHtml=_this.getSource();
		if(!bSource)
		{//转为源代码模式	
			if(isIE)_doc.body.contentEditable='false';
			else _doc.designMode = 'Off';
			jBody.attr('scroll','no').attr('class','sourceMode').html('<textarea id="sourceCode" wrap="soft" spellcheck="false" height="100%" />');
			jBody.find('#sourceCode').blur(_this.getSource);
		}
		else
		{//转为编辑模式
			jBody.find('#sourceCode').remove();
			if(isIE)_doc.body.contentEditable='true';
			else
			{
				_doc.designMode = 'On';
				if(isMozilla)_this._exec("inserthtml","-");//修正源代码切换回来无法删除文字的问题
			}
			jBody.removeAttr('scroll').attr('class','editMode'+bodyClass);
			setTimeout(function(){_win.scrollTo(0,0);},10);
		}
		bSource=!bSource;
		_this._setSource(sHtml);
		_jTools.find('[name=Source]').toggleClass('xhEdtEnabled');
		setTimeout(_this.setOpts,300);
	}
	this.togglePreview=function(state)
	{
		if(bSource||bPreview===state)return;
		_jTools.find('[name=Preview]').toggleClass('xhEdtActive').toggleClass('xhEdtEnabled');
		_jTools.find('.xhEdtButton').not('[name=Preview],[name=Fullscreen],[name=About]').toggleClass('xhEdtEnabled');
		var jBody=$(_doc.body);
		if(!bPreview)
		{//转预览模式
			if(isIE)_doc.body.contentEditable='false';
			else _doc.designMode = 'Off';
			jBody.attr('class','previewMode');		
			jBody[0].innerHTML=jBody.html();
		}
		else
		{//转编辑模式
			if(isIE)_doc.body.contentEditable='true';
			else _doc.designMode = 'On';
			jBody.attr('class','editMode'+bodyClass);
			jBody[0].innerHTML=jBody.html();
		}
		bPreview=!bPreview;
		_jTools.find('[name=Preview]').toggleClass('xhEdtEnabled');
		setTimeout(_this.setOpts,300);
	}
	this.toggleFullscreen=function(state)
	{
		if(bFullscreen===state)return;
		if(bShowPanel)_this.hidePanel();
		var jArea=$('#'+idIframeArea),jLayout=$('#'+idContainer).find('.xhEdtLayout'),jContainer=$('#'+idContainer);
		if(bFullscreen)
		{//取消全屏
			if($.boxModel===false)_jText.after(jContainer);
			jLayout.attr('style',sLayoutStyle);
			jArea.height(editHeight-toolbarHeight);
		}
		else
		{//显示全屏
			if($.boxModel===false)$('body').append(jContainer);
			sLayoutStyle=jLayout.attr('style');
			jLayout.removeAttr('style');
			jArea.height('100%');
			setTimeout(_this.fixFullHeight,100);
		}
		bFullscreen=!bFullscreen;
		jContainer.toggleClass('xhEdt_Fullscreen');
		$('html').toggleClass('xhEdt_Fullfix');
		_jTools.find('[name=Fullscreen]').toggleClass('xhEdtActive');
		setTimeout(_this.setOpts,300);
	}
	this.addShortCut=function(key,cmd)
	{
		arrShortCuts[key.toLowerCase()]=cmd;
	}
	this.checkShortCut=function(event)
	{
		if(bSource||bPreview)return true;
		ev = event;
		var code=ev.which,special=specialKeys[code],sChar=special?special:String.fromCharCode(code).toLowerCase();
		sKey='';
		sKey+=ev.ctrlKey?'ctrl+':'';sKey+=ev.altKey?'alt+':'';sKey+=ev.shiftKey?'shift+':'';sKey+=sChar;
		
		if(arrShortCuts[sKey])
		{
			_this.exec(arrShortCuts[sKey]);
			return false;
		}
	}
	this.showMenu=function(menuitems,callback)
	{
		var jMenu=$('<div class="xhEdtMenu"></div>'),jItem;
		$.each(menuitems,function(n,v){
			jItem=$('<a href="javascript:;" title="'+v.t+'">'+v.s+'</a>').click(function(){_this.focus();callback(v.v);_this.hidePanel();}).mousedown(function(){return false;});
			jMenu.append(jItem);
		});
		_this.showPanel(jMenu);
	}
	this.showColor=function(callback)
	{
		var jColor=$('<div class="xhEdtColor"></div>'),jLine,jItem,c=0;
		jLine=$('<div></div>');
		$.each(itemColors,function(n,v)
		{
			c++;
			jItem=$('<a href="javascript:;" title="'+v+'" style="background:'+v+'"><img src="'+skinPath+'img/spacer.gif" /></a>').click(function(){_this.focus();callback(v);_this.hidePanel();}).mousedown(function(){return false;});
			jLine.append(jItem);
			if(c%10==0)
			{
				jColor.append(jLine);
				jLine=$('<div></div>');
			}	
		});
		jColor.append(jLine);
		_this.showPanel(jColor);
	}
	this.showPastetext=function()
	{
		var jPastetext=$(htmlPastetext);
		var jValue=$('#xhEdtPastetextValue',jPastetext),jSave=$('#xhEdtSave',jPastetext);
		jSave.click(function(){
			_this.focus();
			var sValue=jValue.val();
			if(sValue)_this.pasteText(sValue);
			_this.hidePanel();
			return false;
		});
		_this.showDialog(jPastetext);
	}
	this.attr=function(jObj,n,v)
	{
		if(!n)return false;
		var kn='_xhe_'+n;
		if(v)//设置属性
		{
			jObj.attr(n,v);
			if(_this.settings.keepValue)jObj.removeAttr(kn).attr(kn,v);
		}
		v=jObj.attr(n);
		if(_this.settings.keepValue)v=jObj.attr(kn)||v;
		return v;
	}
	this.showLink=function()
	{
		var jLink=$(htmlLink);
		var jParent=_this.getParent('a'),jHref=$('#xhEdtLinkHref',jLink),jTarget=$('#xhEdtLinkTarget',jLink),jSave=$('#xhEdtSave',jLink);
		if(jParent.size()==1)
		{
			jHref.val(_this.attr(jParent,'href'));
			jTarget.attr('value',jParent.attr('target'));
		}
		if(_this.settings.upLinkUrl)_this.ajaxUploadInit(jHref,_this.settings.upLinkUrl,_this.settings.upLinkExt);
		jSave.click(function(){
			_this.focus();
			var url=jHref.val();
			if(url==''||jParent.size()==0)_this._exec('unlink');
			if(url!='')
			{
				if(jParent.size()==0)
				{
					if(_this.getSelect('text')=='')_this.pasteHTML('<a href="#xhedt_tempurl">'+_this.settings.attachLinkText+'</a>');
					else _this._exec('createlink','#xhedt_tempurl');
					jParent=$('a[href$="#xhedt_tempurl"]',_doc);
				}
				_this.attr(jParent,'href',url);
				if(jTarget.val()!='')jParent.attr('target',jTarget.val());
				else jParent.removeAttr('target');
			}
			_this.hidePanel();
			return false;
		});
		_this.showDialog(jLink);
	}
	this.showImg=function()
	{
		var jImg=$(htmlImg);
		var jParent=_this.getParent('img'),jSrc=$('#xhEdtImgSrc',jImg),jAlt=$('#xhEdtImgAlt',jImg),jAlign=$('#xhEdtImgAlign',jImg),jWidth=$('#xhEdtImgWidth',jImg),jHeight=$('#xhEdtImgHeight',jImg),jBorder=$('#xhEdtImgBorder',jImg),jVspace=$('#xhEdtImgVspace',jImg),jHspace=$('#xhEdtImgHspace',jImg),jSave=$('#xhEdtSave',jImg);
		if(jParent.size()==1)
		{
			jSrc.val(_this.attr(jParent,'src'));
			jAlt.val(jParent.attr('alt'));
			jAlign.val(jParent.attr('align'));
			jWidth.val(jParent.attr('width'));
			jHeight.val(jParent.attr('height'));
			jBorder.val(jParent.attr('border'));
			var vspace=jParent.attr('vspace'),hspace=jParent.attr('hspace');
			jVspace.val(vspace<0?0:vspace);
			jHspace.val(hspace<0?0:hspace);
		}
		if(_this.settings.upImgUrl)_this.ajaxUploadInit(jSrc,_this.settings.upImgUrl,_this.settings.upImgExt);
		jSave.click(function(){
			_this.focus();
			var url=jSrc.val();
			if(url!='')
			{
				url=url.split('|');
				if(jParent.size()==0)
				{
					_this.pasteHTML('<img src="#xhedt_tempurl" />');
					jParent=$('img[src$="#xhedt_tempurl"]',_doc);
				}
				_this.attr(jParent,'src',url[0])
				if(jAlt.val()!='')jParent.attr('alt',jAlt.val());
				else jParent.removeAttr('alt');
				if(jAlign.val()!='')jParent.attr('align',jAlign.val());
				else jParent.removeAttr('align');
				if(jWidth.val()!='')jParent.attr('width',jWidth.val());
				else jParent.removeAttr('width');
				if(jHeight.val()!='')jParent.attr('height',jHeight.val());
				else jParent.removeAttr('height');
				if(jBorder.val()!='')jParent.attr('border',jBorder.val());
				else jParent.removeAttr('border');
				if(jVspace.val()!='')jParent.attr('vspace',jVspace.val());
				else jParent.removeAttr('vspace');
				if(jHspace.val()!='')jParent.attr('hspace',jHspace.val());
				else jParent.removeAttr('hspace');
				if(url[1])
				{
					var jLink=jParent.parent('a');
					if(jLink.size()==0){
						jParent.wrap('<a></a>');
						jLink=jParent.parent('a');
					};
					_this.attr(jLink,'href',url[1]);
					jLink.attr('target','_blank');
				}
			}
			else if(jParent.size()==1)jParent.remove();
			_this.hidePanel();
			return false;			
		});
		_this.showDialog(jImg);
	}
	this.showFlash=function()
	{
		var jFlash=$(htmlFlash);
		var jParent=_this.getParent('embed[type="application/x-shockwave-flash"]'),jSrc=$('#xhEdtFlashSrc',jFlash),jWidth=$('#xhEdtFlashWidth',jFlash),jHeight=$('#xhEdtFlashHeight',jFlash),jSave=$('#xhEdtSave',jFlash);
		if(jParent.size()==1)
		{
			jSrc.val(_this.attr(jParent,'src'));
			jWidth.val(jParent.attr('width'));
			jHeight.val(jParent.attr('height'));
		}
		if(_this.settings.upFlashUrl)_this.ajaxUploadInit(jSrc,_this.settings.upFlashUrl,_this.settings.upFlashExt);
		jSave.click(function(){
			_this.focus();
			var sSrc=jSrc.val();
			if(sSrc!='')
			{
				if(jParent.size()==0)
				{
					_this.pasteHTML('<embed type="application/x-shockwave-flash" src="#xhedt_tempurl" wmode="opaque" quality="high" bgcolor="#ffffff" menu="false" play="true" loop="true" />');
					jParent=$('embed[src$="#xhedt_tempurl"]',_doc);
				}
				_this.attr(jParent,'src',sSrc);
				var w=jWidth.val(),h=jHeight.val(),reg=/^[0-9]+$/;
				if(!reg.test(w))w=412;if(!reg.test(h))h=300;
				jParent.attr('width',w);
				jParent.attr('height',h);
			}
			else if(jParent.size()==1)jParent.remove();
			_this.hidePanel();
			return false;	
		});
		_this.showDialog(jFlash);
	}
	this.showMeida=function()
	{
		var jMedia=$(htmlMedia);
		var jParent=_this.getParent('embed[type="application/x-mplayer2"]'),jSrc=$('#xhEdtMediaSrc',jMedia),jWidth=$('#xhEdtMediaWidth',jMedia),jHeight=$('#xhEdtMediaHeight',jMedia),jSave=$('#xhEdtSave',jMedia);
		if(jParent.size()==1)
		{
			jSrc.val(_this.attr(jParent,'src'));
			jWidth.val(jParent.attr('width'));
			jHeight.val(jParent.attr('height'));
		}
		if(_this.settings.upMediaUrl)_this.ajaxUploadInit(jSrc,_this.settings.upMediaUrl,_this.settings.upMediaExt);
		jSave.click(function(){
			_this.focus();
			var sSrc=jSrc.val();
			if(sSrc!='')
			{
				if(jParent.size()==0)
				{
					_this.pasteHTML('<embed type="application/x-mplayer2" src="#xhedt_tempurl" enablecontextmenu="false" autostart="false" />');
					jParent=$('embed[src$="#xhedt_tempurl"]',_doc);
				}
				_this.attr(jParent,'src',sSrc);
				var w=jWidth.val(),h=jHeight.val(),reg=/^[0-9]+$/;
				if(!reg.test(w))w=412;if(!reg.test(h))h=300;
				jParent.attr('width',w);
				jParent.attr('height',h);
			}
			else if(jParent.size()==1)jParent.remove();
			_this.hidePanel();
			return false;	
		});
		_this.showDialog(jMedia);
	}
	this.ajaxUploadInit=function(jText,tourl,upext)
	{
		var s1='<span class="upload"><input type="text" style="visibility:hidden;" /><input type="button" value="Upload" class="btn" />',jUpload;
		if(tourl.substr(0,1)=='!')//自定义上传管理页
		{
			jUpload=$(s1+'</span>');
			jText.after(jUpload);
			$('.btn',jUpload).before(jText).click(function(){
				_this.showIframeModal(tourl.substr(1),'Upload file',function(v){
					if(v.substr(0,1)=='!')
					{
						jText.val(v.substr(1));
						jText.closest('.xhEdtDialog').find('#xhEdtSave').click();
					}
					else jText.val(v);
				});
			});
		}
		else
		{//系统默认ajax上传
			jUpload=$(s1+'<input type="file" class="file" size="13" name="upload" id="xhEdtUploadFile" /></span>');
			jText.after(jUpload);
			$('.btn',jUpload).before(jText);
			var jFile=$('#xhEdtUploadFile',jUpload);
			jFile.change(function(){
				var sFile=jFile.val();
				if(sFile!='')
				{
					if(sFile.match(new RegExp('\.('+upext.replace(/,/g,'|')+')$','i')))
					{
						var modal=_this.showModal('Upload file','<div style="margin:22px 0;text-align:center;line-height:30px;">File uploading,please wait...<br /><img src="'+skinPath+'img/loading.gif"></div>',320,150);
						_this.ajaxUpload(jFile,tourl,function(data){
							modal.unloadme();
							if(data.err)alert(data.err);
							else
							{
								var msg=data.msg;
								if(msg.substr(0,1)=='!')
								{
									jText.val(msg.substr(1));
									jText.closest('.xhEdtDialog').find('#xhEdtSave').click();
								}
								else jText.val(msg);
							}
						});
					}
					else alert('Upload file extension required for this:'+upext);
				}
			});
		}
	}
	this.ajaxUpload=function(fromfile,tourl,callback)
	{
		var uid = new Date().getTime(),idIO='jUploadFrame'+uid;
		var jIO=$('<iframe name="'+idIO+'" class="xhEdtUploadIO" />').appendTo('body');
		var jForm=$('<form action="'+tourl+'" target="'+idIO+'" method="post" enctype="multipart/form-data" class="xhEdtUploadForm"></form>').appendTo('body');
		var jOldFile = $(fromfile),jNewFile = jOldFile.clone().attr('disabled','true');
		jOldFile.before(jNewFile).appendTo(jForm);
		jForm.submit();
		jIO.load(function(){
			setTimeout(function(){
				jNewFile.before(jOldFile).remove();
				jIO.remove();
				jForm.remove();
			},100);
			var strText=$(jIO[0].contentWindow.document.body).text(),data=Object;
			try{eval("data=" + strText);}catch(ex){};
			if(data.err!=undefined&&data.msg!=undefined)callback(data);
			else alert(tourl+' upload interface error!');
		});
	}
	this.showIframeModal=function(ifmurl,title,callback,w,h)
	{
		var jIframe=$('<iframe frameborder="0" src="'+ifmurl+'" style="width:100%;" />');
		var modal=_this.showModal(title,jIframe,w,h);
		jIframe.load(function(){
			var _ModalWin=jIframe[0].contentWindow;
			_ModalWin.callback=callback;
			_ModalWin.unloadme=modal.unloadme;
		});
	}
	this.showModal=function(title,content,w,h,onClose)
	{
		var jOverlay=$('<div class="xhEdtOverlay"></div>').appendTo('body').mousedown(function(){return false;});
		w=w?w:_this.settings.modalWidth;h=h?h:_this.settings.modalHeight;
		var jModal=$('<div class="xhEdtModal" style="width:'+w+'px;height:'+h+'px;margin:-'+Math.ceil(h/2)+'px 0px 0px -'+Math.ceil(w/2)+'px;">'+(_this.settings.modalTitle?'<div class="xhEdtTitle"><span class="xhEdtClose" title="Close"></span>'+title+'</div>':'')+'<div class="xhEdtContent"></div></div>').appendTo('body').mousedown(function(){return false;});;
		this.unloadme=function(){jModal.remove();jOverlay.remove();if(onClose)onClose();}
		$('.xhEdtClose',jModal).click(this.unloadme);
		$('.xhEdtContent',jModal).html(content);
		jOverlay.show();jModal.show();
		return this;
	}
	this.showEmot=function()
	{
		var jEmot=$('<div class="xhEdtEmot"></div>'),jLine,jItem,c=0,sEmotPath=jsURL+'xheditor_emot/default/';
		jLine=$('<div></div>');
		$.each(itemEmots,function(n,v)
		{
			c++;
			jItem=$('<a href="javascript:;" title="'+v.t+'"><img src="'+sEmotPath+v.s+'" /></a>').click(function(){
				_this.focus();
				_this.pasteHTML('<img src="'+sEmotPath+v.s+'" alt="'+v.t+'">');
				_this.hidePanel();
			}).mousedown(function(){return false;});
			jLine.append(jItem);
			if(c%6==0)
			{
				jEmot.append(jLine);
				jLine=$('<div></div>');
			}			
		});
		jEmot.append(jLine);
		_this.showPanel(jEmot);
	}
	this.showTable=function()
	{
		var jTable=$(htmlTable);
		var jRows=$('#xhEdtTableRows',jTable),jColumns=$('#xhEdtTableColumns',jTable),jHeaders=$('#xhEdtTableHeaders',jTable),jWidth=$('#xhEdtTableWidth',jTable),jHeight=$('#xhEdtTableHeight',jTable),jBorder=$('#xhEdtTableBorder',jTable),jCellSpacing=$('#xhEdtTableCellSpacing',jTable),jCellPadding=$('#xhEdtTableCellPadding',jTable),jAlign=$('#xhEdtTableAlign',jTable),jCaption=$('#xhEdtTableCaption',jTable),jSave=$('#xhEdtSave',jTable);
		jSave.click(function(){
			_this.focus();
			var sCaption=jCaption.val(),sBorder=jBorder.val(),sRows=jRows.val(),sCols=jColumns.val(),sHeaders=jHeaders.val(),sWidth=jWidth.val(),sHeight=jHeight.val(),sCellSpacing=jCellSpacing.val(),sCellPadding=jCellPadding.val(),sAlign=jAlign.val();
			var i,j,htmlTable='<table'+(sBorder!=''?' border="'+sBorder+'"':'')+(sWidth!=''?' width="'+sWidth+'"':'')+(sHeight!=''?' width="'+sHeight+'"':'')+(sCellSpacing!=''?' cellspacing="'+sCellSpacing+'"':'')+(sCellPadding!=''?' cellpadding="'+sCellPadding+'"':'')+(sAlign!=''?' align="'+sAlign+'"':'')+'>';
			if(sCaption!='')htmlTable+='<caption>'+sCaption+'</caption>';
			if(sHeaders=='row'||sHeaders=='both')
			{
				htmlTable+='<tr>';
				for(i=0;i<sCols;i++)htmlTable+='<th scope="col">&nbsp;</th>';
				htmlTable+='</tr>';
				sRows--;
			}
			htmlTable+='<tbody>';
			for(i=0;i<sRows;i++)
			{
				htmlTable+='<tr>';
				for(j=0;j<sCols;j++)
				{
					if(j==0&&(sHeaders=='col'||sHeaders=='both'))htmlTable+='<th scope="row">&nbsp;</th>';
					else htmlTable+='<td>&nbsp;</td>';
				}
				htmlTable+='</tr>';
			}
			htmlTable+='</tbody></table>';
			_this.pasteHTML(htmlTable);
			_this.hidePanel();
			return false;	
		});
		_this.showDialog(jTable);
	}
	this.showAbout=function()
	{
		var jAbout=$(htmlAbout);
		var jSave=$('#xhEdtSave',jAbout);
		jSave.click(function(){
			_this.focus();
			_this.hidePanel();
			return false;	
		});
		_this.showDialog(jAbout);
	}
	this.showDialog=function(content)
	{
		var jDialog=$('<div class="xhEdtDialog"></div>');
		jDialog.append(content);
		_this.showPanel(jDialog);
	}
	this.showPanel=function(content)
	{
		if(bShowPanel)_this.hidePanel();
		_jPanel.empty().append(content).css('left',0).css('top',0);
		_jPanelButton=$(ev.target).closest('a');
		var xy=_jPanelButton.offset();
		var x=xy.left,y=xy.top;y+=_jPanelButton.height();
		_jPanelButton.addClass('xhEdtActive');
		_jCntLine.css('left',x+1).css('top',y).show();
		if((x+_jPanel.width())>document.body.clientWidth)x-=(_jPanel.width()-_jPanelButton.width());
		_jPanel.css('left',x).css('top',y).show();
		if(isIE&&!bSource)bookmark=_this.getRng();
		bShowPanel=true;
	}
	this.hidePanel=function(){if(bShowPanel){_jPanelButton.removeClass('xhEdtActive');_jCntLine.hide();_jPanel.hide();bookmark=null;bShowPanel=false;}}
	this.exec=function(cmd)
	{
		var e=arrTools[cmd].e;
		if(e)return e.call(this);
		cmd=cmd.toLowerCase();
		switch(cmd)
		{
			case 'cut':
				try{_doc.execCommand(cmd);if(!_doc.queryCommandSupported(cmd))throw 'Error';}
				catch(ex){alert('Currently not supported by your browser, use keyboard shortcuts(Ctrl+X) instead.');};
				break;
			case 'copy':
				try{_doc.execCommand(cmd);if(!_doc.queryCommandSupported(cmd))throw 'Error';}
				catch(ex){alert('Currently not supported by your browser, use keyboard shortcuts(Ctrl+C) instead.');}
				break;
			case 'paste':
				try{_doc.execCommand(cmd);if(!_doc.queryCommandSupported(cmd))throw 'Error';}
				catch(ex){alert('Currently not supported by your browser, use keyboard shortcuts(Ctrl+V) instead.');}
				break;
			case 'pastetext':
				if(window.clipboardData)_this.pasteText(window.clipboardData.getData('Text', true));
				else _this.showPastetext();
				break;
			case 'blocktag':
				var menuBlocktag=[];
				$.each(arrBlocktag,function(n,v){menuBlocktag.push({s:'<'+v.n+'>'+v.t+'</'+v.n+'>',v:'<'+v.n+'>',t:v.t});});
				_this.showMenu(menuBlocktag,function(v){_this._exec('formatblock',v);});
				break;
			case 'fontface':
				var menuFontname=[];
				$.each(arrFontname,function(n,v){menuFontname.push({s:'<span style="font-family:'+v+'">'+v+'</span>',v:v,t:v});});
				_this.showMenu(menuFontname,function(v){_this._exec('fontname',v);});
				break;
			case 'fontsize':
				var menuFontsize=[];
				$.each(arrFontsize,function(n,v){menuFontsize.push({s:'<span style="font-size:'+v.s+'">'+v.t+'('+v.s+')</span>',v:n+1,t:v.t});});
				_this.showMenu(menuFontsize,function(v){_this._exec('fontsize',v);});
				break;
			case 'fontcolor':
				_this.showColor(function(v){_this._exec('forecolor',v);});
				break;
			case 'backcolor':
				_this.showColor(function(v){if(isIE)_this._exec('backcolor',v);else{_this.setCSS(true);_this._exec('hilitecolor',v);_this.setCSS(false);}});
				break;
			case 'align':
				_this.showMenu(menuAlign,function(v){_this._exec(v);});
				break;
			case 'list':
				_this.showMenu(menuList,function(v){_this._exec(v);});
				break;
			case 'link':
				_this.showLink();
				break;
			case 'img':
				_this.showImg();		
				break;
			case 'flash':
				_this.showFlash();
				break;
			case 'media':
				_this.showMeida();
				break;
			case 'emot':
				_this.showEmot();
				break;
			case 'table':
				_this.showTable();
				break;
			case 'source':
				_this.toggleSource();
				break;
			case 'preview':
				_this.togglePreview();
				break;
			case 'fullscreen':
				_this.toggleFullscreen();
				break;
			case 'about':
				_this.showAbout();
				break;
			default:
				_this._exec(cmd);
				break;
		}
	}
	this._exec=function(cmd,param)
	{
		if(param!=undefined)return _doc.execCommand(cmd,false,param);
		else return _doc.execCommand(cmd,false,null);
	}
}
$(function(){
$('textarea.xheditor').xheditor(true);
$('textarea.xheditor-mini').xheditor(true,{tools:'mini'});
$('textarea.xheditor-simple').xheditor(true,{tools:'simple'});
});

})(jQuery);
/*
接口: 
var editor=$('#elm1').xheditor(true,{tools:'full',skin:'default',showBlocktag:false,internalScript:true,internalStyle:true,width:300,height:200,loadCSS:'http://pirate9.com/test.css',fullscreen:true,beforeSetSource:ubb2html,beforeGetSource:html2ubb,focus:focusAction,blur:blurAction,forcePtag:true})[0].xheditor,sHtml;
editor.focus();
editor.setSource('str')
sHtml=editor.getSource()
editor.pasteHTML('<p>aaa</p>')
editor.pasteText('str')
sHtml=editor.formatXHTML('<b>aaa</b>')
editor.toggleHtml()
editor.togglePreview()
editor.toggleFullscreen()
*/