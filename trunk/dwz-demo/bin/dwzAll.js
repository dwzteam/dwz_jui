/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
/*
 * jQuery validation plug-in 1.6
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}
		
		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator); 
		
		if ( validator.settings.onsubmit ) {
		
			// allow suppresing validation by adding a cancel class to the submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});
			
			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				this.find("input, button").filter(":submit").click(function() {
					validator.submitButton = this;
				});
			}
		
			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();
					
				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}
					
				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}
		
		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];
		
		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}
		
		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);
		
		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}
		
		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 ) 
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {
	
	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;
				
			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.errorsFor(element).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted )
				this.element(element);
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted)
				this.element(element.parentNode)
		},
		highlight: function( element, errorClass, validClass ) {
			$(element).addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function( element, errorClass, validClass ) {
			$(element).removeClass(errorClass).addClass(validClass);
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},
	
	autoCreateRanges: false,
	
	prototype: {
		
		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();
			
			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});
			
			function delegate(event) {
				var validator = $.data(this[0].form, "validator");
				validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0] );
			}
			$(this.currentForm)
				.delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate)
				.delegate("click", ":radio, :checkbox, select, option", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},
		
		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid(); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},
		
		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},
		
		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},
		
		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},
		
		valid: function() {
			return this.size() == 0;
		},
		
		size: function() {
			return this.errorList.length;
		},
		
		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus();
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},
		
		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},
		
		elements: function() {
			var validator = this,
				rulesCache = {};
			
			// select all valid inputs inside the form (no submit or reset buttons)
			// workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
			return $([]).add(this.currentForm.elements)
			.filter(":input")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
			
				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;
				
				rulesCache[this.name] = true;
				return true;
			});
		},
		
		clean: function( selector ) {
			return $( selector )[0];
		},
		
		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},
		
		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},
		
		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},
		
		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},
	
		check: function( element ) {
			element = this.clean( element );
			
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name )[0];
			}
			
			var rules = $(element).rules();
			var dependencyMismatch = false;
			for( method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );
					
					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;
					
					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}
					
					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},
		
		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;
			
			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();
			
			return meta && meta.messages && meta.messages[method];
		},
		
		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},
		
		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},
		
		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},
		
		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message == "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
			}			
			this.errorList.push({
				message: message,
				element: element
			});
			
			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},
		
		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},
		
		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},
		
		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},
		
		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},
		
		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );
			
				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},
		
		errorsFor: function(element) {
			var name = this.idOrName(element);
    		return this.errors().filter(function() {
				return $(this).attr('for') == name
			});
		},
		
		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},
		
		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},
		
		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},
	
		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},
	
		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},
		
		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},
		
		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},
		
		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},
		
		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}
		
	},
	
	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},
	
	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},
	
	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},
	
	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);
		
		for (method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}
		
		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}
		
		return rules;
	},
	
	metadataRules: function(element) {
		if (!$.metadata) return {};
		
		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},
	
	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},
	
	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});
		
		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});
		
		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});
		
		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}
		
		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages
		}
		
		return rules;
	},
	
	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},
	
	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			
			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;
			
			param = typeof param == "string" && {url:param} || param; 
			
			if ( previous.old !== value ) {
				previous.old = value;
				var validator = this;
				this.startRequest(element);
				var data = {};
				data[element.name] = value;
				$.ajax($.extend(true, {
					url: param,
					mode: "abort",
					port: "validate" + element.name,
					dataType: "json",
					data: data,
					success: function(response) {
						validator.settings.messages[element.name].remote = previous.originalMessage;
						var valid = response === true;
						if ( valid ) {
							var submitted = validator.formSubmitted;
							validator.prepareElement(element);
							validator.formSubmitted = submitted;
							validator.successList.push(element);
							validator.showErrors();
						} else {
							var errors = {};
							var message = (previous.message = response || validator.defaultMessage( element, "remote" ));
							errors[element.name] = $.isFunction(message) ? message(value) : message;
							validator.showErrors(errors);
						}
						previous.valid = valid;
						validator.stopRequest(element, valid);
					}
				}, param));
				return "pending";
			} else if( this.pending[element.name] ) {
				return "pending";
			}
			return previous.valid;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},
        
		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
				$(element).valid();
			});
			return value == target.val();
		}
		
	}
	
});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
	var ajax = $.ajax;
	var pendingRequests = {};
	$.ajax = function(settings) {
		// create settings for compatibility with ajaxSetup
		settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
		var port = settings.port;
		if (settings.mode == "abort") {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			return (pendingRequests[port] = ajax.apply(this, arguments));
		}
		return ajax.apply(this, arguments);
	};
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 

// provides triggerEvent(type: String, target: Element) to trigger delegated events
;(function($) {
	$.each({
		focus: 'focusin',
		blur: 'focusout'	
	}, function( original, fix ){
		$.event.special[fix] = {
			setup:function() {
				if ( $.browser.msie ) return false;
				this.addEventListener( original, $.event.special[fix].handler, true );
			},
			teardown:function() {
				if ( $.browser.msie ) return false;
				this.removeEventListener( original,
				$.event.special[fix].handler, true );
			},
			handler: function(e) {
				arguments[0] = $.event.fix(e);
				arguments[0].type = fix;
				return $.event.handle.apply(this, arguments);
			}
		};
	});
	$.extend($.fn, {
		delegate: function(type, delegate, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		},
		triggerEvent: function(type, target) {
			return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]);
		}
	})
})(jQuery);
/*
 * FCKeditor - The text editor for Internet - http://www.fckeditor.net
 * Copyright (C) 2003-2009 Frederico Caldeira Knabben
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 *
 * This is the integration file for JavaScript.
 *
 * It defines the FCKeditor class that can be used to create editor
 * instances in a HTML page in the client side. For server side
 * operations, use the specific integration system.
 */

// FCKeditor Class
var FCKeditor = function( instanceName, width, height, toolbarSet, value )
{
	// Properties
	this.InstanceName	= instanceName ;
	this.Width			= width			|| '100%' ;
	this.Height			= height		|| '200' ;
	this.ToolbarSet		= toolbarSet	|| 'Default' ;
	this.Value			= value			|| '' ;
	this.BasePath		= FCKeditor.BasePath ;
	this.CheckBrowser	= true ;
	this.DisplayErrors	= true ;

	this.Config			= new Object() ;

	// Events
	this.OnError		= null ;	// function( source, errorNumber, errorDescription )
}

/**
 * This is the default BasePath used by all editor instances.
 */
FCKeditor.BasePath = '/fckeditor/' ;

/**
 * The minimum height used when replacing textareas.
 */
FCKeditor.MinHeight = 200 ;

/**
 * The minimum width used when replacing textareas.
 */
FCKeditor.MinWidth = 750 ;

FCKeditor.prototype.Version			= '2.6.4.1' ;
FCKeditor.prototype.VersionBuild	= '23187' ;

FCKeditor.prototype.Create = function()
{
	document.write( this.CreateHtml() ) ;
}

FCKeditor.prototype.CreateHtml = function()
{
	// Check for errors
	if ( !this.InstanceName || this.InstanceName.length == 0 )
	{
		this._ThrowError( 701, 'You must specify an instance name.' ) ;
		return '' ;
	}

	var sHtml = '' ;

	if ( !this.CheckBrowser || this._IsCompatibleBrowser() )
	{
		sHtml += '<input type="hidden" id="' + this.InstanceName + '" name="' + this.InstanceName + '" value="' + this._HTMLEncode( this.Value ) + '" style="display:none" />' ;
		sHtml += this._GetConfigHtml() ;
		sHtml += this._GetIFrameHtml() ;
	}
	else
	{
		var sWidth  = this.Width.toString().indexOf('%')  > 0 ? this.Width  : this.Width  + 'px' ;
		var sHeight = this.Height.toString().indexOf('%') > 0 ? this.Height : this.Height + 'px' ;

		sHtml += '<textarea name="' + this.InstanceName +
			'" rows="4" cols="40" style="width:' + sWidth +
			';height:' + sHeight ;

		if ( this.TabIndex )
			sHtml += '" tabindex="' + this.TabIndex ;

		sHtml += '">' +
			this._HTMLEncode( this.Value ) +
			'<\/textarea>' ;
	}

	return sHtml ;
}

