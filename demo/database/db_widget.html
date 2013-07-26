<h2 class="contentTitle">suggest+lookup</h2>
<form action="demo/common/ajaxDone.html?navTabId=masterList&callbackType=closeCurrent" method="post" class="pageForm required-validate" onsubmit="return validateCallback(this, navTabAjaxDone)">
<div class="pageContent">
	<div class="pageFormContent" layoutH="97">
		
		<dl class="nowrap">
			<dt>部门名称A1：</dt>
			<dd>
				<input id="inputOrg1" name="org1.id" value="" type="hidden"/>
				<input class="required" name="org1.orgName" type="text" postField="keyword" suggestFields="orgNum,orgName" 
					suggestUrl="demo/database/db_lookupSuggest.html" lookupGroup="org1"/>
				<a class="btnLook" href="demo/database/dwzOrgLookup.html" lookupGroup="org1">查找带回</a>	
				<span class="info">(suggest+lookup)</span>
			</dd>
		</dl>
		<dl class="nowrap">
			<dt>部门编号A1：</dt>
			<dd>
				<input class="readonly" name="org1.orgNum" readonly="readonly" type="text"/>
			</dd>
		</dl>

		<dl class="nowrap">
			<dt>部门名称A2：</dt>
			<dd>
				<input name="org1_1.id" value="" type="hidden"/>
				<input class="required" name="org1_1.orgName" type="text" suggestFields="orgNum,orgName" 
					suggestUrl="demo/database/db_lookupSuggest.html?orgId={inputOrg1}" warn="请选择部门A1" lookupGroup="org1_1"/>
				<a class="btnLook" href="demo/database/dwzOrgLookup.html?orgId={inputOrg1}" warn="请选择部门A1" lookupGroup="org1_1">查找带回</a>		
				<span class="info">(suggest、lookup 联动效果)</span>
			</dd>
		</dl>
		<div class="divider"></div>
		
		<dl class="nowrap">
			<dt>部门名称B：</dt>
			<dd>
				<input name="org2.id" value="" type="hidden">
				<input class="required" name="org2.orgName" type="text" suggestFields="orgName" suggestUrl="demo/database/db_lookupSuggest.html" lookupGroup="org2"/>
				<span class="info">(suggest)</span>
			</dd>
		</dl>
		
		<div class="divider"></div>

		<dl class="nowrap">
			<dt>部门名称C：</dt>
			<dd>
				<input name="org3.id" value="" type="hidden">
				<input name="org3.orgName" type="text"/>
				<a class="btnLook" href="demo/database/dwzOrgLookup2.html" lookupGroup="org3">查找带回</a>
				<span class="info">(lookup 通过复选框选择多个值查找回带)</span>
			</dd>
		</dl>
		<dl class="nowrap">
			<dt>部门编号C：</dt>
			<dd>
				<input class="readonly" name="org3.orgNum" readonly="readonly" type="text"/>
			</dd>
		</dl>

		<div class="divider"></div>
		<dl class="nowrap">
			<dt>部门（结尾带下标）：</dt>
			<dd>
				<input name="org.id[]" value="1" type="hidden"/>
				<input class="required" name="org.orgName[]" value="技术部" type="text" suggestFields="orgNum,orgName" suggestUrl="demo/database/db_lookupSuggest.html" lookupGroup="org" suffix="[]"/>
				<a class="btnLook" href="demo/database/dwzOrgLookup.html" lookupGroup="org" suffix="[]">查找带回</a>		
				<span class="info">需要suffix="[]"属性，下标一般用于主从结构子表</span>
			</dd>
		</dl>
		
		<div class="divider"></div>
		<dl class="nowrap">
			<dt>部门（中间带下标）：</dt>
			<dd>
				<input name="org[].id" value="1" type="hidden"/>
				<input class="required" name="org[].orgName" value="技术部" type="text" suggestFields="orgNum,orgName" suggestUrl="demo/database/db_lookupSuggest.html" lookupGroup="org[]"/>
				<a class="btnLook" href="demo/database/dwzOrgLookup.html" lookupGroup="org[]">查找带回</a>		
				<span class="info">不需要suffix="[]"属性，lookupGroup属性中加上方括号[]</span>
			</dd>
		</dl>
		
		<div class="divider"></div>
		<dl class="nowrap">
			<dt>自定义lookupPk：</dt>
			<dd>
				<input name="obj.orgNum" value="" type="hidden"/>
				<input class="required" name="obj.orgName" type="text" suggestFields="orgNum,orgName" suggestUrl="demo/database/db_lookupSuggest.html" lookupGroup="obj" lookupPk="orgNum"/>
				<a class="btnLook" href="demo/database/dwzOrgLookup.html" lookupGroup="obj" lookupPk="orgNum">查找带回</a>	
				<span class="info">自定义lookup主键，只需添加lookupPk="xxx"属性（lookupPk默认值为id）</span>
			</dd>
		</dl>
		
		<div class="divider"></div>
		
		<dl class="nowrap">
			<dt>附件：</dt>
			<dd>
				<input name="attachment.id" value="" type="hidden">
				<input class="readonly" name="attachment.fileName" value="" readonly="readonly" type="text"/>
				<a class="btnAttach" href="demo/database/db_attachmentLookup.html" lookupGroup="attachment" width="560" height="300" title="附件">附件</a>
				<span class="info">(lookup附件)</span>
			</dd>
		</dl>
		
		<div class="divider"></div>
		<h3 class="contentTitle">主从结构</h3>
		<div class="tabs">
			<div class="tabsHeader">
				<div class="tabsHeaderContent">
					<ul>
						<li class="selected"><a href="javascript:void(0)"><span>从表1【Struts2 示例】</span></a></li>
						<li><a href="javascript:void(0)"><span>从表2【PHP 示例 - 结尾带下标[#index#]】</span></a></li>
						<li><a href="javascript:void(0)"><span>从表2【PHP 示例 - 结尾带下标[]】</span></a></li>
					</ul>
				</div>
			</div>
			<div class="tabsContent" style="height: 150px;">
				<div>
					<table class="list nowrap itemDetail" addButton="新建从表1条目" width="100%">
						<thead>
							<tr>
								<th type="text" name="items[#index#].itemString" size="12" fieldClass="required" fieldAttrs="{remote:'validate_remote.html', maxlength:10}">从字符串</th>
								<th type="text" name="items[#index#].itemInt" defaultVal="#index#" size="12" fieldClass="digits">从整数</th>
								<th type="text" name="items[#index#].itemFloat" defaultVal="0.8" size="12" fieldClass="number">从浮点</th>
								<th type="date" name="items[#index#].itemDate" defaultVal="2011-12-28" size="12">从日期</th>
								<th type="date" format="yyyy-MM-dd HH:mm:ss" name="items[#index#].itemDataTime" size="16">从日期时间</th>
								<th type="lookup" name="items[#index#].org.orgName" lookupGroup="items[#index#].org" lookupUrl="demo/database/dwzOrgLookup.html" suggestUrl="demo/database/db_lookupSuggest.html" suggestFields="orgName" postField="keywords" size="12" fieldClass="required">部门名称</th>
								<th type="enum" name="items[#index#].itemEnum" enumUrl="demo/database/db_select.html" size="12">从枚举</th>
								<th type="attach" name="items[#index#].attachment.fileName" lookupGroup="items[#index#].attachment" lookupUrl="demo/database/db_attachmentLookup.html" size="12">从附件</th>
								<th type="del" width="60">操作</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
				<div>
					<table class="list nowrap itemDetail" addButton="新建从表2条目" width="100%">
						<thead>
							<tr>
								<th type="text" name="items.itemString[#index#]" size="12" fieldClass="required">从字符串</th>
								<th type="text" name="items.itemInt[#index#]" size="12" fieldClass="digits">从整数</th>
								<th type="text" name="items.itemFloat[#index#]" size="12" fieldClass="number">从浮点</th>
								<th type="date" name="items.itemDate[#index#]" size="12">从日期</th>
								<th type="date" format="yyyy-MM-dd HH:mm:ss" name="items.itemDataTime[#index#]" size="16">从日期时间</th>
								<th type="lookup" name="items.org.orgName[#index#]" lookupGroup="items.org" lookupUrl="demo/database/dwzOrgLookup.html" lookupPk="orgNum" suggestUrl="demo/database/db_lookupSuggest.html" suggestFields="orgNum,orgName" size="12">部门名称</th>
								<th type="enum" name="items.itemEnum[#index#]" enumUrl="demo/database/db_select.html" size="12">从枚举</th>
								<th type="attach" name="items.attachment.fileName[#index#]" lookupGroup="items.attachment" lookupUrl="demo/database/db_attachmentLookup.html" size="12">从附件</th>
								<th type="del" width="60">操作</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
				<div>
					<table class="list nowrap itemDetail" addButton="新建从表3条目" width="100%">
						<thead>
							<tr>
								<th type="text" name="items.itemString[]" size="12" fieldClass="required">从字符串</th>
								<th type="text" name="items.itemInt[]" size="12" fieldClass="digits">从整数</th>
								<th type="text" name="items.itemFloat[]" size="12" fieldClass="number">从浮点</th>
								<th type="date" name="items.itemDate[]" size="12">从日期</th>
								<th type="date" format="yyyy-MM-dd HH:mm:ss" name="items.itemDataTime[]" size="16">从日期时间</th>
								<th type="lookup" name="items.org.orgName[]" lookupGroup="items.org" lookupUrl="demo/database/dwzOrgLookup.html" suggestUrl="demo/database/db_lookupSuggest.html" suggestFields="orgName" size="12">部门名称</th>
								<th type="enum" name="items.itemEnum[]" enumUrl="demo/database/db_select.html" size="12">从枚举</th>
								<th type="attach" name="items.attachment.fileName[]" lookupGroup="items.attachment" lookupUrl="demo/database/db_attachmentLookup.html" size="12">从附件</th>
								<th type="del" width="60">操作</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
			</div>
			<div class="tabsFooter">
				<div class="tabsFooterContent"></div>
			</div>
		</div>
		
	</div>
	<div class="formBar">
		<ul>
			<li><div class="buttonActive"><div class="buttonContent"><button type="submit">保存</button></div></div></li>
			<li><div class="button"><div class="buttonContent"><button class="close" type="button">关闭</button></div></div></li>
		</ul>
	</div>
</div>
</form>
