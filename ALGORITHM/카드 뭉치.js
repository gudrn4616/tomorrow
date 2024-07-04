function solution(cards1, cards2, goal) {
    var i = 0 , j = 0 , k = 0;
    while(k < goal.length){
        if(i < cards1.length && cards1[i]==goal[k]){
            i++;
        }
        else if(j < cards2.length && cards2[j]==goal[k]){
            j++;
        }
        else{
            return "No"
        }
        k++;
    }
    
    return "Yes";
}