FCKeditor.prototype.ReplaceTextarea = function()
{
	if ( document.getElementById( this.InstanceName + '___Frame' ) )
		return ;
	if ( !this.CheckBrowser || this._IsCompatibleBrowser() )
	{
		// We must check the elements firstly using the Id and then the name.
		var oTextarea = document.getElementById( this.InstanceName ) ;
		var colElementsByName = document.getElementsByName( this.InstanceName ) ;
		var i = 0;
		while ( oTextarea || i == 0 )
		{
			if ( oTextarea && oTextarea.tagName.toLowerCase() == 'textarea' )
				break ;
			oTextarea = colElementsByName[i++] ;
		}

		if ( !oTextarea )
		{
			alert( 'Error: The TEXTAREA with id or name set to "' + this.InstanceName + '" was not found' ) ;
			return ;
		}

		oTextarea.style.display = 'none' ;

		if ( oTextarea.tabIndex )
			this.TabIndex = oTextarea.tabIndex ;

		this._InsertHtmlBefore( this._GetConfigHtml(), oTextarea ) ;
		this._InsertHtmlBefore( this._GetIFrameHtml(), oTextarea ) ;
	}
}

FCKeditor.prototype._InsertHtmlBefore = function( html, element )
{
	if ( element.insertAdjacentHTML )	// IE
		element.insertAdjacentHTML( 'beforeBegin', html ) ;
	else								// Gecko
	{
		var oRange = document.createRange() ;
		oRange.setStartBefore( element ) ;
		var oFragment = oRange.createContextualFragment( html );
		element.parentNode.insertBefore( oFragment, element ) ;
	}
}

FCKeditor.prototype._GetConfigHtml = function()
{
	var sConfig = '' ;
	for ( var o in this.Config )
	{
		if ( sConfig.length > 0 ) sConfig += '&amp;' ;
		sConfig += encodeURIComponent( o ) + '=' + encodeURIComponent( this.Config[o] ) ;
	}

	return '<input type="hidden" id="' + this.InstanceName + '___Config" value="' + sConfig + '" style="display:none" />' ;
}

FCKeditor.prototype._GetIFrameHtml = function()
{
	var sFile = 'fckeditor.html' ;

	try
	{
		if ( (/fcksource=true/i).test( window.top.location.search ) )
			sFile = 'fckeditor.original.html' ;
	}
	catch (e) { /* Ignore it. Much probably we are inside a FRAME where the "top" is in another domain (security error). */ }

	var sLink = this.BasePath + 'editor/' + sFile + '?InstanceName=' + encodeURIComponent( this.InstanceName ) ;
	if (this.ToolbarSet)
		sLink += '&amp;Toolbar=' + this.ToolbarSet ;

	var html = '<iframe id="' + this.InstanceName +
		'___Frame" src="' + sLink +
		'" width="' + this.Width +
		'" height="' + this.Height ;

	if ( this.TabIndex )
		html += '" tabindex="' + this.TabIndex ;

	html += '" frameborder="0" scrolling="no"></iframe>' ;

	return html ;
}

FCKeditor.prototype._IsCompatibleBrowser = function()
{
	return FCKeditor_IsCompatibleBrowser() ;
}

FCKeditor.prototype._ThrowError = function( errorNumber, errorDescription )
{
	this.ErrorNumber		= errorNumber ;
	this.ErrorDescription	= errorDescription ;

	if ( this.DisplayErrors )
	{
		document.write( '<div style="COLOR: #ff0000">' ) ;
		document.write( '[ FCKeditor Error ' + this.ErrorNumber + ': ' + this.ErrorDescription + ' ]' ) ;
		document.write( '</div>' ) ;
	}

	if ( typeof( this.OnError ) == 'function' )
		this.OnError( this, errorNumber, errorDescription ) ;
}

FCKeditor.prototype._HTMLEncode = function( text )
{
	if ( typeof( text ) != "string" )
		text = text.toString() ;

	text = text.replace(
		/&/g, "&amp;").replace(
		/"/g, "&quot;").replace(
		/</g, "&lt;").replace(
		/>/g, "&gt;") ;

	return text ;
}

;(function()
{
	var textareaToEditor = function( textarea )
	{
		var editor = new FCKeditor( textarea.name ) ;

		editor.Width = Math.max( textarea.offsetWidth, FCKeditor.MinWidth ) ;
		editor.Height = Math.max( textarea.offsetHeight, FCKeditor.MinHeight ) ;

		return editor ;
	}

	/**
	 * Replace all <textarea> elements available in the document with FCKeditor
	 * instances.
	 *
	 *	// Replace all <textarea> elements in the page.
	 *	FCKeditor.ReplaceAllTextareas() ;
	 *
	 *	// Replace all <textarea class="myClassName"> elements in the page.
	 *	FCKeditor.ReplaceAllTextareas( 'myClassName' ) ;
	 *
	 *	// Selectively replace <textarea> elements, based on custom assertions.
	 *	FCKeditor.ReplaceAllTextareas( function( textarea, editor )
	 *		{
	 *			// Custom code to evaluate the replace, returning false if it
	 *			// must not be done.
	 *			// It also passes the "editor" parameter, so the developer can
	 *			// customize the instance.
	 *		} ) ;
	 */
	FCKeditor.ReplaceAllTextareas = function()
	{
		var textareas = document.getElementsByTagName( 'textarea' ) ;

		for ( var i = 0 ; i < textareas.length ; i++ )
		{
			var editor = null ;
			var textarea = textareas[i] ;
			var name = textarea.name ;

			// The "name" attribute must exist.
			if ( !name || name.length == 0 )
				continue ;

			if ( typeof arguments[0] == 'string' )
			{
				// The textarea class name could be passed as the function
				// parameter.

				var classRegex = new RegExp( '(?:^| )' + arguments[0] + '(?:$| )' ) ;

				if ( !classRegex.test( textarea.className ) )
					continue ;
			}
			else if ( typeof arguments[0] == 'function' )
			{
				// An assertion function could be passed as the function parameter.
				// It must explicitly return "false" to ignore a specific <textarea>.
				editor = textareaToEditor( textarea ) ;
				if ( arguments[0]( textarea, editor ) === false )
					continue ;
			}

			if ( !editor )
				editor = textareaToEditor( textarea ) ;

			editor.ReplaceTextarea() ;
		}
	}
})() ;

