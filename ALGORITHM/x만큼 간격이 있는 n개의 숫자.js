function solution(x, n) {
    var answer = [];
    var i = 1;
    
    while(n--){
        answer.push(x*i);
        i++;
    }
    return answer;
}