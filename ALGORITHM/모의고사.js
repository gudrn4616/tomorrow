function solution(answers) {
    var answer = [];
    var result = [0, 0, 0]
    const arr = [[1,2,3,4,5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    var firstarr= arr[0].length;
    var secondarr= arr[1].length;
    var thirdarr = arr[2].length;
    
    for(let i = 0; i<answers.length; i++){
        if(arr[0][i%firstarr] === answers[i]) result[0]++;
        if(arr[1][i%secondarr] === answers[i]) result[1]++;
        if(arr[2][i%thirdarr] === answers[i]) result[2]++;
    }

    var max = Math.max(result[0], result[1], result[2]);
    for(let i = 0; i<result.length; i++){
        if(max === result[i]) answer.push(i+1);
    }
    return answer;
}

/*
최적화 야무짐
function solution(answers) {
    var answer = [];
    // 첫 번째 수포자의 답안 패턴
    var a1 = [1, 2, 3, 4, 5];
    // 두 번째 수포자의 답안 패턴
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    // 세 번째 수포자의 답안 패턴
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 첫 번째 수포자의 정답 개수 계산
    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    // 두 번째 수포자의 정답 개수 계산
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    // 세 번째 수포자의 정답 개수 계산
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    // 가장 많은 정답 개수 찾기
    var max = Math.max(a1c,a2c,a3c);

    // 가장 많은 정답을 맞춘 수포자 찾기
    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}
****filter 함수 사용법*****
// 원본 배열
const numbers = [1, 2, 3, 4, 5, 6];

// 짝수만 필터링하는 함수
const isEven = (num) => num % 2 === 0;

// filter 메소드를 사용하여 짝수만 추출
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // [2, 4, 6]
*/