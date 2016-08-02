/**
 * Created by huihuazhang on 2016/4/27.
 * 基于HTML5 文件上传的核心脚本
 * http://www.w3.org/TR/html-markup/input.file.html
 */
(function($){
	function readAsDataURL(img, file, maxW, maxH){
		// Using FileReader to display the image content
		var reader = new FileReader();
		reader.onload = (function(aImg) {
			return function(e) {
				aImg.src = e.target.result;

				var width = aImg.naturalWidth,
					height = aImg.naturalHeight;
				aImg.setAttribute('data-width', width);
				aImg.setAttribute('data-height', height);

				if (maxW && maxH) {

					if (width/maxW > height/maxH) {
						aImg.setAttribute('height', maxH);
					} else {
						aImg.setAttribute('width', maxW);
					}
				}

			};
		})(img);

		reader.readAsDataURL(file);
	}

	function previewUploadImg($uploadWrap, files, maxW, maxH) {

		var $previewElem = $uploadWrap.find('.thumbnail');

		var file = files[0];

		if (!file) {return false;}

		if (!file.type.match(/image.*/)) {
			throw "File Type must be an image";
		}

		var img = document.createElement("img");
		img.file = file;
		$previewElem.empty().append(img);

		if ($previewElem.find('.edit-icon').size() == 0) {
			$previewElem.append('<span class="edit-icon"></span>');
		}

		readAsDataURL(img, file, maxW, maxH);

	}

	// multiple
	function previewUploadImg2($uploadWrap, files, maxW, maxH) {

		var rel = $uploadWrap.attr('rel');
		var $previewElem = $(rel);

		$previewElem.empty();
		for (var index=0; index<files.length; index++) {
			var file = files[index];

			var $thumb = $('<li class="thumbnail"></li>');

			var img = document.createElement("img");
			img.file = file;
			$thumb.append(img);
			$previewElem.append($thumb);

			readAsDataURL(img, file, maxW, maxH);
		}

	}

	$.fn.extend({
		/**
		 * 选择上传图片缩略图列表预览
		 * @param options
		 */
		previewUploadImg: function(options){
			var op = $.extend({maxW:80, maxH:80}, options);
			return this.each(function(){
				var $uploadWrap = $(this);

				var $inputFiles = $uploadWrap.find('input[type=file]');
				$inputFiles.each(function(index){
					var $inputFile = $(this).css({left:(op.maxW*index)+'px'});
					$inputFile.on('change', function () {
						var files = this.files;

						if (this.multiple) {
							previewUploadImg2($uploadWrap, files, op.maxW, op.maxH);
						} else {
							previewUploadImg($uploadWrap, files, op.maxW, op.maxH);
						}


					});
				});

			});
		}
	});


	DWZ.regPlugins.push(function($p){
		$("div.upload-wrap", $p).previewUploadImg();
	});

})(jQuery);