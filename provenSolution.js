// function waterStored(data){
//     let total = 0, maxL = 0, maxR=0;

//     for(let i = 0; i < data.length; i++){
//         for (let j = i-1; j >=0; j--){
//             if(data[j] > maxL){
//                 maxL = data[j];
//             }
//         }
//         for(let k = i+1; k< data.length; k++ ){
//             if(data[k]> maxR){
//                 maxR = data[k]
//             }
//         }
//         const currentWater = Math.min(maxL, maxR) - data[i];
//         maxL=0;
//         maxR=0;
//         if(currentWater > 0){
//             total =  total + currentWater;
//         }
//     }
//     return total;
// }

function waterStored(data){

    let leftPointer = 0, rightPointer = data.length-1, totalWater = 0, maxLeft = 0, maxRight = 0;

    while(leftPointer !== rightPointer){
        let currentWater = 0;
        if(data[leftPointer] <= data[rightPointer]){
          if(data[leftPointer] < maxLeft){
              currentWater = maxLeft - data[leftPointer];
          } else {
              maxLeft = data[leftPointer];
          }
          leftPointer++;
        } else {
            if(data[rightPointer] < maxRight){
                currentWater = maxRight - data[rightPointer];
            } else {
                maxRight = data[rightPointer];
            }
            rightPointer--;
        }
       totalWater += currentWater; 
    }
   return totalWater;
}



console.log(waterStored([5,0,3,0,0,0,2,3,4,2,1]));
console.log(waterStored([0,1,0,2,1,0,3,1,0,1,2]));