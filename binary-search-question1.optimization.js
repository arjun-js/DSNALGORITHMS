/*

given [1,2,3,3,3,3,5,5,5,6,6,8,8,9]

if given value is 3, return the first and last indices [2,5]


*/


function binarySearch(data, left, right, value){
    console.log({data, left, right, value});
    while(left<=right){
        const middleValue = Math.floor((left+right)/2);
        if(value<data[middleValue]){
            right = middleValue-1;
        } else if(value > data[middleValue]){
            left = middleValue+1;
        } else {
            return middleValue;
        }
    }

    return -1;

}


function getFirstAndLastIndices(data, value){

    let firstOccurence = binarySearch(data, 0, data.length-1, value);
    let leftIndex = firstOccurence, rightIndex = firstOccurence;

    console.log(firstOccurence);

    let leftI = leftIndex, rightI = rightIndex;

    while(leftI !== -1){ 
        leftI = binarySearch(data, 0, leftI-1, value);
        if(leftI !==-1){
            leftIndex = leftI;
        }
    }

    while (rightI !==-1){
        rightI = binarySearch(data,rightI+1 , data.length - 1, value);
        if(rightI !== -1){
            rightIndex = rightI;
        }
    }

    return [leftIndex, rightIndex];
}

console.log(getFirstAndLastIndices([1,2,3,3,3,3,5,5,5,6,6,8,8,9],8));



