



var longestCommonPrefix = function(strs) {
    
    let longestLength = strs.reduce((acc, elem)=>{
        return acc = elem.length> acc? elem.length: acc 
    }, 0)

    let chars = []

    for(let i=0;i<longestLength;i++){
        let isEqual = true 
        let char = strs[0][i]
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!== char){
                isEqual = false
            }
        }
        if(isEqual){
            chars.push(char)
        }else{
            break
        }

    }

    return chars.join('')
};                                                   



console.log(longestCommonPrefix(["flower","flow","flight"]))