// Question : Given an array of integers, return the indices of two numbers in the array which can add up to target number

/*

Example : x = [2,3,4,5]; target = 8; 

solution : [1,3] Indices of 3 and 5

Step1 : Ask questions


*/

// function findTwoSum(data, target){
//     for(let i = 0; i< data.length-1; i++){    
//         for(let j = i+1; j< data.length; j++){
//             if(data[j]==target - data[i]){
//                 return [i,j];
//             }
//         }
//     }
//     return null;
// }

function findTwoSum(data, target){
    const targetNumberMap = {

    }
    for(let i = 0; i<data.length; i++){  
        const numberToFind = target-data[i];
        console.log(targetNumberMap, data[i]);
        if(targetNumberMap[data[i]] >=0){
            return [targetNumberMap[data[i]], i]
        } else {
            targetNumberMap[numberToFind] = i;
        }
    }
    return null;
}


const indicesOfTwoNumbers = findTwoSum([2,3,4,5,20,34,56], 54);

console.log(indicesOfTwoNumbers);