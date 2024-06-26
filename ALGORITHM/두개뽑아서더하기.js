function solution(numbers) {
    var answer = [];
    numbers.sort((a,b)=>a-b);
    for(var i = 0; i<numbers.length-1;i++){
        for(var k= i+1;k<numbers.length;k++){
            var sol=numbers[i]+numbers[k];
            if(!answer.includes(sol)){
                answer.push(sol);
            }
        }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}