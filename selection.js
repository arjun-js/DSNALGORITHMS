/*
selection sort : 

start from index 0, 

compare it with all the elements ahead, make sure to have smallest element in first place


*/


function selectionSort(data){
for(let i = 0; i<data.length; i++){
    for (j=i+1; j<data.length; j++){
        if(data[i]>data[j]){
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}
return data;

}


console.log(selectionSort([2,3,44,5,1,44,333,76,87]))