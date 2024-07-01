/*function a(){
    console.log('a');
}*/
var a = function() {
    console.log('a');
}//이름이 없는 함수, 익명함수라 함

var b = function() {
    console.log('ab');
}

function slowfunc(callback){
    callback();
}

slowfunc(b);