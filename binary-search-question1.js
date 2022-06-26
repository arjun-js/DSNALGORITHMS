/*

given [1,2,3,3,3,3,5,5,5,6,6,8,8,9]

if given value is 3, return the first and last indices [2,5]


*/


function binarySearchAndLinear(data, value){

    let left = 0, right = data.length-1, tempLeftIndex, tempRightIndex;

    while(left<=right){
        const middle = Math.floor((left+right)/2);
        if(value < data[middle]){
            right = middle-1;
        } else if(value > data[middle]){
            left = middle + 1;
        } else {
            tempLeftIndex = middle;
            tempRightIndex = middle;
            tempLeftIndex = getLeftIndex(data, 0, tempLeftIndex);
            tempRightIndex = getRightIndex(data,tempRightIndex, data.length-1);
            return [tempLeftIndex, tempRightIndex];
        }
    }

    return -1;

}

function getLeftIndex(value,left, right){

    let leftIndex = right;

    while(right>left){
        if(value[right] == value[right-1]){
            right--;
            leftIndex--;
        } else {
            return leftIndex;
        }
    }

    return leftIndex;

}

function getRightIndex(value,left, right){

    let rightIndex = left;

    while(left<right){
        if(value[left] == value[left+1]){
            left++;
            rightIndex++;
        } else {
            return rightIndex;
        }
    }

    return rightIndex;

}

console.log(binarySearchAndLinear([1,2,3,3,3,3,5,5,5,6,6,8,8,9],1))