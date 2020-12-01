/**
 * Created by huihuazhang on 16/4/9.
 */
(function($){
	$.fn.extend({
		selectedLoad: function(){

			function _getIds(selectedIds, targetType){
				var ids = "";
				var $box = targetType == "dialog" ? $.pdialog.getCurrent() : navTab.getCurrentPanel();
				$box.find("input:checked").filter("[name='"+selectedIds+"']").each(function(i){
					var val = $(this).val();
					ids += i==0 ? val : ","+val;
				});
				return ids;
			}
			return this.each(function(){
				var $this = $(this);
				var selectedIds = $this.attr("rel") || "ids";
				var postType = $this.attr("postType") || "map";

				$this.click(function(){
					var targetType = $this.attr("targetType");
					var ids = _getIds(selectedIds, targetType);
					if (!ids) {
						alertMsg.error($this.attr("warn") || DWZ.msg("alertSelectMsg"));
						return false;
					}

					function _doPost(){
						var data = function(){
							if (postType == 'map'){
								return $.map(ids.split(','), function(val, i) {
									return {name: selectedIds, value: val};
								});
							} else {
								var _data = {};
								_data[selectedIds] = ids;
								return _data;
							}
						}();

						if (targetType == "dialog") {
							var options = {
								type:'POST',
								mask:true,
								width:$this.attr('width')||820, height:$this.attr('height')||400,
								maxable:true,
								resizable:true,
								data: data
							};
							$.pdialog.open($this.attr('href'), "_blank", $this.attr("title") || $this.text(), options);
						} else if (targetType == "navTab") {
							navTab.openTab("_blank", $this.attr('href'),{type:'POST', title:$this.attr("title") || $this.text(), data:data});
						}

						//var $form = $('<form id="selectedLoadForm" method="post" action="'+$this.attr('href')+'" target="_blank">'
						//	+ '<input name="'+selectedIds+'" value="'+ids+'"/>'
						//	+'</form>').appendTo('body');
						//$form.submit().remove();
					}
					var title = $this.attr("title");
					if (title) {
						alertMsg.confirm(title, {okCall: _doPost});
					} else {
						_doPost();
					}
					return false;
				});

			});
		}
	});

	DWZ.regPlugins.push(function($p){
		$("a[target=selectedLoad]", $p).selectedLoad();
	});
})(jQuery);
