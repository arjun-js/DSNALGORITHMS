/*

Find kth smallest element in an unordered list

How ? 

sort it and find the index of k-1;

*/

function quickSelect(data, left, right, kIndex){
    if(left<right){
          let pivot = right;
        let partitionIndex = getPartitionIndex(data, pivot, left, right);
        console.log({kIndex, partitionIndex});
        if(kIndex<partitionIndex){
            quickSelect(data, left, partitionIndex-1, kIndex);
        } else {
            quickSelect(data, partitionIndex, right, kIndex);
        }
    }
    
}


function getPartitionIndex(data, pivot, left, right){
    let partitionIndex = left;
    let pivotElement = data[pivot];

    for(let i= left; i<right;i++){
        if(data[i]<pivotElement){
            swap(data, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(data, partitionIndex, pivot);
    return partitionIndex;
}

function swap(data, i, j){
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}



function getKthSmallestElement(data, k){
 const index = k-1;
 quickSelect(data, 0, data.length-1, index);
 return data[index];
}


console.log(getKthSmallestElement([3,4,6,1,2,77,88], 2));

