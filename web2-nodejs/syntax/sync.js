var fs = require('fs');
/*
console.log('a');
var data = fs.readFileSync('./sample.txt', 'utf8');
console.log(data);
console.log('c');
*/

console.log('a');
fs.readFile('./sample.txt', 'utf8', function(err, result){
    console.log(result);
});// 비동기라 나중에 실행됨 다만, 작업이 끝나야 출력됨

console.log('c');
