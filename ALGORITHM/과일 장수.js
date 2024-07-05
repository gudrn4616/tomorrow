function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a);
    var makebox = Math.floor(score.length/m);
    
    for(let i = 1; i<=makebox; i++){
        answer+=m*score[i*m-1];
    }
    
    return answer;
}