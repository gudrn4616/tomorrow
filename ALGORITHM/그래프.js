function solution(edges){
    const graph = edges.reduce((map, key) => {
        if (!map.has(key[0])) {
            map.set(key[0], [key[1]]);
        } else {
            map.get(key[0]).push(key[1]);
        }
        return map;
    }, new Map());
    console.log(graph)

    return graph
}


function a(edges){

    const graph = (edges)=>{
        const info = edges.reduce((map,key)=>{
            if(!map.has(key[0])){
                map.set(key[0],[1,0])
            }
            else{
                const [give,recive] = map.get(key[0]);
                map.set(key[0],[give+1,recive])
            }
            if(!map.has(key[1])){
                map.set(key[1],[0,1])
            }
            else{
                const [give,recive] = map.get(key[1]);
                map.set(key[1],[give,recive+1])
            }
    
            return map;
        },new Map())
        return info;
    }

    const check = (graph)=>{
        const res = new Array(4).fill(0);
        for(const [key, io] of graph){
            const [give,receive]=io;
            if(give>=2 &&receive==0){
                res[0]=key;
            }
            else if(give == 0){
                res[2]++;
            }
            else if(give >= 2 && receive >= 2){
                res[3]++;
            }
            
            
        }
        res[1]=graph.get(res[0])[0]-res[2]-res[3]
        return res;
    }
    const va1= graph(edges);
    const va2=check(va1);

    return va2;
}




console.log(a([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]));