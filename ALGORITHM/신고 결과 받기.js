function solution(id_list, reports, k) {
    // 신고 정보를 저장할 Map
    const reportMap = new Map();
    // 각 사용자가 받은 결과 메일 수를 저장할 Map
    const countMap = new Map();
    
    // 모든 사용자에 대해 초기화
    id_list.forEach(id => {
        reportMap.set(id, new Set()); // 중복 신고를 방지하기 위해 Set 사용
        countMap.set(id, 0); // 초기 메일 수는 0
    });
    
    // 모든 신고 내역을 처리
    reports.forEach(report => {
        const [reporter, reported] = report.split(' ');
        reportMap.get(reported).add(reporter); // 신고된 사용자에 대한 신고자 추가
    });
    
    // 신고 결과 처리
    reportMap.forEach((reporters, reported) => {
        if (reporters.size >= k) { // k번 이상 신고된 경우
            reporters.forEach(reporter => {
                // 해당 신고자의 메일 수 증가
                countMap.set(reporter, countMap.get(reporter) + 1);
            });
        }
    });
    
    // 각 사용자가 받은 결과 메일 수를 배열로 변환
    let answer = id_list.map(id => countMap.get(id))
    
    return answer;
}