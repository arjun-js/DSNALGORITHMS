/*

[1,3,0,4,3,0,4] 

Draw a graph with above numbers with width as one unit, wherever there is 0, it is a gap between the two blocks
If it rains on the graph, how much water will be saved?

Approach : pointer approach



*/



function waterSaved(data){
    var p1=0,p2=1, waterUnits = 0, numberofStorageBlocks = 0;
    while(p2<data.length){
        if(data[p2]==0){
           numberofStorageBlocks = numberofStorageBlocks + 1; 
        } else {
            if(numberofStorageBlocks > 0){
            waterUnits = waterUnits + Math.min(data[p1], data[p2]) + ((numberofStorageBlocks > 1) ? numberofStorageBlocks : 0);
            numberofStorageBlocks = 0;
            }
            p1=p2;
        }
        p2++;
    }
    return waterUnits;
}

console.log(waterSaved([1,0,2,0,4,3,0,1]));
console.log(waterSaved([1,1,0,1,0,0,2,0,3]))
console.log(waterSaved([0,1,0,2,1,0,3,1,0,1,2]));