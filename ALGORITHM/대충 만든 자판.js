function solution(keymap, targets) {
    var answer = [];
    for(let string of targets){
        let press = 0;
        for(let i = 0; i<string.length; i++){
            let count = Infinity;
            for(let key of keymap){
                const idx = key.indexOf(string[i]);
                if(idx > -1) count = Math.min(idx + 1, count);
            }
            if(count === Infinity) {
                press = -1;
                break;
            }
            press += count;
        }
        answer.push(press);
    }
    return answer.includes(-1) ? [-1] : answer;
}