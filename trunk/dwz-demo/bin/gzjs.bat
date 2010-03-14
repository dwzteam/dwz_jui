cd D:\workspace\UI\UI_soulou\dwz-demo\bin

REM -------------- start package javascript --------------

type ..\javascripts\jquery-1.4.2.min.js > dwzAll.js
type ..\javascripts\jquery.validate.js >> dwzAll.js
type ..\fckeditor\fckeditor.js >> dwzAll.js

type ..\javascripts\dwz.core.js > dwzESC.js
type ..\javascripts\dwz.barDrag.js >> dwzESC.js
type ..\javascripts\dwz.drag.js >> dwzESC.js
type ..\javascripts\dwz.tree.js >> dwzESC.js
type ..\javascripts\dwz.accordion.js >> dwzESC.js
type ..\javascripts\dwz.ui.js >> dwzESC.js
type ..\javascripts\dwz.theme.js >> dwzESC.js
type ..\javascripts\dwz.scrollCenter.js >> dwzESC.js
type ..\javascripts\dwz.alertMsg.js >> dwzAll.js
type ..\javascripts\dwz.navTab.js >> dwzESC.js
type ..\javascripts\dwz.tab.js >> dwzESC.js
type ..\javascripts\dwz.resize.js >> dwzESC.js
type ..\javascripts\dwz.jDialog.js >> dwzESC.js
type ..\javascripts\dwz.dialogDrag.js >> dwzESC.js
type ..\javascripts\dwz.stable.js >> dwzESC.js
type ..\javascripts\dwz.taskBar.js >> dwzESC.js
type ..\javascripts\dwz.ajax.js >> dwzESC.js
type ..\javascripts\common.js >> dwzESC.js

cscript ESC.wsf -l 1 -ow dwzESC1.js dwzESC.js
cscript ESC.wsf -l 2 -ow dwzESC2.js dwzESC1.js
cscript ESC.wsf -l 3 -ow dwzESC3.js dwzESC1.js

type dwzESC.js >> dwzAll.js
#gzip -f dwzAll.js
#copy dwzAll.js.gz dwzAll.gzjs /y

del dwzESC*.js