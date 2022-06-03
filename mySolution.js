/*

'abcdefaghijkli'

find a substring without repeating characters and return maximum length

answer : bcdefaghijkl - 12 

Approach :  



*/

function subString(str){
    let maxLength = 0;
    for(let i = 0; i< str.length; i++){  
        const string = {
            [str[i]]: str[i]
        };
        let len = 1;
        for(let j = i+1; j < str.length; j++){ 
            if(string[str[j]]){
                break;
            } else {
                string[str[j]]= str[j];
                len++;
            }
            console.log({i : str[i], j: str[j],string, len});
        }
        if(len > maxLength){
            maxLength = len;
        }
    }

    return maxLength;
}

console.log(subString('abcdefaghijkli'));