/*

a = 'abc#d'
b = 'abcd##d'

two pointers

p1 for a

p2 for b


length stores length of largest string

while loop by decreasing length upto 0

check if p1 contains #, if yes do not store the coming character or else store 

check if p2 contains #, if yes do not store the coming character or else store

if either of p1 or pp2 do not contain #, check 

*/

function checkBackSpaceEquality(string1, string2){

    let p1 = string1.length-1, p2 = string2.length-1;

    while (p1>=0 && p2>=0){
        if(string1[p1] == '#' || string2[p2] == '#'){
           if(string1[p1]=='#'){
               let backCount = 2;
               while(backCount > 0){
                   p1--;
                   backCount --;
                   if(string1[p1] == '#'){
                       backCount = backCount + 2;
                   }
               }
           } 
           if(string2[p2]=='#'){
            let backCount = 2;
            while(backCount > 0){
                p2--;
                backCount --;
                if(string2[p2] == '#'){
                    backCount = backCount + 2;
                }
            }
        } 
        } else {
            if(string1[p1] !== string2[p2]){
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
   
    return true;
} 


console.log(checkBackSpaceEquality('abc#d','abz#d'))