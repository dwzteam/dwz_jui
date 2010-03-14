<%
' ubb2html support for asp
' @requires xhEditor
' 
' @author Yanis.Wang<yanis.wang@gmail.com>
' @site http://pirate9.com/
' @licence LGPL(http://www.opensource.org/licenses/lgpl-license.php)
' 
' @Version: 0.9.5 build 091101
function ubb2html(sUBB)
	dim re,sHtml,i,match
	Set re = New RegExp
	re.Global = True
	re.IgnoreCase = True
	sHtml=sUBB
	re.Pattern="&"
	sHtml=re.Replace(sHtml,"&amp;")
	re.Pattern="<"
	sHtml=re.Replace(sHtml,"&lt;")
	re.Pattern=">"
	sHtml=re.Replace(sHtml,"&gt;")
	re.Pattern="\t"
	sHtml=re.Replace(sHtml,"&nbsp; &nbsp; &nbsp; &nbsp; ")
	re.Pattern="   "
	sHtml=re.Replace(sHtml,"&nbsp; &nbsp;")
	re.Pattern="  "
	sHtml=re.Replace(sHtml,"&nbsp;&nbsp;")
	re.Pattern="\r?\n"
	sHtml=re.Replace(sHtml,"<br />")
	
	re.Pattern="\[code\]([\s\S]*?)\[\/code\]"
	Set match = re.Execute(sHtml)
	For i= 0 to  match.count -1
		sHtml=Replace(sHtml,match.item(i),"[ubbcodeplace_"&i&"]")
	Next
	
	re.Pattern="\[(\/?)(b|u|i|s|sup|sub)\]"
	sHtml=re.Replace(sHtml,"<$1$2>")
	re.Pattern="\[color\s*=\s*([^\]]+?)\]"
	sHtml=re.Replace(sHtml,"<font color=""$1"">")
	re.Pattern="\[size\s*=\s*(\d+?)\]"
	sHtml=re.Replace(sHtml,"<font size=""$1"">")
	re.Pattern="\[font\s*=\s*([^\]]+?)\]"
	sHtml=re.Replace(sHtml,"<font face=""$1"">")
	re.Pattern="\[\/(color|size|font)\]"
	sHtml=re.Replace(sHtml,"</font>")
	re.Pattern="\[back\s*=\s*([^\]]+?)\]"
	sHtml=re.Replace(sHtml,"<span style=""background-color:$1;"">")
	re.Pattern="\[\/back\]"
	sHtml=re.Replace(sHtml,"</span>")
	re.Pattern="\[align\s*=\s*([^\]]+?)\](((?!\[align(?:\s+[^\]]+)?\])[\s\S])*?)\[\/align\]"
	for i=1 to 3
		sHtml=re.Replace(sHtml,"<p align=""$1"">$2</p>")
	next
	re.Pattern="\[img\]\s*([\s\S]+?)\s*\[\/img\]"
	sHtml=re.Replace(sHtml,"<img src=""$1"" />")
	re.Pattern="\[img\s*=\s*(\d+)\s*,\s*(\d+)\s*\]\s*([\s\S]+?)\s*\[\/img\]"
	sHtml=re.Replace(sHtml,"<img src=""$3"" width=""$1"" height=""$2"" />")
	re.Pattern="\[img\s*=\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\]\s*([\s\S]+?)\s*\[\/img\]"
	sHtml=re.Replace(sHtml,"<img src=""$4"" width=""$1"" height=""$2"" align=""$3"" />")
	re.Pattern="\[img\s*=\s*(\w+)\s*\]\s*([\s\S]+?)\s*\[\/img\]"
	sHtml=re.Replace(sHtml,"<img src=""$2"" align=""$1"" />")
	re.Pattern="\[url\]\s*([\s\S]+?)\s*\[\/url\]"
	sHtml=re.Replace(sHtml,"<a href=""$1"">$1</a>")
	re.Pattern="\[url\s*=\s*([^\]\s]+?)\s*\]\s*([\s\S]+?)\s*\[\/url\]"
	sHtml=re.Replace(sHtml,"<a href=""$1"">$2</a>")
	re.Pattern="\[email\]\s*([\s\S]+?)\s*\[\/email\]"
	sHtml=re.Replace(sHtml,"<a href=""mailto:$1"">$1</a>")
	re.Pattern="\[email\s*=\s*([^\]\s]+?)\s*\]\s*([\s\S]+?)\s*\[\/email\]"
	sHtml=re.Replace(sHtml,"<a href=""mailto:$1"">$2</a>")
	re.Pattern="\[quote\]([\s\S]*?)\[\/quote\]"
	sHtml=re.Replace(sHtml,"<blockquote>$1</blockquote>")
	re.Pattern="\[code\]([\s\S]*?)\[\/code\]"
	sHtml=re.Replace(sHtml,"<code>$1</code>")
	re.Pattern="\[flash\]([\s\S]+?)\[\/flash\]"
	sHtml=re.Replace(sHtml,"<embed type=""application/x-shockwave-flash"" src=""$3"" wmode=""opaque"" quality=""high"" bgcolor=""#ffffff"" menu=""false"" play=""true"" loop=""true"" width=""550"" height=""400""/>")
	re.Pattern="\[flash\s*(?:=\s*(\d+)\s*,\s*(\d+)\s*)\]([\s\S]+?)\[\/flash\]"
	sHtml=re.Replace(sHtml,"<embed type=""application/x-shockwave-flash"" src=""$3"" wmode=""opaque"" quality=""high"" bgcolor=""#ffffff"" menu=""false"" play=""true"" loop=""true"" width=""$1"" height=""$2""/>")
	re.Pattern="\[flash\]([\s\S]+?)\[\/flash\]"
	sHtml=re.Replace(sHtml,"<embed type=""application/x-shockwave-flash"" src=""$3"" wmode=""opaque"" quality=""high"" bgcolor=""#ffffff"" menu=""false"" play=""true"" loop=""true"" width=""550"" height=""400""/>")
	re.Pattern="\[media\]([\s\S]+?)\[\/media\]"
	sHtml=re.Replace(sHtml,"<embed type=""application/x-mplayer2"" src=""$1"" enablecontextmenu=""false"" autostart=""1"" width=""550"" height=""400""/>")
	re.Pattern="\[media\s*=\s*(\d+)\s*,\s*(\d+)\s*\]([\s\S]+?)\[\/media\]"
	sHtml=re.Replace(sHtml,"<embed type=""application/x-mplayer2"" src=""$3"" enablecontextmenu=""false"" autostart=""1"" width=""$1"" height=""$2""/>")
	re.Pattern="\[media\s*=\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\]([\s\S]+?)\[\/media\]"
	sHtml=re.Replace(sHtml,"<embed type=""application/x-mplayer2"" src=""$4"" enablecontextmenu=""false"" autostart=""$3"" width=""$1"" height=""$2""/>")
	re.Pattern="\[table\]"
	sHtml=re.Replace(sHtml,"<table>")
	re.Pattern="\[table\s*=\s*(\d{1,4}%?)\s*\]"
	sHtml=re.Replace(sHtml,"<table width=""$1"">")
	re.Pattern="\[table\s*=\s*(\d{1,4}%?)\s*,\s*([^\]]+)\s*]"
	sHtml=re.Replace(sHtml,"<table width=""$1"" bgcolor=""$2"">")
	re.Pattern="\[tr\]"
	sHtml=re.Replace(sHtml,"<tr>")
	re.Pattern="\[tr\s*=(\s*[^\]]+)\]"
	sHtml=re.Replace(sHtml,"<tr bgcolor=""$1"">")
	re.Pattern="\[td\]"
	sHtml=re.Replace(sHtml,"<td>")
	re.Pattern="\[td\s*=\s*(\d{1,2})\s*,\s*(\d{1,2})\s*\]"
	sHtml=re.Replace(sHtml,"<td colspan=""$1"" rowspan=""$2"">")
	re.Pattern="\[td\s*=\s*(\d{1,2})\s*,\s*(\d{1,2})\s*,\s*(\d{1,4}%?)\]"
	sHtml=re.Replace(sHtml,"<td colspan=""$1"" rowspan=""$2"" width=""$3"">")
	re.Pattern="\[\/(table|tr|td)\]"
	sHtml=re.Replace(sHtml,"</$1>")
	re.Pattern="\[\*\]([^\[]+)"
	sHtml=re.Replace(sHtml,"<li>$1</li>")
	re.Pattern="\[list\]"
	sHtml=re.Replace(sHtml,"<ul>")
	re.Pattern="\[list\s*=\s*([^\]]+)\s*\]"
	sHtml=re.Replace(sHtml,"<ul type=""$1"">")
	re.Pattern="\[\/list\]"
	sHtml=re.Replace(sHtml,"</ul>")
	
	For i= 0 to  match.count -1
		sHtml=replace(sHtml,"[ubbcodeplace_"&i&"]",match.item(i))
	Next
	
	ubb2html=sHtml
	
end function
%>