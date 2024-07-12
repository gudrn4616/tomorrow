function solution(dice){
    var answer = [] // 결과를 저장할 배열
    let max = 0 // 최대값을 저장할 변수
    const n = dice.length // 주사위 배열의 길이
    const array = new Array(n).fill(0).map((a,i)=>i) // 0부터 n-1까지의 숫자로 이루어진 배열 생성
    console.log(array)
    const combinations = a(3, array) // 3 크기의 조합 생성
}

function a(n,array){
    if(n==1){
        return array.map((a)=>[a]) // n이 1일 때, 배열의 각 요소를 배열로 감싸서 반환
    }
    const result = [] // 결과를 저장할 배열
    for(let i =0; i<array.length;i++){
        const rest=array.slice(i+1) // 현재 요소를 제외한 나머지 배열
        const comb = a(n-1,rest) // 나머지 배열로 n-1 크기의 조합 생성
        const attach = comb.map(c=>[array[i],...c]) // 현재 요소를 각 조합에 추가
        result.push(...attach) // 결과 배열에 추가
    }
    console.log(result) // 결과 출력
    return result // 결과 반환
}

function solution1(nums) {
    var answer = 0;
    var com = combination(3, nums);
    for (var i = 0; i < com.length; i++) {
        // forEach를 사용하여 배열의 각 요소를 더하는 방식입니다.
        var sum = 0;
        com[i].forEach((num) => {
            sum += num;
        });
        if (isPrime(sum)) {
            answer++;
        }
    }
    return answer;
}

function getCombinations(array, n) {
    const result = [];

    // 초기 상태로 빈 배열을 포함한 배열을 생성
    const combinations = Array.from({ length: n + 1 }, () => []);
    combinations[0].push([]);

    for (let item of array) {
        for (let j = n; j > 0; j--) {
            for (let subArray of combinations[j - 1]) {
                combinations[j].push([...subArray, item]);
            }
        }
    }

    return combinations[n];
}

function combination(n, array) {
    if (n == 1) {
        return array.map((a) => [a]);
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const a = array.slice(i + 1);
        const b = combination(n - 1, a);
        const attach = b.map((c) => [array[i], ...c]);
        result.push(...attach);
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(solution([[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]])); // [1, 4]