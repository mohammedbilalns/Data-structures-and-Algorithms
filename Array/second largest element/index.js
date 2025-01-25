// Given an array find the second largest element from the array
// first aproach using sorting O(n log n ) time complexity and O(!) space 

function secondLargestBySort(arr){
	let length = arr.length 

	for(let i=length-2;i>=0 ;i--){
		if(arr[i]!= arr[length]){
			return i 
		}
	}
	return -1 
}

// Two pass search - O(n)T  and O(1)S - Traverse once to find the largest and again to find the second largest 
// One pass search -O(n)T and O(1)S - Traverse once to find the largest and the second largest together using conditionals  



