
// worst case O(n^2)(for sroted arrays) avg case  - o(n log n  )
function quickSort(arr){
    if(arr.length <2) return arr 

     let pivot = arr[arr.length-1]
     let left = []
     let right = []
     for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
     }
     return [...quickSort(left), pivot , ...quickSort(right)]

}


console.log(quickSort([2,1,4,1,3,2,4,2,3])) 