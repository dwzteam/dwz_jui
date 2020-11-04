# http://tool.chinaz.com/js.aspx

# -------------- start package javascript --------------

cat ../js/dwz.core.js > dwz.all.js
cat ../js/dwz.util.date.js >> dwz.all.js
cat ../js/dwz.validate.method.js >> dwz.all.js
cat ../js/dwz.barDrag.js >> dwz.all.js
cat ../js/dwz.drag.js >> dwz.all.js
cat ../js/dwz.tree.js >> dwz.all.js
cat ../js/dwz.accordion.js >> dwz.all.js
cat ../js/dwz.ui.js >> dwz.all.js
cat ../js/dwz.theme.js >> dwz.all.js
cat ../js/dwz.switchEnv.js >> dwz.all.js

cat ../js/dwz.alertMsg.js >> dwz.all.js
cat ../js/dwz.contextmenu.js >> dwz.all.js
cat ../js/dwz.navTab.js >> dwz.all.js
cat ../js/dwz.tab.js >> dwz.all.js
cat ../js/dwz.resize.js >> dwz.all.js
cat ../js/dwz.dialog.js >> dwz.all.js
cat ../js/dwz.dialogDrag.js >> dwz.all.js
cat ../js/dwz.sortDrag.js >> dwz.all.js
cat ../js/dwz.cssTable.js >> dwz.all.js
cat ../js/dwz.stable.js >> dwz.all.js
cat ../js/dwz.taskBar.js >> dwz.all.js
cat ../js/dwz.ajax.js >> dwz.all.js
cat ../js/dwz.pagination.js >> dwz.all.js
cat ../js/dwz.database.js >> dwz.all.js
cat ../js/dwz.selectedLoad.js >> dwz.all.js
cat ../js/dwz.datepicker.js >> dwz.all.js
cat ../js/dwz.effects.js >> dwz.all.js
cat ../js/dwz.panel.js >> dwz.all.js
cat ../js/dwz.checkbox.js >> dwz.all.js
cat ../js/dwz.combox.js >> dwz.all.js
cat ../js/dwz.file.js >> dwz.all.js
cat ../js/dwz.history.js >> dwz.all.js
cat ../js/dwz.print.js >> dwz.all.js

java -jar yuicompressor-2.4.8.jar dwz.all.js -o dwz.min.js --charset utf-8 --type js --nomunge

rm -f dwz.all.js

# gzip压缩
# gzip -f dwz.all.js
# mv dwz.min.js.gz dwz.min.gzjs


# -------------- start package css --------------
# cat ../../css/style.css > style.min.css
# gzip -f style.min.css
# mv style.min.css.gz style.min.gzcss
