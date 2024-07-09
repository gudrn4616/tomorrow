function solution(nums) {
    var answer = 0;
    var com=combination(3,nums);
    for(var i = 0; i<com.length;i++){
        let sum = 0;
        com[i].forEach((num) => {
            sum += num;
        });
        if(isprime(sum)){
                answer++;
        }
    }
    return answer;
}

function combination(n,array){
    if(n==1){
        return array.map((a)=>[a]);
    }
    const result=[]
    for(let i = 0; i<array.length;i++){
        const a = array.slice(i+1)
        const b = combination(n-1,a)
        const attach = b.map((c)=>[array[i],...c])
        result.push(...attach);
    }
    return result
}

function isprime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}