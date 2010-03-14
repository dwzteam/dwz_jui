#######################################################################
# 
# xhEditor 自述文件
#
#######################################################################

使用方法

1. 下载xhEditor最新版本。
   下载地址：http://code.google.com/p/xheditor/downloads/list

2. 解压zip文件，将其中的xheditor.js以及xheditor_emot、xheditor_plugins和xheditor_skin三个文件夹上传到网站相应目录

3. 在相应html文件的</head>之前添加
<script type="text/javascript" src="http://static.xxx.com/js/xheditor.js"></script>

4. 
方法1：在textarea上添加属性： class="xheditor"
方法2：在您的页面初始JS代码里加上：
$('#elm1').xheditor(true)；
例如：
$({
$('#elm1').xheditor(true)；
});
相应的隐藏编辑器的代码为
$('#elm1').xheditor(false)；


更多详情，请参考demos里的演示页面
