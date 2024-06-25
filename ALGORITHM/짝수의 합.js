function solution(n) {
    var answer = 0;
    if(n<=0||n>1000) return answer;
    for(var i = 0; i<=n;i++){
        if(i%2==0){
            answer+=i;
        }
    }
    return answer;
}