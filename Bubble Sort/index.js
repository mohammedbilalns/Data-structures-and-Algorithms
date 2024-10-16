// Given an array of integers , sort the array 

// Approach 1 :  O(n^2)T 
function bubbleSort(arr) {
  
    do{
        swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
       if(arr[i]> arr[i+1]){
        let temp  = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
       }
    }
}while(swapped)
    return arr
}


console.log(bubbleSort([2, 4, 1, 5, 10, 6]))