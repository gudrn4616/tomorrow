function solution(s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        let x = s[i];
        let xCount = 0;
        let otherCount = 0;

        while (i < s.length) {
            if (s[i] === x) {
                xCount++;
            } else {
                otherCount++;
            }

            i++;

            if (xCount === otherCount) {
                break;
            }
        }

        count++;
    }

    return count;
}


function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            let end = stack.slice(-4).join('');
            if (end === '1231') {
                answer++;
                stack.splice(-4);
            }
        }
    }
    return answer;
}