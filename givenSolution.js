function buildDesiredString(string){
   const desiredString = [];

   for(let p=0; p< string.length; p++){
       if(string[p]!=='#'){
           desiredString.push(string[p]);
       } else {
           desiredString.pop();
       }
   }

   return desiredString;

}

const checkBackSpaceEquality = function(firstString, secondString){

    const finalString1 = buildDesiredString(firstString);
    const finalString2 = buildDesiredString(secondString);

    if(finalString1.length !== finalString2.length){
        return false;
    } else {
        for(let pointer=0; pointer<finalString1.length; pointer++){
            if(finalString1[pointer] !== finalString2[pointer]){
                return false;
            }
        }
    }

    return true;
}

console.log(checkBackSpaceEquality('satya##sa', 'satiui###sa'));
