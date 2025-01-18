// Given an array and an element in the array find the index of the element in the array 

function linearSearch(arr, elem){
	for(let i= 0 ; i < arr.length ;i++){
		if(arr[i] == elem){
			return i 
		}
	}
	return -1  
}

