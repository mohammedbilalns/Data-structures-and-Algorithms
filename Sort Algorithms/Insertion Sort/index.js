// Given an array of integers, sort the array 


// O(n^2)T 
function insertionSort(arr){

    for(let i=1;i<arr.length ;i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]> numberToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = numberToInsert
    }
}



console.log(insertionSort([2,4,10,3,5,2,15,10]))