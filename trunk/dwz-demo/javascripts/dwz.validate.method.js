/**
 * @requires jquery.validate.js
 * @author ZhangHuihua@msn.com
 */
(function($){
	$.validator.addMethod("alphanumeric", function(value, element) {
		return this.optional(element) || /^\w+$/i.test(value);
	}, "Letters, numbers, spaces or underscores only please");  
	
	$.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Letters only please"); 
	
	$.validator.addMethod("phone", function(v, element) {
	    v = v.replace(/\s+/g, ""); 
		return this.optional(element) || v.match(/^[0-9 \(\)]{7,30}$/);
	}, "Please specify a valid phone number");
	
	$.validator.addMethod("postcode", function(v, element) {
	    v = v.replace(/\s+/g, ""); 
		return this.optional(element) || v.match(/^[0-9 A-Za-z]{5,20}$/);
	}, "Please specify a valid postcode");
	
	
	$.validator.addClassRules({
		alphanumeric: { alphanumeric: true },
		lettersonly: { lettersonly: true },
		phone: { phone: true },
		postcode: {postcode: true}
	});
})(jQuery);