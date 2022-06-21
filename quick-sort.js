function quickSort(data, left = 0, right = data.length-1){

    if(left<right){
        let pivot = right;

        let partitionIndex = getPartitionIndex(data, pivot, left, right);

        quickSort(data,left, partitionIndex-1);
        quickSort(data, partitionIndex, right);

    }

    return data;
}

function getPartitionIndex(data, pivot, left, right){
    let partitionIndex = left;
    let pivotValue = data[pivot];
    for(let i = left; i<right; i++){
        if(data[i]<pivotValue){
            swap(data, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(data, pivot, partitionIndex);
    return partitionIndex;
}

function swap(data, i,j ){
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}




console.log(quickSort([4,3,1,5,8,0,88,9,7]));