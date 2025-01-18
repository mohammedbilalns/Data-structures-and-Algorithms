// given two vairables a and b containing integers swap them 

// using temporary variable 

let a = 2 , b = 45 
let temp = a 
a = b 
b = temp 

// Without temp using destructuring 
let c = 34 ; 
let d = 23 ; 

[c,d] = [d,c]
console.log(d,c)
