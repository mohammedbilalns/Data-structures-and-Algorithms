

var divide = function(divident , divisor){

    let answerPositive = true
    if(divident <0 && divisor>0 || divident>0 && divisor<0 ){
        answerPositive = false 
    }
    if(divident<0){
        divident = -divident
    }
    if(divisor<0){
        divisor = - divisor
    }

    sum = divisor
    count = 0 
    for(let i=divisor; sum<=divident;i++){
        count++
        sum+= divisor
    }
    return answerPositive === true ? count : -count


    
}

console.log(divide(1,1))