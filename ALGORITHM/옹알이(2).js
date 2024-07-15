function solution(babbling) {
    const cans = ["aya", "ye", "woo", "ma"]; // 사용할 수 있는 단어 목록
    let answer = 0; // 가능한 단어의 수를 저장할 변수

    for (let word of babbling) { // 주어진 단어 목록을 순회
        let temp = word; // 현재 단어를 임시 변수에 저장
        let isValid = true; // 현재 단어가 유효한지 여부를 저장할 변수
        for (let can of cans) { // 사용할 수 있는 단어 목록을 순회
            if (temp.includes(can.repeat(2))) { // 현재 단어에 반복된 단어가 포함되어 있는지 확인
                isValid = false; // 반복된 단어가 포함되어 있으면 유효하지 않음
                break; // 반복문 종료
            }
            temp = temp.split(can).join(" "); // 현재 단어에서 사용할 수 있는 단어를 공백으로 대체
        }
        if (isValid && temp.trim() === "") answer++; // 유효하고 모든 단어가 대체되었으면 가능한 단어 수 증가
    }

    return answer; // 가능한 단어 수 반환
}