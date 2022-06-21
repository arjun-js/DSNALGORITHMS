function mergeSort(data){

    //base case

    const length = data.length;

    if(length == 1){
        return data;
    }

    const left = data.slice(0, parseInt(length/2));
    const right = data.slice(parseInt(length/2), length);

  //  console.log({left, right})

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right){
    const output = [];
    
    let leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            output.push(left[leftIndex]);
            leftIndex++;
        } else {
            output.push(right[rightIndex]);
            rightIndex++;
        }
    }

    console.log(output);

    return output.concat(left.slice(leftIndex), right.slice(rightIndex));
}


console.log(mergeSort([5,4,3,6,7,1,9,8]));