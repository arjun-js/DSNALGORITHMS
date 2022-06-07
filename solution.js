/*

check whether a string is almost palindrome or not.

Almost palindrome : If we remove one character and then if it becomes a palindrome then the string is called as almost 
palindrome


*/

function isSubStringPalindrome(s, l, r){
    while(l<r){
        if(s[l]!==s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}


function isAlmostPalindrome(s){
    let l = 0, r= s.length-1;
    while(l<r){
        if(s[l] !== s[r]){
            return isSubStringPalindrome(s, l+1, r) || isSubStringPalindrome(s, l, r-1);
        }
        l++;
        r--;
    }
    return true;
}


console.log(isAlmostPalindrome('abdcexcdba'))