function solution(s){
    let answer = '';
    let center = Math.floor(s.length / 2);
    answer = s.length % 2 === 0 ? s.slice(center - 1, center + 1) : s.slice(center, center + 1);
    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));