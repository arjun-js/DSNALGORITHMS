/*

Given {[()]}

Return true if the brackets are closed correctly and meaningfully

test cases: 

'' - true
{}()[] - true
{[(]}) - false
{()[]} - true

Approach : 

if we find a right bracket, then immediate must be closing left bracket

create a stack

*/



function isStringContainsValidBrackets(s){
    const brackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    const stack = [];
    for(let i=0; i<s.length ; i++){
        if(brackets[s[i]]){
            stack.push(s[i])
        } else {
            const lastElement = stack.pop();
            if(brackets[lastElement] != s[i]){
                return false;
            }
        }
    }
    if(stack.length>0) return false;
    return true;
}



console.log(isStringContainsValidBrackets('{[(){}]{}}'))