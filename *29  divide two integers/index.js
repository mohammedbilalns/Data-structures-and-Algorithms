

var divide = function(dividend , divisor){
    let divid = Math.abs(dividend)
    let divs = Math.abs(divisor)
    let answer = 0 
    while(divid>= divs){
        divid-= divs 
        answer++ 
    }
    
    if((dividend<0 && divisor>0) ||(dividend>0 && divisor<0)){
        return -answer
    }
    
    return answer 

    
}

console.log(divide(10,3))