function FCKeditor_IsCompatibleBrowser()
{
	var sAgent = navigator.userAgent.toLowerCase() ;

	// Internet Explorer 5.5+
	if ( /*@cc_on!@*/false && sAgent.indexOf("mac") == -1 )
	{
		var sBrowserVersion = navigator.appVersion.match(/MSIE (.\..)/)[1] ;
		return ( sBrowserVersion >= 5.5 ) ;
	}

	// Gecko (Opera 9 tries to behave like Gecko at this point).
	if ( navigator.product == "Gecko" && navigator.productSub >= 20030210 && !( typeof(opera) == 'object' && opera.postError ) )
		return true ;

	// Opera 9.50+
	if ( window.opera && window.opera.version && parseFloat( window.opera.version() ) >= 9.5 )
		return true ;

	// Adobe AIR
	// Checked before Safari because AIR have the WebKit rich text editor
	// features from Safari 3.0.4, but the version reported is 420.
	if ( sAgent.indexOf( ' adobeair/' ) != -1 )
		return ( sAgent.match( / adobeair\/(\d+)/ )[1] >= 1 ) ;	// Build must be at least v1

	// Safari 3+
	if ( sAgent.indexOf( ' applewebkit/' ) != -1 )
		return ( sAgent.match( / applewebkit\/(\d+)/ )[1] >= 522 ) ;	// Build must be at least 522 (v3)

	return false ;
}
var alertMsg = {
	_boxId: "#alertMsgBox",
	_bgId: "#alertBackground",
	_closeTimer: null,

	_types: {error:{type:"error", title:"错误"}, info:{type:"information", title:"提示"}, warn:{type:"warning", title:"警告"}, correct:{type:"correct", title:"成功"}, confirm:{type:"confirm", title:"确认提示"}},
	_butMsg: {ok:"确定", yes:"是", no:"否", cancel:"取消"},
	
	/**
	 * 
	 * @param {Object} type
	 * @param {Object} msg
	 * @param {Object} buttons [button1, button2]
	 */
	_open: function(type, msg, buttons){
		$(this._boxId).remove();
		var butsHtml = "";
		if (buttons) {
			for (var i = 0; i < buttons.length; i++) {
				var sRel = buttons[i].call ? "callback" : "";
				butsHtml += DWZ.frag["alertButFrag"].replace("#butMsg#", buttons[i].name).replace("#callback#", sRel);
			}
		}
		var boxHtml = DWZ.frag["alertBoxFrag"].replace("#type#", type.type).replace("#title#", type.title).replace("#message#", msg).replace("#butFragment#", butsHtml);
		$(boxHtml).appendTo("body").css({top:-$(this._boxId).height()+"px"}).scrollCenter({mode:"W"}).animate({top:"0px"}, 500);
				
		if (this._closeTimer) {
			clearTimeout(this._closeTimer);
			this._closeTimer = null;
		}
		if (this._types.info == type || this._types.correct == type){
			this._closeTimer = setTimeout(function(){alertMsg.close()}, 2500);
		} else {
			$(this._bgId).show();
		}
		var jCallButs = $(this._boxId).find("[rel=callback]");
		for (var i = 0; i < buttons.length; i++) {
			jCallButs.eq(i).click(buttons[i].call);
		}
	},
	close: function(){
		$(this._boxId).animate({top:-$(this._boxId).height()}, 500, function(){
			$(this).remove();
		});
		$(this._bgId).hide();
	},
	error: function(msg) {
		this._open(this._types.error, msg, [{name:this._butMsg.ok}]);
	},
	info: function(msg) {
		this._open(this._types.info, msg, [{name:this._butMsg.ok}]);
	},
	warn: function(msg) {
		this._open(this._types.warn, msg, [{name:this._butMsg.ok}]);
	},
	correct: function(msg) {
		this._open(this._types.correct, msg, [{name:this._butMsg.ok}]);
	},
	/**
	 * 
	 * @param {Object} msg
	 * @param {Object} options {okName, okCal, cancelName, cancelCall}
	 */
	confirm: function(msg, options) {
		var op = {okName:this._butMsg.ok, okCall:null, cancelName:this._butMsg.cancel, cancelCall:null};
		$.extend(op, options);
		var buttons = [
			{name:op.okName, call: op.okCall},
			{name:op.cancelName, call: op.cancelCall}
		];
		this._open(this._types.confirm, msg, buttons);
	}
};

/**
 * @author Zhang Huihua
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
	}
};

$(function(){
	$.get('dwz.frag.xml', function(data){
		$(data).find("_PAGE_").each(function(){
			var pageId = $(this).attr("id");
			if (pageId) DWZ.frag[pageId] = $(this).text();
		});
		
		$(data).find("_MSG_").each(function(){
			var id = $(this).attr("id");
			if (id) DWZ.msg[id] = $(this).text();
		});
	});
});

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
		inputLabels: function(){
			return this.each(function(){
				var $inputLabel = $(this).parent().find(">label");
				$(this).focus(function(){
					$inputLabel.css("opacity",0.5);
				}).blur(function(){
					if (!$(this).val()) $inputLabel.show().css("opacity",1);
				}).keyup(function(){
					$inputLabel.hide();
				});						
			});
		}
	});
})(jQuery);
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
})(jQuery);/**
 * @author Roger Wu
 * @version 1.0
 */
 (function($){
 	$.extend($.fn, {
		jTree:function(options) {
			var op = $.extend({select:null, selected:"selected", exp:"expandable", coll:"collapsable", firstExp:"first_expandable", firstColl:"first_collapsable", lastExp:"last_expandable", lastColl:"last_collapsable", folderExp:"folder_expandable", folderColl:"folder_collapsable", endExp:"end_expandable", endColl:"end_collapsable",file:"file"}, options);
			return this.each(function(){
				var $this = $(this);
				var cnum = $this.children().length;
				$(">li", $this).each(function(index){
					var $li = $(this);
					var first = $li.prev()[0]?false:true;
					var last = $li.next()[0]?false:true; 
					$li.genTree({
						icon:$this.hasClass("treeFolder"),
						ckbox:$this.hasClass("treeCheck"),
						options: op,
						level: 0,
						exp:(cnum>1?(first?op.firstExp:(last?op.lastExp:op.exp)):op.endExp),
						coll:(cnum>1?(first?op.firstColl:(last?op.lastColl:op.coll)):op.endColl),
						showSub:(cnum>1?(first?true:false):true),
						isLast:(cnum>1?(last?true:false):true)
					});
				});
				$("a", $this).click(function(){
					$("div." + op.selected, $this).removeClass(op.selected);
					$(this).parent().addClass(op.selected);
					if(op.select && $.isFunction(op.select)) {
						op.select($(this));
					}
					return false;
				});
			});
		},
		subTree:function(op, level) {
			return this.each(function(){
				$(">li", this).each(function(){
					$(this).data("last", ($(this).next()[0]?false:true));
					$(this).genTree({
						icon:op.icon,
						ckbox:op.ckbox,
						exp:$(this).data("last")?op.options.lastExp:op.options.exp,
						coll:$(this).data("last")?op.options.lastColl:op.options.coll,
						options:op.options,
						level:level,
						space:$(this).data("last")?null:op.space,
						isLast:$(this).data("last")
					});				
				});
			});
		},
		genTree:function(options) {
			var op = $.extend({icon:options.icon,ckbox:options.ckbox,exp:"", coll:"", showSub:false, level:0, options:null, isLast:false}, options);
			return this.each(function(){
				var node = $(this);
				var tree = $(">ul", node);
				if (tree.size()>0) {
					node.children(":first").wrap("<div></div>");
					$(">div", node).prepend("<div class='" + (op.showSub ? op.coll : op.exp) + "'></div>"+(op.ckbox?"<div class='ckbox unchecked'></div>":"")+(op.icon?"<div class='"+ (op.showSub ? op.options.folderColl : op.options.folderExp) +"'></div>":""));
					op.showSub ? tree.show() : tree.hide();
					$(">div>div", node).filter(":first").click(function(){
						$(this).toggleClass(op.exp).toggleClass(op.coll);
						if (op.icon) {
							var next=$(this).next();
							if(op.ckbox) next = next.next();
							next.toggleClass(op.options.folderExp).toggleClass(op.options.folderColl);
						}
						(tree.is(":hidden"))?tree.slideDown("fast"):tree.slideUp("fast");
						return false;
					});
					addSpace(op.level, node);
					tree.subTree(op, op.level + 1);
				} else {
					node.children().wrap("<div></div>");					
					$(">div", node).prepend("<div class='node'></div>"+(op.ckbox?"<div class='ckbox unchecked'></div>":"")+(op.icon?"<div class='file'></div>":""));
					addSpace(op.level, node);
					if(op.isLast)$(node).addClass("last");
				}
				if (op.ckbox) node._check();
				$(">div",node).mouseover(function(){
					$(this).addClass("hover");
				}).mouseout(function(){
					$(this).removeClass("hover");
				});
				if($.browser.msie)
					$(">div",node).click(function(){
						$("a", this).trigger("click");
						return false;
					});
			});
			function addSpace(level,node) {
				if (level > 0) {					
					var parent = node.parent().parent();
					!parent.next()[0]?$(node).data("space","indent"):$(node).data("space","line");
					var plist = "<div class='" + $(node).data("space") + "'></div>";
					if (level > 1) {
						var next = $(">div>div", parent).filter(":first");
						while(level > 1){
							plist = "<div class='" + next.attr("class") + "'></div>" + plist;
							next = next.next();
							level--;
						}
					}
					$(">div", node).prepend(plist);
				}
			}
		},
		_check:function() {
			var node = $(this);
			var ckbox = $(">div>.ckbox", node);
			var $input = $("a", node);
			ckbox.append("<input type='checkbox' name='" + $input.attr("tname") + "' value='" + $input.attr("tvalue") + "' style='display:none;'/>")	
				 .each(function(){
					var $this = $(this);
					$this.click(function(){
						$this.data("checked", $this.hasClass("checked"))
							 .data("aClass",$this.data("checked")?"unchecked":"checked")
						     .data("rClass",$this.data("checked")?"checked":"unchecked")
							 .removeClass($this.data("rClass")).removeClass(!$this.data("checked")?"indeterminate":"").addClass($this.data("aClass"));
						$("input", $this).attr("checked", !$this.data("checked"));
						$(">ul", node).find("li").each(function(){
							var box = $("div.ckbox", this);
							box.removeClass($this.data("rClass")).removeClass(!$this.data("checked")?"indeterminate":"").addClass($this.data("aClass"))
							   .find("input").attr("checked", !$this.data("checked"));
						});
						$(node)._checkParent();
						return false;
					});
			});
		},
		_checkParent:function(){
			if($(this).parent().hasClass("tree")) return;
			var parent = $(this).parent().parent();
			var stree = $(">ul", parent);
			var ckbox = stree.find("div.ckbox").size();
			var ckboxed = stree.find("div.checked").size();
			var aClass = (ckboxed==ckbox?"checked":(ckboxed!=0?"indeterminate":"unchecked"));
			var rClass = (ckboxed==ckbox?"indeterminate":(ckboxed!=0?"checked":"indeterminate"));
			$(">div>.ckbox", parent).removeClass("unchecked").removeClass(rClass).addClass(aClass);
			parent._checkParent();
		}
	});
})(jQuery);/**
 * @version 1.0
 */
