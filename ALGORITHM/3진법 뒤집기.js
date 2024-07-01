function solution(n) {
    var str = n.toString(3); // 3진법으로 변환
    var reversedStr = str.split('').reverse().join(''); // 문자열 뒤집기
    var answer = parseInt(reversedStr, 3); // 다시 10진법으로 변환
    return answer;
}
