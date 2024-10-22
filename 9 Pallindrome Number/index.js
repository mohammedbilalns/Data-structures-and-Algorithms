
var isPalindrome = function(x){
    
    const stringNum = String(x)
    const reversedNum = stringNum.split('').reverse().join('')
    
    if(stringNum === reversedNum){
        return true
    }
    return false
}

console.log(isPalindrome(1221))