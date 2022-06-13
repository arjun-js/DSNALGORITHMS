/*

Given a string with brackets (only rounded ones), return possible valid string

ex: 'abc((s)' - abc(s)

'((()' - ()

'abc()s((d)' - abc()s(d);

approach : 

[a,b,c] 

[a,b,c,]



*/



//NOT WORKING


function validStringWithBrackets(s){

let stack = [];

let convertedString = s.split('');

let retunedString = [];

for(let i = 0; i < convertedString.length; i++){

    console.log({i, elem: convertedString[i], stack : stack, return: retunedString});
    
    if(convertedString[i]==')'){
        if(stack.length>0){
            stack.pop();
            retunedString.push(convertedString[i]);
        } else {
            retunedString.splice(i,1);
        }
    }

    if(convertedString[i]=='('){
        stack.push(i);
        retunedString.push(convertedString[i]);
    }

    if(i==convertedString.length-1){
        for(let j=0; j< stack.length; j++){
            retunedString.splice(stack[j],1);
        }
    }
}

return retunedString.join('');

}

console.log(validStringWithBrackets('))(('));