/*

mostly depends on unshift and splice methods

loop through array : 

if current element is less than what is present at 0 

then remove the current element from the position and add it to the first

else

figure out where to keep the element

first check if the element fits in between 0 and 1

then 1 and 2 

till i

if it fits anywhere

add it at the middle 


*/




function insertion(data){
    for(let i = 0; i< data.length; i++){
        if(data[i]<data[0]){
            data.unshift(data.splice(i,1)[0]);
        } else {
            for(let j=1; j<i; j++){
                if(data[i]>data[j-1] && data[i]<=data[j]){
                    data.splice(j,0,data.splice(i,1)[0])
                }
            }
        }
    }
    return data;
}

console.log(insertion([5,7,6,3,2,1,8,4]))