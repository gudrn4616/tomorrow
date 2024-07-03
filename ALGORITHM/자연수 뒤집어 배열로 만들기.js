function solution(n) {
    var answer = [];
    
    while(n){
        let k = n%10;
        answer.push(k);
        n=(n-k)/10;
    }
    
    return answer;
}