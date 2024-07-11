function solution(n, m, section) {
    var answer = 0;
    var arr = new Array(n).fill(1);
    
    for(let i = 0; i < section.length; i++){
        arr[section[i] - 1] = 0;
    }
    
    let j = n - 1;
    
    while(j >= 0){
        if(arr[j] == 0){
            let k = Math.max(0, j - m + 1);
            for(let i = j; i >= k; i--){
                arr[i] = 1;
            }
            answer++;
            j = k - 1;
        } else {
            j--;
        }
    }
    
    return answer;
}

/*
위에 있는 코드는 시간초과 나옴
아래 있는 코드 매우 효율적임
function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    for(var i of section) {
        if(painted < i) {
            answer++;
            painted = i+m-1;
        }
    }
    return answer;
}
*/