var jmenus = [];
(function($) {
	
// If the DWZ scope is not available, add it
$.dwz = $.dwz || {};

$.fn.extend({
	accordion: function(options, data) {
		var args = Array.prototype.slice.call(arguments, 1);

		$(window).resize(fillSpace);
		return this.each(function() {
			jmenus.push(this);
			if (typeof options == "string") {
				var accordion = $.data(this, "dwz-accordion");
				accordion[options].apply(accordion, args);
			// INIT with optional options
			} else if (!$(this).is(".dwz-accordion"))
				$.data(this, "dwz-accordion", new $.dwz.accordion(this, options));
		});
	},
	/**
	 * deprecated, use accordion("activate", index) instead
	 * @param {Object} index
	 */
	activate: function(index) {
		return this.accordion("activate", index);
	}	
});

$.dwz.accordion = function(container, options) {
	
	// setup configuration
	this.options = options = $.extend({}, $.dwz.accordion.defaults, options);
	this.element = container;
	
	$(container).addClass("dwz-accordion");
	if ( options.navigation ) {
		var current = $(container).find("a").filter(options.navigationFilter);
		if ( current.length ) {
			if ( current.filter(options.header).length ) {
				options.active = current;
			} else {
				options.active = current.parent().parent().prev();
				current.addClass("current");
			}
		}
	}
	// calculate active if not specified, using the first header
	options.headers = $(container).find(options.header);
	options.active = findActive(options.headers, options.active);

	if ( options.fillSpace ) {
		fillSpace();		
	} else if ( options.autoheight ) {
		var maxHeight = 0;
		options.headers.next().each(function() {
			maxHeight = Math.max(maxHeight, $(this).outerHeight());
		}).height(maxHeight);
	}

	options.headers
		.not(options.active || "")
		.next()
		.hide();
	options.active.find("h2").addClass(options.selectedClass);
	
	if (options.event)
		$(container).bind((options.event) + ".dwz-accordion", clickHandler);
};

$.dwz.accordion.prototype = {
	activate: function(index) {
		// call clickHandler with custom event
		clickHandler.call(this.element, {
			target: findActive( this.options.headers, index )[0]
		});
	},
	
	enable: function() {
		this.options.disabled = false;
	},
	disable: function() {
		this.options.disabled = true;
	},
	destroy: function() {
		this.options.headers.next().css("display", "");
		if ( this.options.fillSpace || this.options.autoheight ) {
			this.options.headers.next().css("height", "");
		}
		$.removeData(this.element, "dwz-accordion");
		$(this.element).removeClass("dwz-accordion").unbind(".dwz-accordion");
	}
}

function scopeCallback(callback, scope) {
	return function() {
		return callback.apply(scope, arguments);
	};
}

function completed(cancel) {
	// if removed while animated data can be empty
	if (!$.data(this, "dwz-accordion"))
		return;
	var instance = $.data(this, "dwz-accordion");
	var options = instance.options;
	options.running = cancel ? 0 : --options.running;
	if ( options.running )
		return;
	if ( options.clearStyle ) {
		options.toShow.add(options.toHide).css({
			height: "",
			overflow: ""
		});
	}
	$(this).triggerHandler("change.dwz-accordion", [options.data], options.change);
}

function fillSpace(){
	$.each(jmenus, function(index){
		var obj = jmenus[index];
		var parent = $(obj).parent();
		var height = parseInt(parent.css("height")) - (($(".accordionHeader", obj).size()) * ($(".accordionHeader" +":first-child", obj).outerHeight()));

		var os = parent.children().not(obj);
		$.each(os, function(i){
			height = height - $(os[i]).outerHeight();
		});
		$(".accordionContent",obj).height(height);
	});
}

function toggle(toShow, toHide, data, clickedActive, down) {
	var options = $.data(this, "dwz-accordion").options;
	options.toShow = toShow;
	options.toHide = toHide;
	options.data = data;
	var complete = scopeCallback(completed, this);
	
	// count elements to animate
	options.running = toHide.size() == 0 ? toShow.size() : toHide.size();
	
	if ( options.animated ) {
		if ( !options.alwaysOpen && clickedActive ) {
			$.dwz.accordion.animations[options.animated]({
				toShow: jQuery([]),
				toHide: toHide,
				complete: complete,
				down: down,
				autoheight: options.autoheight
			});
		} else {
			$.dwz.accordion.animations[options.animated]({
				toShow: toShow,
				toHide: toHide,
				complete: complete,
				down: down,
				autoheight: options.autoheight
			});
		}
	} else {
		if ( !options.alwaysOpen && clickedActive ) {
			toShow.toggle();
		} else {
			toHide.hide();
			toShow.show();
		}
		complete(true);
	}
}

function clickHandler(event) {
	var options = $.data(this, "dwz-accordion").options;
	if (options.disabled)
		return false;
	
	// called only when using activate(false) to close all parts programmatically
	if ( !event.target && !options.alwaysOpen ) {
		options.active.find("h2").toggleClass(options.selectedClass);
		var toHide = options.active.next(),
			data = {
				instance: this,
				options: options,
				newHeader: jQuery([]),
				oldHeader: options.active,
				newContent: jQuery([]),
				oldContent: toHide
			},
			toShow = options.active = $([]);
		toggle.call(this, toShow, toHide, data );
		return false;
	}
	// get the click target
	var clicked = $(event.target);
	
	// due to the event delegation model, we have to check if one
	// of the parent elements is our actual header, and find that
	if ( clicked.parents(options.header).length )
		while ( !clicked.is(options.header) )
			clicked = clicked.parent();
	
	var clickedActive = clicked[0] == options.active[0];
	
	// if animations are still active, or the active header is the target, ignore click
	if (options.running || (options.alwaysOpen && clickedActive))
		return false;
	if (!clicked.is(options.header))
		return;

	// switch classes
	options.active.find("h2").toggleClass(options.selectedClass);
	if ( !clickedActive ) {
		clicked.find("h2").addClass(options.selectedClass);
	}

	// find elements to show and hide
	var toShow = clicked.next(),
		toHide = options.active.next(),
		//data = [clicked, options.active, toShow, toHide],
		data = {
			instance: this,
			options: options,
			newHeader: clicked,
			oldHeader: options.active,
			newContent: toShow,
			oldContent: toHide
		},
		down = options.headers.index( options.active[0] ) > options.headers.index( clicked[0] );
	
	options.active = clickedActive ? $([]) : clicked;
	toggle.call(this, toShow, toHide, data, clickedActive, down );

	return false;
};

function findActive(headers, selector) {
	return selector != undefined
		? typeof selector == "number"
			? headers.filter(":eq(" + selector + ")")
			: headers.not(headers.not(selector))
		: selector === false
			? $([])
			: headers.filter(":eq(0)");
}

$.extend($.dwz.accordion, {
	defaults: {
		selectedClass: "collapsable",
		alwaysOpen: true,
		animated: 'slide',
		event: "click",
		header: ".accordionHeader",
		autoheight: true,
		running: 0,
		navigationFilter: function() {
			return this.href.toLowerCase() == location.href.toLowerCase();
		}
	},
	animations: {
		slide: function(options, additions) {
			options = $.extend({
				easing: "swing",
				duration: 300
			}, options, additions);
			if ( !options.toHide.size() ) {
				options.toShow.animate({height: "show"}, options);
				return;
			}
			var hideHeight = options.toHide.height(),
				showHeight = options.toShow.height(),
				difference = showHeight / hideHeight;
			options.toShow.css({ height: 0}).show();
			options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate({height:"hide"},{
				step: function(now) {
					var current = (hideHeight - now) * difference;
					if ($.browser.msie || $.browser.opera) {
						current = Math.ceil(current);
					}
					options.toShow.height( current );
				},
				duration: options.duration,
				easing: options.easing,
				complete: function() {
					if ( !options.autoheight ) {
						options.toShow.css("height", "auto");
					}
					options.complete();
				}
			});
		},
		bounceslide: function(options) {
			this.slide(options, {
				easing: options.down ? "bounceout" : "swing",
				duration: options.down ? 1000 : 200
			});
		},
		easeslide: function(options) {
			this.slide(options, {
				easing: "easeinout",
				duration: 700
			})
		}
	}
});
})(jQuery);
$(document).ready(function() {
	initLayout();
	$(window).resize(function(){
		initLayout();
		$("#container .tabsPageContent [layoutH]").layoutH();
	});

	$("#leftside").jbar({obj:"#sidebar", minW:150, maxW:700, move:"left"});	

	navTab.init();
	$.taskBar.init();
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
		$(this).validate({focusInvalid:false, focusCleanup:true, errorElement:"span"});
	});
	
	$("textarea.editor").each(function(){
		var oFCKeditor = new FCKeditor($(this).attr("name"));
		oFCKeditor.BasePath	= "fckeditor/";
		oFCKeditor.Config.LinkBrowser = false;
		oFCKeditor.Config.ImageBrowser = false;
		oFCKeditor.Config.FlashBrowser = false;
		oFCKeditor.Config.LinkUpload = false;
		oFCKeditor.Config.ImageUpload = false;
		oFCKeditor.Config.FlashUpload = false;
		oFCKeditor.ToolbarSet = 'SystemBar';
		oFCKeditor.ReplaceTextarea();
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

	//Grid ToolBar
	$("div.panelBar li, div.panelBar .pagination li", jParent).hoverClass("hover");
		
	//Button
	$("div.button", jParent).hoverClass("buttonHover");
	$("div.buttonActive", jParent).hoverClass("buttonActiveHover");
	
	//tabsPageHeader
	$("div.tabsHeader li, div.tabsPageHeader li, div.accordionHeader, div.accordion", jParent).hoverClass("hover");
	
}

/**
 * Theme Plugins
 * @author Zhang Huihua
 */
(function($){
	$.fn.extend({
		theme: function(options){
			var op = $.extend({themeBase:"themes"}, options);
			var _themeHref = op.themeBase + "/#theme#/style.css";
			return this.each(function(){
				var jThemeLi = $(this).find(">li[theme]");
				jThemeLi.each(function(index){
					$(this).click(function(){
						$("head").find("link[href$=style.css]").attr("href", _themeHref.replace("#theme#", $(this).attr("theme")));
						jThemeLi.find(">div").removeClass("selected").eq(index).addClass("selected");
					});
				});
			});
		}
	});
})(jQuery);
/**
 * @desc 兼容不同的浏览器居中scrollCenter
 * @author Zhang Huihua
 */
(function($){
	$.fn.extend({

		getWindowSize: function(){
			if ($.browser.opera) { return { width: window.innerWidth, height: window.innerHeight }; }
			return { width: $(window).width(), height: $(window).height() };
		},
		/**
		 * @param options
		 */		
		scrollCenter: function(options){
			// 扩展参数
			var op = $.extend({ z: 1000000, mode:"WH"}, options);
			
			// 追加到 document.body 并设置其样式
			var windowSize = this.getWindowSize();

			if (op.mode == "W") {
				this.appendTo(document.body).css({
					'left': (windowSize.width - this.width()) / 2 + $(window).scrollLeft() + 'px'
				});
			} else if (op.model == "H"){
				this.appendTo(document.body).css({
					'top': (windowSize.height - this.height()) / 2 + $(window).scrollTop() + 'px'
				});	
			} else {
				this.appendTo(document.body).css({
				//	'position': 'absolute',
				//	'z-index': op.z,
					'top': (windowSize.height - this.height()) / 2 + $(window).scrollTop() + 'px',
					'left': (windowSize.width - this.width()) / 2 + $(window).scrollLeft() + 'px'
				});
			}

			
			// 保存当前位置参数
			var bodyScrollTop = $(document).scrollTop();
			var bodyScrollLeft = $(document).scrollLeft();
			var movedivTop = this.offset().top;
			var movedivLeft = this.offset().left;
			
			var thisjQuery = this;
			
			// 滚动事件
			$(window).scroll(function(e){
				var windowSize = thisjQuery.getWindowSize();
				var tmpBodyScrollTop = $(document).scrollTop();
				var tmpBodyScrollLeft = $(document).scrollLeft();
				
				movedivTop += tmpBodyScrollTop - bodyScrollTop;
				movedivLeft += tmpBodyScrollLeft - bodyScrollLeft;
				bodyScrollTop = tmpBodyScrollTop;
				bodyScrollLeft = tmpBodyScrollLeft;

				// 以动画方式进行移动
				if (op.mode == "W") {
					thisjQuery.stop().animate({
						'left': movedivLeft + 'px'
					});
				} else if (op.mode == "H") {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px'
					});
				} else {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px',
						'left': movedivLeft + 'px'
					});
				}
				
			});
			
			// 窗口大小重设事件
			$(window).resize(function(){
				var windowSize = thisjQuery.getWindowSize();
				movedivTop = (windowSize.height - thisjQuery.height()) / 2 + $(document).scrollTop();
				movedivLeft = (windowSize.width - thisjQuery.width()) / 2 + $(document).scrollLeft();
				
				if (op.mode == "W") {
					thisjQuery.stop().animate({
						'left': movedivLeft + 'px'
					});
				} else if (op.mode == "H") {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px'
					});
				} else {
					thisjQuery.stop().animate({
						'top': movedivTop + 'px',
						'left': movedivLeft + 'px'
					});
				}
				
			});
			
			return this;
		}
	});
})(jQuery);/**
 * @author Zhang Huihua
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
};/**
 * @author Zhang Huihua
 * 
 */
