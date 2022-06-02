/*

If two strings are given, find them if they are equal or not

but, if you find any character # then you need to consider it as a backspace

my approach: 

1. loop through strings (2 loops) 

2. store the result in array, if we find # then pop the element from array.

3. join the array and search for equality

*/

function areTheStringsEqual(string1, string2){

let firstArray = [], secondArray = [];

for(let i = 0; i< string1.length; i++){
    const character = string1.split('')[i];
    if( character!== '#'){
        firstArray.push(character);
    } else {
        firstArray.pop();
    }
}

for(let i = 0; i< string2.length; i++){
    const character = string2.split('')[i];
    if( character!== '#'){
        secondArray.push(character);
    } else {
        secondArray.pop();
    }
}

if(firstArray.length !== secondArray.length){
    return false;
} else {
    for(let i=0; i< firstArray.length; i++){
        if(firstArray[i] !== secondArray[i]){
            return false;
        }
    }
}
return true;
}

console.log(areTheStringsEqual("asb#c######", "asdd#######"));