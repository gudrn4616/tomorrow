function solution(num) {
    var answer = 0;
    while(num!=1 && answer!=500){
        num = num%2==0?(num/2):(3*num+1)
        answer++;
    }
    return num==1?answer:-1;
}

/*
https://school.programmers.co.kr/learn/courses/30/lessons/12943
*/