(function($){
	$.fn.extend({

		/**
		 * options: reverse[true, false], eventType[click, hover], curentIndex[default index 0]
		 * 			stTab[tabs selector], stTabPanel[tab panel selector]
		 * 			ajaxClass[ajax load], closeClass[close tab]
		 */ 
		tabs: function (options){
			var op = $.extend({reverse:false, eventType:"click", curentIndex:0, stTabHeader:"> .tabsHeader", stTab:">.tabsHeaderContent>ul", stTabPanel:"> .tabsContent", ajaxClass:"j-ajax", closeClass:"close", prevClass:"tabsLeft", nextClass:"tabsRight"}, options);
			var aTemp = {left:0, leftIndex:0};
			
			return this.each(function(){
				var jT = $(this);
				initTab(jT);
			});
			
			function initTab(jT){
				var jSelector = jT.add($("> *", jT));
				var jTabHeader = $(op.stTabHeader, jSelector);
				var jTabs = $(op.stTab + " li", jTabHeader);
				var jGroups = $(op.stTabPanel + " > *", jSelector);

				jTabs.unbind().find("a").unbind();
				jTabHeader.find("."+op.prevClass).unbind();
				jTabHeader.find("."+op.nextClass).unbind();
				
				jTabs.each(function(iTabIndex){
					if (op.curentIndex == iTabIndex) $(this).addClass("selected");
					else $(this).removeClass("selected");
					
					if (op.eventType == "hover") $(this).hover(function(event){switchTab(jT, iTabIndex)});
					else $(this).click(function(event){switchTab(jT, iTabIndex)});

					$("a", this).each(function(){
						if ($(this).hasClass(op.ajaxClass)) {
							$(this).click(function(event){
								var jGroup = jGroups.eq(iTabIndex);
								if (this.href && !jGroup.html()) jGroup.loadUrl(this.href);
								if (op.eventType == "click") switchTab(jT, iTabIndex);
								return false;
							});
						} else if ($(this).hasClass(op.closeClass)) {
							$(this).click(function(event){
								jTabs.eq(iTabIndex).remove();
								jGroups.eq(iTabIndex).remove();
								if (iTabIndex == op.curentIndex) {
									op.curentIndex = (iTabIndex+1 < jTabs.size()) ? iTabIndex : iTabIndex - 1;
								} else if (iTabIndex < op.curentIndex){
									op.curentIndex = iTabIndex;
								}
								initTab(jT);
								return false;
							});
						}
					});
				});
				
				jGroups.hide().each(function(iGroupIndex){
					if (op.curentIndex == iGroupIndex) $(this).show();
				});

			}
			
			function switchTab(jT, iTabIndex){
				var jSelector = jT.add($("> *", jT));
				var jTabHeader = $(op.stTabHeader, jSelector);
				var jTabs = $(op.stTab + " li", jTabHeader);
				var jGroups = $(op.stTabPanel + " > *", jSelector);
				
				var jTab = jTabs.eq(iTabIndex);
				if (op.reverse && (jTab.hasClass("selected") )) {
					jTabs.removeClass("selected");
					jGroups.hide();
				} else {
					op.curentIndex = iTabIndex;
					jTabs.removeClass("selected");
					jTab.addClass("selected");
					jGroups.hide().each(function(iGroupIndex){
						if (op.curentIndex == iGroupIndex) $(this).show();
					});
				}
			}
			
		}
	});
})(jQuery);/**
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
})(jQuery);/**
 * @author Roger Wu
 */
