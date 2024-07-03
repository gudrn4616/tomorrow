function solution(a, b) {
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day_name = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var answer = '';
    
    let day = b - 1;
    for(let i = 1 ; i<a ;i++){
        day+=month[i];
    }
    
    answer = day_name[day%7];
    
    return answer;
}