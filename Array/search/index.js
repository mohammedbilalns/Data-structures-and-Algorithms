// Given an array and an element in the array find the index of the element from the array 



function searchArray(array , element){
	for(let i=0; i <= array.length-1 ;i++){
		if(array[i] == element){
			return i 
		}
	}
	return -1 
}
