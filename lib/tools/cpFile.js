var fs = require('fs');
var path = require('path');
var log = require('./log');
var md5 = require('./md5');
var render = require('../server/renderMustache');
var writeFile = require('./writeFile.js');

var ext, file;
module.exports = function (source, target,fromDir,conf) {
	ext = path.extname(target);
	if(ext !== '.json'){
        if(ext === '.html'){
            file = fs.readFileSync(source,'utf-8');
            file = render.getMustachePartials(file,fromDir);
            //remove comments
            file = file.replace(/<!--[\w\W\r\n]*?-->/gmi, '');
            fs.writeFileSync(target, file,'utf-8');
        }else{
            file = fs.readFileSync(source,'binary');
            writeFile(file, target,source,conf,'binary');
        }
        
		file = ext = null;
		log.info('> copy to ' + target);
	}else{
        file = fs.readFileSync(source,'utf-8');
        try{
            var newJson = eval('(' + file + ')');
            file = JSON.stringify(newJson);
            fs.writeFileSync(target, file,'utf-8');
        }catch(e){
            log.info('>json error,file path:'+ source +',error message:' + e);
        }
    }
};