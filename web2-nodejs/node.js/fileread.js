var fs = require('fs');//파일 읽기 하는 모듈

fs.readFile('sample.txt','utf8',function(err,data){
    console.log(data);
})