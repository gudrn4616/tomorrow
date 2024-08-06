function solution(id_list, reports, k) {
    let answer = []
    
    let id_list_map=new Map();
    let id_list_reportMessage_map = new Map();

    id_list.map(a=>{
        id_list_map.set(a,new Set())
        id_list_reportMessage_map.set(a,0)
    })
    
    for(const report of reports){
        const [reported,reporter]=report.split(' ').reverse()
        id_list_map.get(reported).add(reporter)
    }
    
     id_list_map.forEach((reporters, user)=>{
         if(reporters.size>=k){
             const reporterList = [...reporters];
             for(const reporter of reporterList){
                  id_list_reportMessage_map.set(reporter, id_list_reportMessage_map.get(reporter) + 1);
             }
         }
     })
    
    answer = id_list.map(a=>id_list_reportMessage_map.get(a))
    
    return answer;
}

/*
function solution(id_list, reports, k) {
    const reportMap = new Map();
    const countMap = new Map();
    
    // 초기화
    id_list.forEach(id => {
        reportMap.set(id, new Set());
        countMap.set(id, 0);
    });
    
    // 신고 처리
    reports.forEach(report => {
        const [reporter, reported] = report.split(' ');
        reportMap.get(reported).add(reporter);
    });
    
    // 메일 카운트
    reportMap.forEach((reporters, reported) => {
        if (reporters.size >= k) {
            reporters.forEach(reporter => {
                countMap.set(reporter, countMap.get(reporter) + 1);
            });
        }
    });
    
    // 결과 반환
    return id_list.map(id => countMap.get(id));
}
*/