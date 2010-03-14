/**
 * @author ZhangHuihua@msn.com
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