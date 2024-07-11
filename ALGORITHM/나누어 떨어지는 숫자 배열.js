function solution(arr, divisor) {
    var answer = []
    
    answer = arr.sort((a,b)=>a-b).filter((a)=>a%divisor==0)
    
    if(answer.length == 0){
        answer.push(-1)
    }
    
    return answer;
}