// Given an array of n elements and a target element t , find the index of t in the array , return -1 if the target element is not found 

// first approach - O(n)T
function linearSearch(arr, target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target) return i
    }
    return -1
}

console.log(binarySearch([1,4,21 ,43,234,23],234))
