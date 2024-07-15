function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    let answer = arr.length>=1 ? arr:[-1]
    return answer;
}