function solution(s) {
    var Alp=new Array(26);
    var answer = [];
    
    for(var i = 0; i<26;i++){
        Alp[i]=-1;
    }
    
    for(var i = 0; i<s.length ;i++){
        var index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        
        if(Alp[index] == -1)    answer.push(-1);
        else                    answer.push(i-Alp[index]);
            
        Alp[index] = i;
    }
    
    return answer;
}