// Given an array of integers find the largest element in the array O(n)T O(1)S 

function findLargest(arr){
	let largest = arr[0]
	for(let i=1;i<arr.length;i++){
		if(arr[i]> largest){
			largest = arr[i] 
		}

	}
	return largest
}

// Using Recursion  O(n)T O(n)S 

function findLargestRecursive(arr, index = 0 ){

	if(index == arr.length-1){
		return arr[index] 
	}

	let remMax = findLargestRecursive(arr, index+1)
	return Math.max(arr[index], remMax)

}



// using builtin libraries 
function findLargestLibraries(arr){
	return Math.max(...arr)
}



console.log(findLargestRecursive([234,23423,123,123,12323,2312342]))
