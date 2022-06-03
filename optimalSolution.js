function longestSubString(s){
    let l = 0, seenMap = new Map(), longest = 0;

    for (let r=0; r< s.length; r++){
        const current = s[r];
        const seenMapValue = seenMap.get(current);
        if(seenMapValue>=l){
            l = seenMapValue + 1;
        }
        seenMap.set(current, r);
        longest = Math.max(longest, r-l+1);
    }

    return longest;

}


console.log(longestSubString('abcbcaa'));