function solution(lottos, win_nums) {
    
    var answer = [];
    var rank = [6,6,5,4,3,2,1];
    var zero = 0;
    var math = 0;
    var NumberArr=new Array(46).fill(0);
    for(var k = 0; k<win_nums.length; k++){
        NumberArr[win_nums[k]]++;
    }
    
    for(var i = 0; i < lottos.length ; i++){
        if(lottos[i] === 0){
            zero++;
        }
        else if(NumberArr[lottos[i]]>0){
            NumberArr[lottos[i]]--;
            math++;
        }
    }
    
    answer=[rank[math+zero],rank[math]];
    return answer;
}