


// function mergeSort(arr1, arr2){
//     let arr = [...arr1 , ...arr2]
    
//     if(arr.length <2){
//         return arr
//     }
    
//     let mid = Math.floor(arr.length /2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
    
//     return merge(mergeSort(left), mergeSort(right))
// }



// function merge(left , right){
    
//     let sortedArr = []
//     let i=0 
//     let j=0 
    
//     while(i<left.length && j< right.length){
//         if(left[i]< right[j]){
//             sortedArr.push(left[i])
//             i++
//         }else{
//             sortedArr.push(right[j])
//             j++
//         }
//     }
//     if(i<left.length){
//         sortedArr.push(left[i])
//         i++
//     }
//     if(j< right.length){
//         sortedArr.push(right[i])
//         j++
//     }
    
//     return sortedArr
// }


// console.log(mergeSort([4,6,2],[9,4,2]))

function mergeSort(arr) {
    // Base case
    if (arr.length < 2) {
        return arr;
    }
    
    // Split array in half
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Recursive calls and merge
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArr = [];
    let i = 0;
    let j = 0;
    
    // Compare elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
    }
    
    // Push remaining elements
    while (i < left.length) {
        sortedArr.push(left[i]);
        i++;
    }
    
    while (j < right.length) {
        sortedArr.push(right[j]);
        j++;
    }
    
    return sortedArr;
}

// To merge two sorted arrays, you can concatenate them first
console.log(mergeSort([4, 6, 2, 9, 4, 2]));  // [2, 2, 4, 4, 6, 9]