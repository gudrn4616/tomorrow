function solution(food) {
    var left = '';
    var right = '';

    for (var i = 1; i < food.length; i++) {
        var count = 0;
        
        while(count<(food[i]/2-0.5)){
            left+=`${i}`;
            count++;
        }
        
    }
    for (var k = left.length - 1; k >= 0; k--) {
        right += left[k];
    }
    var answer = left + '0' + right;
    
    return answer;
}