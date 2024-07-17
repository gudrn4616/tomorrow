function solution(X, Y) {
    var answer = []
    var Xcount = Count(X)
    var Ycount = Count(Y)
    
    for(let i = 9;i>=0;i--){
        let count = Math.min(Xcount[i],Ycount[i])
        if(count>0) answer.push(i.toString().repeat(count))
    }
    
    if(answer.length==0) return "-1"
    if(answer[0]==0) return "0"
    answer=answer.join("")
    
    return answer
}

function Count(str) {
    let count = new Array(10).fill(0);
    for (let char of str) {
        count[char]++;
    }
    return count;
}