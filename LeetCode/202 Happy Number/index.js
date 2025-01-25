


var isHappy = function(n) {
    
    let squaredArr = []
    let isH = false 
    while(n!=1 && squaredArr.includes(n)){
        let strNum = String(n)
        let digitsArr = strNum.split('').map(elem=>parseInt(elem))
        n  = digitsArr.reduce((acc,elem)=> acc+= elem*elem, 0 )
        if(n==1){
            isH = true
            break
        }
     
    }
    return isH

};

console.log(isHappy(19))