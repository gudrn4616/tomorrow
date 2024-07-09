var f = function(){
    console.log(1+1);
    console.log(1+2);
}

var a=[f];//배열에 함수를 넣을 수 잇음
a[0]();

var o ={
    func:f
}//객체에 함수를 넣을 수 있음
o.func();