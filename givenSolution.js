function valisString(s){
    let convertedString = s.split('');
    let stack = [];

    for(let i = 0; i<convertedString.length; i++){
        if(convertedString[i]=='('){
            stack.push(i);
        } else if(convertedString[i]==')' && stack.length){
            stack.pop();
        } else if(convertedString[i]==')'){
            convertedString[i]='';
        }
    }
    for(let j =0; j<stack.length;j++){
        convertedString[stack[j]]= ''
    }
    
    return convertedString.join('');
}

console.log(valisString('))(()aaaassss()'));