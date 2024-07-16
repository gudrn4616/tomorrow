function solution(X, Y) {
    // 숫자 빈도를 계산하는 함수
    function getDigitCount(str) {
        let count = new Array(10).fill(0);
        for (let char of str) {
            count[char]++;
        }
        return count;
    }

    // X와 Y의 숫자 빈도 계산
    let countX = getDigitCount(X);
    let countY = getDigitCount(Y);

    // 공통 숫자를 찾기
    let commonDigits = [];
    for (let digit = 9; digit >= 0; digit--) {
        let commonCount = Math.min(countX[digit], countY[digit]);
        if (commonCount > 0) {
            commonDigits.push(String(digit).repeat(commonCount));
        }
    }

    // 공통 숫자가 없으면 -1 반환
    if (commonDigits.length === 0) {
        return "-1";
    }

    // 공통 숫자들로 가장 큰 숫자 만들기
    let result = commonDigits.join('');
    
    // 공통 숫자가 0으로만 구성되어 있으면 0 반환
    if (result[0] === '0') {
        return "0";
    }

    return result;
}

/* 다시 풀어보기 */