function solution(today, terms, privacies) {
    var answer = [];
    let todayarr = today.split('.').map(Number); // 숫자로 변환
    let count = 1;

    for (const privacy of privacies) {
        let privacyArr = privacy.split(' ');
        let privaciedayArr = privacyArr[0].split('.').map(Number);

        // 수집일로부터 오늘까지의 일수 계산
        let life = ((todayarr[0] - privaciedayArr[0]) * 12 + (todayarr[1] - privaciedayArr[1])) * 28 + (todayarr[2] - privaciedayArr[2]);

        for (const term of terms) {
            let termArr = term.split(' ');

            if (privacyArr[1] == termArr[0]) { // 개인정보의 약관 종류와 일치하는 경우
                let duration = parseInt(termArr[1]); // 유효기간을 숫자로 변환
                if (life >= (duration * 28)) { // 유효기간이 지났는지 확인
                    answer.push(count); // 파기해야 할 개인정보 번호 추가
                    break;
                }
            }
        }
        count++;
    }
    return answer;
}
