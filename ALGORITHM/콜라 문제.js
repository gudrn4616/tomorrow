function solution(a, b, n) {
    var answer = 0;
    var i = 0;
    while(n>=a){
        answer+=Math.floor(n/a)*b;
        n = n-a*Math.floor(n/a)+Math.floor(n/a)*b;
    }
    
    return answer;
}

/*
https://school.programmers.co.kr/learn/courses/30/lessons/132267
*/