(function($){
	$.pdialog = {
		_op:{defH:300, defW:500, minH:250, minW:300,total:20},
		_current:null,
		_zIndex:42,
		init:function(options){
			$.extend(this._op, options);
		},
		//打开一个层
		open:function(url, dlgid,title) {
			var dialog = $("body").data(dlgid);
			//重复打开一个层
			if(dialog) {
				if(dialog.is(":hidden")) {
					dialog.show();
				}
				dialog.find(".dialogHeader").find("h1").html(title);
				this.switchDialog(dialog);
				var jDContent = dialog.find(".dialogContent");
				jDContent.loadUrl(url, {}, function(){
					jDContent.find("[layoutH]").layoutH(jDContent);
					$(".pageContent", dialog).css("width", $(dialog).cssv("width")-14);
				});
			} else {
				//打开一个全新的层
				$("body").append(DWZ.frag["dialogFrag"]);
				dialog = $(">.dialog:last-child", "body");
				dialog.data("id",dlgid);
				dialog.find(".dialogHeader").find("h1").html(title);
				$(dialog).css("zIndex", ($.pdialog._zIndex+=2));
				$(".shadow").css("zIndex", $.pdialog._zIndex - 3).show();
				$.pdialog._init(dialog);
				$(dialog).click(function(){
					$.pdialog.switchDialog(dialog);
				});
				dialog.jresize().dialogDrag();
				$("a.close", dialog).click(function(event){ 
					$.pdialog.close(dialog);
					return false;
				});
				$("a.maximize",dialog).click(function(event){
					$.pdialog.switchDialog(dialog);
					$.pdialog.maxsize(dialog);
					dialog.jresize("destroy").dialogDrag("destroy");
					return false;
				});
				$("a.restore",dialog).click(function(event){
					$.pdialog.restore(dialog);
					dialog.jresize().dialogDrag();
					return false;
				});
				$("a.minimize",dialog).click(function(event){
					$.pdialog.minimize(dialog);
					return false;
				});
				$("div.dialogHeader a", dialog).mousedown(function(){
					return false;
				});
				$("div.dialogHeader", dialog).dblclick(function(){
					if($("a.restore",dialog).is(":hidden"))
						$("a.maximize",dialog).trigger("click");
					else
						$("a.restore",dialog).trigger("click");
				});
				$("body").data(dlgid, dialog);
				$.pdialog._current = dialog;
				$.pdialog.attachShadow(dialog);
				//load data
				var jDContent = $(".dialogContent",dialog);
				jDContent.loadUrl(url, {}, function(){
					jDContent.find("[layoutH]").layoutH(jDContent);
					$(".pageContent", dialog).css("width", $(dialog).cssv("width")-14);
				});
			    
			}
			//add a task to task bar
			$.taskBar.addDialog(dlgid,title);
		},
		/**
		 * 切换当前层
		 * @param {Object} dialog
		 */
		switchDialog:function(dialog) {
			var index = $(dialog).css("zIndex");
			$.pdialog.attachShadow(dialog);
			if($.pdialog._current) {
				var cindex = $($.pdialog._current).css("zIndex");
				$($.pdialog._current).css("zIndex", index);
				$(dialog).css("zIndex", cindex);
				$(".shadow").css("zIndex", cindex - 1);
				$.pdialog._current = dialog;
			}
			$.taskBar.switchTask(dialog.data("id"));
		},
		/**
		 * 给当前层附上阴隐层
		 * @param {Object} dialog
		 */
		attachShadow:function(dialog) {
			var shadow = $(".shadow");
			if(shadow.is(":hidden")) shadow.show();
			shadow.css({
				top: parseInt($(dialog)[0].style.top) - 2,
				left: parseInt($(dialog)[0].style.left) - 4,
				height: parseInt($(dialog).css("height")) + 8,
				width: parseInt($(dialog).css("width")) + 8,
				zIndex:parseInt($(dialog).css("zIndex")) - 1
			});
			$(".shadow_c", shadow).children().andSelf().each(function(){
				$(this).css("height", $(dialog).outerHeight() - 4);
			});
		},
		_init:function(dialog) {
			var height = this._op.defH>this._op.minH?this._op.defH:this._op.minH;
			var width = this._op.defW>this._op.minW?this._op.defW:this._op.minW;
			if(isNaN($(dialog).css("height")) || ($(dialog).css("height")) < height){
				dialog.css("height", height+"px");
				$(".dialogContent",dialog).css("height", height - $(".dialogHeader", dialog).outerHeight() - $(".dialogFooter", dialog).outerHeight() - 6);
			}
			if(isNaN($(dialog).css("width")) || ($(dialog).css("width")) < width) {
				$(dialog).css("width", width+"px");				
			}						
		},
		/**
		 * 初始化半透明层
		 * @param {Object} resizable
		 * @param {Object} dialog
		 * @param {Object} target
		 */
		initResize:function(resizable, dialog,target) {
			$("body").css("cursor", target + "-resize");
			resizable.css({
				top: $(dialog).css("top"),
				left: $(dialog).css("left"),
				height:$(dialog).css("height"),
				width:$(dialog).css("width")
			});
			resizable.show();
		},
		/**
		 * 改变阴隐层
		 * @param {Object} target
		 * @param {Object} options
		 */
		repaint:function(target,options){
			var shadow = $(".shadow");
			if(target != "w" && target != "e") {
				shadow.css("height", shadow.outerHeight() + options.tmove);
				$(".shadow_c", shadow).children().andSelf().each(function(){
					$(this).css("height", $(this).outerHeight() + options.tmove);
				});
			}
			if(target == "n" || target =="nw" || target == "ne") {
				shadow.css("top", options.otop - 2);
			}
			if(options.owidth && (target != "n" || target != "s")) {
				shadow.css("width", options.owidth + 8);
			}
			if(target.indexOf("w") >= 0) {
				shadow.css("left", options.oleft - 4);
			}
		},
		/**
		 * 改变左右拖动层的高度
		 * @param {Object} target
		 * @param {Object} tmove
		 * @param {Object} dialog
		 */
		resizeTool:function(target, tmove, dialog) {
			$("div[class^='resizable']", dialog).filter(function(){
				return $(this).attr("tar") == 'w' || $(this).attr("tar") == 'e';
			}).each(function(){
				$(this).css("height", $(this).outerHeight() + tmove);
			});
		},
		/**
		 * 改变原始层的大小
		 * @param {Object} obj
		 * @param {Object} dialog
		 * @param {Object} target
		 */
		resizeDialog:function(obj, dialog, target) {
			var oleft = parseInt(obj.style.left);
			var otop = parseInt(obj.style.top);
			var height = parseInt(obj.style.height);
			var width = parseInt(obj.style.width);
			if(target == "n" || target == "nw") {
				tmove = parseInt($(dialog).css("top")) - otop;
			} else {
				tmove = height - parseInt($(dialog).css("height"));
			}
			$(dialog).css({left:oleft,width:width,top:otop,height:height});
			$(".dialogContent", dialog).css("width", (width-12) + "px");
			$(".pageContent", dialog).css("width", (width-14) + "px");
			if (target != "w" && target != "e") {
				var content = $(".dialogContent", dialog);
				content.css({height:height - $(".dialogHeader", dialog).outerHeight() - $(".dialogFooter", dialog).outerHeight() - 6});
				content.find("[layoutH]").layoutH(content);
				$.pdialog.resizeTool(target, tmove, dialog);
			}
			$.pdialog.repaint(target, {oleft:oleft,otop: otop,tmove: tmove,owidth:width});
		},
		close:function(dialog) {
			$(dialog).hide();
			$("div.dialogContent", dialog).html("");
			$(".shadow").hide();
			$.taskBar.closeDialog($(dialog).data("id"));
		},
		maxsize:function(dialog) {
			$(dialog).data("original",{
				top:$(dialog).css("top"),
				left:$(dialog).css("left"),
				width:$(dialog).css("width"),
				height:$(dialog).css("height")
			});
			$("a.maximize",dialog).hide();
			$("a.restore",dialog).show();
			var iContentW = $(window).width();
			var iContentH = $(window).height() - 34;
			$(dialog).css({top:"0px",left:"0px",width:iContentW+"px",height:iContentH+"px"});
			$.pdialog._resizeContent(dialog,iContentW,iContentH);
		},
		restore:function(dialog) {
			var original = $(dialog).data("original");
			var dwidth = parseInt(original.width);
			var dheight = parseInt(original.height);
			$(dialog).css({
				top:original.top,
				left:original.left,
				width:dwidth,
				height:dheight
			});
			$.pdialog._resizeContent(dialog,dwidth,dheight);
			$("a.maximize",dialog).show();
			$("a.restore",dialog).hide();
			$.pdialog.attachShadow(dialog);
		},
		minimize:function(dialog){
			$(dialog).hide();
			$(".shadow").hide();
			var task = $.taskBar.getTask($(dialog).data("id"));
			$(".resizable").css({
				top: $(dialog).css("top"),
				left: $(dialog).css("left"),
				height:$(dialog).css("height"),
				width:$(dialog).css("width")
			}).show().animate({top:$(window).height()-60,left:task.position().left,width:task.outerWidth(),height:task.outerHeight()},250,function(){
				$(this).hide();
				$.taskBar.inactive($(dialog).data("id"));
			});
		},
		_resizeContent:function(dialog,width,height) {
			var content = $(".dialogContent", dialog);
			content.css({width:(width-12) + "px",height:height - $(".dialogHeader", dialog).outerHeight() - $(".dialogFooter", dialog).outerHeight() - 6});
			content.find("[layoutH]").layoutH(content);
			$(".pageContent", dialog).css("width", (width-14) + "px");
		}
	};
})(jQuery);/**
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
})(jQuery);/**
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
				$(this).html("<div class='gridCol'>"+ $(this).html() +"</div>");
			});
			for(var i = 0, l = ths.size(); i<l; i++){
				var $th = $(ths[i]);
				tlength += parseInt($th.css("width"));
				$th.html("<div class='gridCol'>"+ $th.html() +"</div>");		
			}
			//setTimeout(function(){
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
			//},1);
			setTimeout(function(){
				lastH.click(function(e){
					var $th = $(e.target).parent();
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
			tbody.wrap("<div class='gridScroller' layoutH='" + layoutH + "' style='width:" + (flength - (padleft + padright) - (brwidth + blwidth)) + "px;'><div class='gridTbody' style='width:" + (flength - 30) +"px;'><table style='width:" + (flength - 30) + "px;'></table></div></div>");
				var $ftr = $(">tr:first-child", tbody);
				var $ftds = $(">td", $ftr);
				var i = 0;
				for (var l = $ftds.size(); i < l; i++) {
					var $ftd = $($ftds[i]);
					$ftd.html("<div style=\"width:" + (parseInt($.jTableTool.styles[i][0]) - 9) + "px;\">" + $ftd.html() + "</div>");
					$ftd.addClass($.jTableTool.styles[i][1]);
				}
				$("tr", tbody).each(function(){
					$(this).hover(function(){
						$(this).addClass("hover");
					},function(){
						$(this).removeClass("hover");
					}).click(function(){
						$("tr",tbody).filter(".selected").removeClass("selected");
						$(this).addClass("selected");
						var sTarget = $(this).attr("target");
						if (sTarget){
							$("#"+sTarget).val($(this).attr("rel"));
						}
					});
				});
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
												tbparent.css("width", tbparent.outerWidth() + move);
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
														$(">div", $ths.eq(i + j)).css("width", cellW[j] + parseInt((cellW[j] * move / totalW).toFixed(0)));
													}
												} else {
													var $div = $(">div", $(th));
													$div.css("width", $div.outerWidth() + move);
												}
												var $lastH = $(">tr:last-child", thead);						
												var tbody = $(".gridTbody", parent);
												tbody.css("width", tbody.outerWidth() + move);
												var $table = $(">table", tbody);
												var $ftr = $(">tbody>tr", $table);
												var tds = $(">td", $ftr);
												if(subTitle[0]) {													
													for(var k = start -1, j = 0; j < cols; j++) {
														var dcell = $(tds).eq(k + j);
														$(">div",dcell).css("width", $(">th>div",$lastH).eq(k + j).css("width"));
													}
												} else {
													
													var $dcell = $(tds).eq(cellNum - 1);
													$(">div",$dcell).css("width", $(">th>div",$lastH).eq(cellNum - 1).css("width"));
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
/**
 * @author Roger Wu
 * @version 1.0
 */
