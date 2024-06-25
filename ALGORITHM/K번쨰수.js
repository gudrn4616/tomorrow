function solution(array, commands) {
    var answer=[];
    for(var i = 0;i<commands.length;i++){
        var sol=[];
        for(var k=commands[i][0]-1;k<commands[i][1];k++){
            sol.push(array[k]);
        }
        sol.sort((a,b)=>a-b);
        answer.push(sol[commands[i][2]-1]);
    }
    return answer;
}

//foreach문
/*
function solution(array, commands) {
    var answer=[];
    commands.forEach(command => {
        [i,j,k]=command;
        var slicearr=array.slice(i-1,j);
        var sortarr=slicearr.sort((a,b)=>a-b);
        answer.push(sortarr[k-1]);
    });
    return answer;
}
*/