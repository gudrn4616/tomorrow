var arr= new Array(1000);
arr[0]=arr[1]=1;
for(var i = 2 ;i<1000;i++){
    arr[i]=arr[i-1]+arr[i-2];
    console.log(arr[i]);
}