(function($){

	$.fn.extend({jTask:function(options){

		return this.each(function(){ //定义栏中各个任务的操作
			var task = this;
			var id = $(task).attr("id");
			$(task).click(function(e){
				var dialog = $("body").data(id);
				if ($(task).hasClass("selected")) {
					$("a.minimize", dialog).trigger("click");
				} else {
					if (dialog.is(":hidden")) {
						$(".resizable").css({top: $(window).height()-60,left:$(task).position().left,height:$(task).outerHeight(),width:$(task).outerWidth()
						}).show().animate({top:$(dialog).css("top"),left: $(dialog).css("left"),width:$(dialog).css("width"),height:$(dialog).css("height")},250,function(){
							$(this).hide();
							$(dialog).show();
							$.pdialog.attachShadow(dialog);
						});
						$.taskBar.switchTask(id);
					} else
						$(dialog).trigger("click");
				}
				$.taskBar.scrollCurrent($(this));
				return false;
			});
			$("div.close", task).click(function(e){
				var dialog = $("body").data(id);
				$("a.close",dialog).trigger("click");
				return false;
			}).hoverClass("closeHover");
		});
	}
	});
	$.taskBar = {
		_taskBar:null,
		_taskBox:null,
		_prevBut:null,
		_nextBut:null,
		_barWidth:0,
		_op:{id:"taskbar", taskBox:"div.taskbarContent",prevBut:".taskbarLeft",prevDis:"taskbarLeftDisabled", nextBut:".taskbarRight",nextDis:"taskbarRightDisabled", selected:"selected",boxMargin:"taskbarMargin"},
		init:function(options) {
			var $this = this;
			$.extend(this._op, options);
			this._taskBar = $("#" + this._op.id);
			this._taskBox = this._taskBar.find(this._op.taskBox);
			this._taskList = this._taskBox.find(">ul");
			this._prevBut = this._taskBar.find(this._op.prevBut);
			this._nextBut = this._taskBar.find(this._op.nextBut);
			this._barWidth = this._taskBar.innerWidth(true);
			this._prevBut.click(function(e){$this.scrollLeft()});
			this._nextBut.click(function(e){$this.scrollRight()});
		},
		/**
		 * 在任务栏上新加一个任务
		 * @param {Object} id
		 * @param {Object} title
		 */
		addDialog: function(id, title){
			this.show();
			var task = $("#"+id,this._taskList);
			if (!task[0]) {
				var taskFrag = '<li id="#taskid#"><div class="taskbutton"><span>#title#</span></div><div class="close">Close</div></li>';
				this._taskList.append(taskFrag.replace("#taskid#", id).replace("#title#", title));
				task = $("#"+id,this._taskList);
				task.jTask();
			} else {
				$(">div>span", task).text(title);
			}
			this.switchTask(id);
			this._scrollTask(task);
		},
		/**
		 * 关闭一个任务
		 * @param {Object} id
		 */
		closeDialog: function(id){
			var task = $("#"+id, this._taskList);
			task.remove();
			if(this._getTasks().size() == 0){
				this.hide();
			}			
			this._scrollCurrent();
		},
		_scrollCurrent:function(){
			var iW = this._tasksW(this._getTasks());
			if (iW > this._getTaskBarW()) {
				var $this = this;
				var lTask = $(">li:last-child", this._taskList);
				var left = this._getTaskBarW() - lTask.position().left - lTask.outerWidth(true);
				this._taskList.animate({
					left: left + 'px'
				}, 200, function(){
					$this._ctrlScrollBut();
				});
			} else {
				this._ctrlScrollBut();
			}
		},
		/**
		 * 向左移一个任务
		 */
		scrollLeft: function(){
			var task = this._visibleStart();
			this._scrollTask(task);
		},
		/**
		 * 向右移一个任务
		 */
		scrollRight: function(){
			var task = this._visibleEnd();
			this._scrollTask(task);
		},
		/**
		 * 移出当前点击的任务
		 * @param {Object} task
		 */
		scrollCurrent:function(task){
			this._scrollTask(task);
		},
		_getTaskBarW:function(){
			return this._taskBox.width()- (this._prevBut.is(":hidden")?this._prevBut.width()+2:0) - (this._nextBut.is(":hidden")?this._nextBut.width()+2:0);
		},
		_scrollTask:function(task){
			var $this = this;
			if(task.position().left + this._getLeft()+task.outerWidth() > this._barWidth) {
				var left = this._getTaskBarW()- task.position().left  - task.outerWidth(true) - 2;
				this._taskList.animate({left: left + 'px'}, 200, function(){
					$this._ctrlScrollBut();
				});
			} else if(task.position().left + this._getLeft() < 0) {
				var left = this._getLeft()-(task.position().left + this._getLeft());
				this._taskList.animate({left: left + 'px'}, 200, function(){
					$this._ctrlScrollBut();
				});
			}
		},
		/**
		 * 控制左右移动按钮何时显示与隐藏
		 */
		_ctrlScrollBut:function(){
			var iW = this._tasksW(this._getTasks());
			if (this._getTaskBarW() > iW) {
				this._taskBox.removeClass(this._op.boxMargin);
				this._nextBut.hide();
				this._prevBut.hide();
				if(this._getTasks().eq(0)[0])this._scrollTask(this._getTasks().eq(0));
			} else {
				this._taskBox.addClass(this._op.boxMargin);
				this._nextBut.show().removeClass(this._op.nextDis);
				this._prevBut.show().removeClass(this._op.prevDis);
				if (this._getLeft() >= 0){
					this._prevBut.addClass(this._op.prevDis);
				}
				if (this._getLeft() <= this._getTaskBarW() - iW) {
					this._nextBut.addClass(this._op.nextDis);
				} 
			}
		},
		_getLeft: function(){
			return this._taskList.position().left;
		},
		/**
		 * 取得第一个完全显示在taskbar上的任务
		 */
		_visibleStart: function(){
			var iLeft = this._getLeft();
			var jTasks = this._getTasks();
			for (var i=0; i<jTasks.size(); i++){
				if (jTasks.eq(i).position().left + jTasks.eq(i).outerWidth(true) + iLeft >= 0) return jTasks.eq(i);
			}
			return jTasks.eq(0);
		},
		/**
		 * 取得最后一个完全显示在taskbar上的任务
		 */
		_visibleEnd: function(){
			var iLeft = this._getLeft();
			var jTasks = this._getTasks();
			for (var i=0; i<jTasks.size(); i++){
				if (jTasks.eq(i).position().left + jTasks.eq(i).outerWidth(true) + iLeft > this._barWidth) return jTasks.eq(i);
			}
			return jTasks.eq(Tasks.size()-1);
		},
		/**
		 * 把任务变成不是当前的
		 * @param {Object} id
		 */
		inactive:function(id){
			$("#" + id, this._taskList).removeClass("selected");
		},
		/**
		 * 取得所有的任务
		 */
		_getTasks:function(){
			return this._taskList.find(">li");
		},
		/**
		 * 计算所传入的所有任务的宽度和
		 * @param {Object} jTasks
		 */
		_tasksW:function(jTasks){
			var iW = 0;
			jTasks.each(function(){
				iW += $(this).outerWidth(true);
			});
			return iW;
		},
		/**
		 * 切换任务
		 * @param {Object} id
		 */
		switchTask:function(id) {
			this._taskList.find(">.selected").removeClass("selected");
			$("#" + id, this._taskList).addClass("selected");
		},
		
		getTask:function(id) {
			return $("#" + id, this._taskList);
		},
		/**
		 * 显示任务栏
		 */
		show:function(){
			if (this._taskBar.is(":hidden")) {
				this._taskBar.css("top", $(window).height() - 34 + this._taskBar.outerHeight()).show();
				this._taskBar.animate({
					top: $(window).height() - this._taskBar.outerHeight()
				}, 500);
			}
		},
		/**
		 * 隐藏任务栏
		 */
		hide:function(){
			this._taskBar.animate({
				top: $(window).height() - 29 + this._taskBar.outerHeight(true)
			}, 500,function(){
				$.taskBar._taskBar.hide();
			});
		}
	}
})(jQuery);/**
 * @author Zhang Huihua
 * 
 */
