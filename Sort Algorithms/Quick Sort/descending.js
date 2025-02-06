
function descending(arr){
    if(arr.length <2){
        return arr 
    }
    
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    
    for(let i=0 ; i< arr.length-1 ; i++){
        if(arr[i]> pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    
    return [ ...descending(left), pivot, ...descending(right)]
}


console.log(descending([8,4,1,8,2,9,5,3,2]))
