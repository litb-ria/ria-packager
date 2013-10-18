var writeFile = require('.tools/writeFile.js');
var cssList = [], jsList = [],htmlList = [];
cssList.push('<style>');
jsList.push('<script>');
var combineCss = function(cssPath){
	var file = '';
	cssList.push(file);
}


var combineJs = function(jsPath){
	var file = '';
	jsList.push(file);
}

var combineHtml = function(htmlPath){
	var file = 
}

modules.export = function(pageletList){
	for(i=0;i<pageletList.length;i++){
		var filePath = pageletList[i];
		if(filePath == 'js'){
			combineJs(filePath);
		}else if(filePath == 'css'){
			combineCss(filePath);
		}else if(filePath == 'html'){
			combineHtml(filePath);
		}
	}
	cssList.push('</style');
	jsList.push('</script>');
	for(var i=0;i<htmlList.length;i++){
		writeFile(cssList.join('') + htmlList[i] + jslist.push(''));
	}
}