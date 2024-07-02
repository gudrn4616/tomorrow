function solution(k, score) {
    var answer = [];
    var legend = [];
    for(let i = 0 ; i<score.length;i++){
        legend.push(score[i]);
        legend.sort((a,b)=>a-b);
        if(legend.length<=k){
            answer.push(legend[0]);
        }
        else{
            answer.push(legend[legend.length-k]);
        }
    }
    return answer;
}