<?php
/*!
 * ubb2html support for php
 * @requires xhEditor
 * 
 * @author Yanis.Wang<yanis.wang@gmail.com>
 * @site http://pirate9.com/
 * @licence LGPL(http://www.opensource.org/licenses/lgpl-license.php)
 * 
 * @Version: 0.9.4 build 091101
 */

function ubb2html($sUBB)
{	
	$sHtml=$sUBB;
		
	$sHtml=preg_replace("/&/",'&amp;',$sHtml);
	$sHtml=preg_replace("/</",'&lt;',$sHtml);
	$sHtml=preg_replace("/>/",'&gt;',$sHtml);
	$sHtml=preg_replace("/\t/",'&nbsp; &nbsp; &nbsp; &nbsp; ',$sHtml);
	$sHtml=preg_replace("/   /",'&nbsp; &nbsp;',$sHtml);
	$sHtml=preg_replace("/  /",'&nbsp;&nbsp;',$sHtml);
	$sHtml=preg_replace("/\r?\n/",'<br />',$sHtml);
	
	global $cnum,$arrcode;$cnum=0;
	function saveCodeArea($match)
	{
		global $cnum,$arrcode;
		$cnum++;$arrcode[$cnum]=$match[0];
		return "[\tubbcodeplace_".$cnum."\t]";
	}
	$sHtml=preg_replace_callback("/\[code\]([\s\S]*?)\[\/code\]/i",'saveCodeArea',$sHtml);
	
	$sHtml=preg_replace("/\[(\/?)(b|u|i|s|sup|sub)\]/i",'<$1$2>',$sHtml);
	$sHtml=preg_replace("/\[color\s*=\s*([^\]]+?)\]/i",'<span style="color:$1;">',$sHtml);
	function getSizeName($match)
	{
		$arrSize=array('8pt','10pt','12pt','14pt','18pt','24pt','36pt');
		return '<span style="font-size:'.$arrSize[$match[1]-1].';">';
	}
	$sHtml=preg_replace_callback("/\[size\s*=\s*(\d+?)\]/i",'getSizeName',$sHtml);
	$sHtml=preg_replace("/\[font\s*=\s*([^\]]+?)\]/i",'<span style="font-family:$1;">',$sHtml);
	$sHtml=preg_replace("/\[back\s*=\s*([^\]]+?)\]/i",'<span style="background-color:$1;">',$sHtml);
	$sHtml=preg_replace("/\[\/(color|size|font|back)\]/i",'</span>',$sHtml);
	
	for($i=0;$i<3;$i++)$sHtml=preg_replace("/\[align\s*=\s*([^\]]+?)\](((?!\[align(?:\s+[^\]]+)?\])[\s\S])*?)\[\/align\]/",'<p align="$1">$2</p>',$sHtml);
	$sHtml=preg_replace("/\[img\]\s*([\s\S]+?)\s*\[\/img\]/i",'<img src="$1" />',$sHtml);
	function getImg($match)
	{
		$p1=$match[1];$p2=$match[2];$p3=$match[3];$src=$match[4];
		$a=$p3?$p3:($p2?$p1:'');
		return '<img src="'.$src.'"'.($p2?' width="'.$p1.'" height="'.$p2.'"':'').($a?' align="'.$a.'"':'').' />';
	}
	$sHtml=preg_replace_callback("/\[img\s*=(?:\s*(\d+)\s*,\s*(\d+)\s*)?(?:,?\s*(\w+)\s*)?\]\s*([\s\S]+?)\s*\[\/img\]/i",'getImg',$sHtml);
	$sHtml=preg_replace("/\[url\]\s*([\s\S]+?)\s*\[\/url\]/i",'<a href="$1">$1</a>',$sHtml);
	$sHtml=preg_replace("/\[url\s*=\s*([^\]\s]+?)\s*\]\s*([\s\S]+?)\s*\[\/url\]/i",'<a href="$1">$2</a>',$sHtml);
	$sHtml=preg_replace("/\[email\]\s*([\s\S]+?)\s*\[\/email\]/i",'<a href="mailto:$1">$1</a>',$sHtml);
	$sHtml=preg_replace("/\[email\s*=\s*([^\]\s]+?)\s*\]\s*([\s\S]+?)\s*\[\/email\]/i",'<a href="mailto:$1">$2</a>',$sHtml);
	$sHtml=preg_replace("/\[quote\]([\s\S]*?)\[\/quote\]/i",'<blockquote>$1</blockquote>',$sHtml);
	function getFlash($match)
	{
		$w=$match[1];$h=$match[2];$url=$match[3];
		if(!$w)$w=550;if(!$h)$h=400;
		return '<embed type="application/x-shockwave-flash" src="'.$url.'" wmode="opaque" quality="high" bgcolor="#ffffff" menu="false" play="true" loop="true" width="'.$w.'" height="'.$h.'"/>';
	}
	$sHtml=preg_replace_callback("/\[flash\s*(?:=\s*(\d+)\s*,\s*(\d+)\s*)?\]([\s\S]+?)\[\/flash\]/i",'getFlash',$sHtml);
	function getMedia($match)
	{
		$w=$match[1];$h=$match[2];$play=$match[3];$url=$match[4];
		if(!$w)$w=550;if(!$h)$h=400;
		return '<embed type="application/x-mplayer2" src="'.$url.'" enablecontextmenu="false" autostart="'.($play=='1'?'true':'false').'" width="'.$w.'" height="'.$h.'"/>';
	}
	$sHtml=preg_replace_callback("/\[media\s*(?:=\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+)\s*)?)?\]([\s\S]+?)\[\/media\]/i",'getMedia',$sHtml);
	function getTable($match)
	{
		$w=$match[1];$b=$match[2];
		$str='<table';
		if($w)$str.=' width="'.$w.'"';
		if($b)$str.=' bgcolor="'.$b.'"';
		return $str.'>';
	}
	$sHtml=preg_replace_callback("/\[table(?:\s*=\s*(\d{1,4}%?)\s*(?:,\s*([^\]]+)\s*)?)?]/i",'getTable',$sHtml);
	function getTR($match){return '<tr'.($match[1]?' bgcolor="'.$match[1].'"':'').'>';}
	$sHtml=preg_replace_callback("/\[tr(?:\s*=(\s*[^\]]+))?\]/i",'getTR',$sHtml);
	function getTD($match){
		$col=$match[1];$row=$match[2];$w=$match[3];
		return '<td'.($col>1?' colspan="'.$col.'"':'').($row>1?' rowspan="'.$row.'"':'').($w?' width="'.$w.'"':'').'>';
	}
	$sHtml=preg_replace_callback("/\[td(?:\s*=\s*(\d{1,2})\s*,\s*(\d{1,2})\s*(?:,\s*(\d{1,4}%?))?)?\]/i",'getTD',$sHtml);
	$sHtml=preg_replace("/\[\/(table|tr|td)\]/i",'</$1>',$sHtml);
	$sHtml=preg_replace("/\[\*\]([^\[]+)/i",'<li>$1</li>',$sHtml);
	function getUL($match)
	{
		$str='<ul';
		if($match[1])$str.=' type="'.$match[1].'"';
		return $str.'>';
	}
	$sHtml=preg_replace_callback("/\[list(?:\s*=\s*([^\]]+)\s*)?\]/i",'getUL',$sHtml);
	$sHtml=preg_replace("/\[\/list\]/i",'</ul>',$sHtml);

	for($i=1;$i<=$cnum;$i++)$sHtml=str_replace("[\tubbcodeplace_".$i."\t]", $arrcode[$i],$sHtml);

	return $sHtml;
}
?>