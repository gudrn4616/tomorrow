function solution(a, b) {
    var answer = 0;
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i = a ; i<=b ;i++){
        answer+=i;
    }
    return answer;
}

/*
for문이라도 시간 복잡도가 n이 나온다.
이 사간 복잡도를 줄이기 위해 가우스 공식을 사용한다.
가우스 공식은 n(n+1)/2로 공식이다.

function solution(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    return (b - a + 1) * (a + b) / 2;
}
*/



