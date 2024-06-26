function solution(numbers) {
    var answer = 0;
    var sum=0;
    for(var i =0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    answer=sum/numbers.length;
    
    return answer;
}

//reduce 사용
/*
function solution(numbers) {
    var answer = 0;
    var sum=numbers.reduce((a,b)=>a+b,0);
    answer=sum/numbers.length;
    return answer;
}
*/