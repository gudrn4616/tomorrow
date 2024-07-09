function solution(dice){
    var answer = [] // 결과를 저장할 배열
    let max = 0 // 최대값을 저장할 변수
    const n = dice.length // 주사위 배열의 길이
    const array = new Array(n).fill(0).map((a,i)=>i) // 0부터 n-1까지의 숫자로 이루어진 배열 생성
    const combinations = a(n/2,array) // n/2 크기의 조합 생성
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


console.log(solution([[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]])); // [1, 4]
