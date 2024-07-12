function solution(number, limit, power) {
    var answer = 0;
    var arr=[];
    
    for(let i = 1; i<=number;i++){
        let count=0;
        for(let j = 1; j<=Math.sqrt(i);j++){
            if(i%j===0){
                if(i/j==j)count++;
                else count+=2;
            }
            if(count>limit){
                count=power;
                break;
            }
        }
        answer+=count;
    }
        
    
    return answer;
}

/*
위 시간 복잡도는 n*sqrt(n)이다

아래 코드는 시간 복잡도 n*log(n), 공간 복잡도 n이다.

function solution(number, limit, power) {
    var answer = 0;
    var arr = new Array(number + 1).fill(0);
    
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            arr[j]++;
        }
    }
    
    for (let i = 1; i <= number; i++) {
        if (arr[i] > limit) {
            answer += power;
        } else {
            answer += arr[i];
        }
    }
    return answer;
}
*/