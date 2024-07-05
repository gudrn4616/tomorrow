function solution(n) {
    var answer = -1;
    
    for(let i = 0; i*i<=n;i++){
        if(i*i==n) answer = (i+1)*(i+1);
    }
    return answer;
}

/*
다만 브루트포스로 풀었으니 시간 초과 되는 문제점이 있다.
*/

/*
function solution(n) {
     var answer = 0;
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) {
        answer = -1;
    } else {
        answer = Math.pow(sqrt+1,2);
    }
    return answer
}

효율성 측면에서 더 좋은 코드이다.
*/
