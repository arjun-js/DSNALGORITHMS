/*
If the values in an integer array represents a pipe on y axis with value as length

create a container with two pipes and return the largest container area wise.

ex: [7,2,3,4,9];

solution : 

highest area : length*width

length = differences of indices

width  = minimum of two values

so, approach would be to loop through all the elements and find max area and return the max area

Optimal solution : 

two pointer approach, see the function below

*/


// function findMaximumArea(data){
//     var maximumArea = 0;
//     for (let i = 0; i< data.length; i++){
//         for (let j= i+1; j< data.length; j++){
//           const length = getMinimum(data[i], data[j]);
//           const width = differenceInIndex(i,j);
//           const area = findArea(length, width);
//           if(area > maximumArea){
//               maximumArea = area;
//           }
//         }
//     }

//     return maximumArea;
// }

function findMaximumArea(data){
    let p1=0, p2=data.length-1,maxArea = 0;

    while(p1<p2){
        const height = getMinimum(data[p1], data[p2]);
        const width = p2-p1;
        const area = findArea(height, width);
        maxArea = Math.max(area, maxArea);
        if(data[p1]<data[p2]){
            p1++;
        }
        if(data[p1]>data[p2]){
            p2--;
        }
    }

    return maxArea;
}

function getMinimum(a,b){
  return a<b ? a : b;
}

function differenceInIndex(p1, p2){
    return p2-p1;
}

function findArea(length, width){
    return length*width;
}

console.log(findMaximumArea([10,3,4,5,6,4,9,1,88,1]));