// Given an array of integers and a number kk, find the maximum sum of any contiguous subarray of size k.


let a = (arr,k)=> {
    let windowSum = 0 
    
    // sum of the first window 
    for(let i=0;i<k;i++){
        windowSum+= arr[i]
    }
   let  maxSum = windowSum 

   for(let i=k;i<arr.length;i++){
    windowSum+= arr[i] - arr[i-k]
    maxSum = Math.max(maxSum, windowSum)
   }

   return maxSum

}



console.log(a([2, 1, 5, 1, 3, 2],3))