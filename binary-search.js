/*

sort and search an array

*/


function binarySearch(data, value){

    let index = null;

    index = search(data, 0, data.length-1, value);

    return `${value} found at ${index}`

}

function search(data, left, right, value){

    if(left > right){
        return -1;
    }

    const middle = parseInt((left+right)/2);
    console.log({middle,  left, right, mid : data[middle] });
    if(data[middle] > value){
        return search(data, left, middle-1, value);
    } else if(data[middle] < value){
        return search(data, middle + 1, right, value);
    } else {
        return middle;
    }

}





console.log(binarySearch([3,4,5,6,7,8,9], 10));