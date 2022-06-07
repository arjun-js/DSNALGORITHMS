/*

find whether a string is palindrome or not

string : aabaa

approach : 

p1 = 0, p2 = str.length-1;

if length is even > p2-p1 = 1;

if length is odd p1=p2;


*/


function isStringaPalindrome(s){

    s= s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();   


    let p1=0, p2= s.length-1, length = s.length;

    while(p1<=p2){ 
        console.log({s1 : s[p1], s2: s[p2]})
        if(length/2 == 0){
            if(p2-p1 == 1){
              return s[p1] == s[p2];  
            }
        } else {
            if(p1==p2){
                return true;
            }
        }
        if(s[p1]==s[p2]){
            p1++;
            p2--;
        } else {
           return false;
        }
        
    }

    return true;
}

console.log(isStringaPalindrome('babbab'));