function validateCallBack(form, callback) {
	if (!$(form).valid()) {
		alertMsg.error(DWZ.msg["validateFormError"]);
		return false; 
	}
	$.post(form.action, $(form).serializeArray(), $.isFunction(callback) ? callback : ajaxDone, "json");
	return false;
}
function ajaxDone(json){
	if(json.statusCode == 200) {
		if(json.message) alertMsg.correct(json.message);
	} else if (json.statusCode == 301) {
		alertMsg.error(json.message, {okCall:function(){
			window.location = DWZ.loginUrl;
		}});
	} else {
		if(json.message) alertMsg.error(json.message);
	};
}

function ifarmeCallback(form, callback){
	if(!$(form).valid()) {return false;}
	window.donecallback = $.isFunction(callback) ? callback : iframeDone;
	if ($("#callbackframe").size() == 0) { 
		$("<iframe id='callbackframe' name='callbackframe' src='about:blank' style='display:none'></iframe>").appendTo("body");
	}
	form.target = "callbackframe";
}
function iframeDone(response){
	if (response["statusCode"] == 300) {
		if (response["message"]) alertMsg.error(response["message"]);
	} else if (response["statusCode"] == 301) {
		alertMsg.error(response["message"], {okCall:function(){
			window.location = DWZ.loginUrl;
		}});
	} else {
		if (response["message"]) alertMsg.correct(response["message"]);
	}
}