function solution(n, lost, reserve) {
    var answer = 0;
    var arr = new Array(n+1).fill(1)
    var spare = 0;
    
    for(const j of reserve){
        arr[j]=2
    }
    
    for(const i of lost){
        if(arr[i]==2){
            arr[i]=1
        }
        else{
            arr[i]=0;
        }
        
    }
    
    for(let i = 1;i<arr.length;i++){
        if(arr[i]==1){
            answer++
        }
        else if(arr[i]==2){
            if(arr[i-1]==0){
                arr[i-1]++;
                answer++
            }
            else if(arr[i+1]==0){
                arr[i+1]++;
            }
            answer++
        }
    }
    
    return answer;
}