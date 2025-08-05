// Given an array and an index delete the element at the index from the array 

function deleteFromArrayUsingIndex(array, index){

	for(let i=index;i<= array.length-2;i++){
		array[i] =  array[i+1]
	}
	delete array[array.length-1] 
}


// Given an array and an element in the array delete the element from the array 

function findIndex(array, element){
	for(let i= 0 ; i <array.length;i++){
		if(array[i] == element){
			return i 
		}
	}
	return - 1 
}

function deleteFromArrayUsingElement(array , element){

	let index = findIndex(array, element)
	if(index ==-1 ){
		console.log("Element not found")
		return -1 
	}
	deleteFromArrayUsingIndex(array, index)

}






let arr = [234 ,23 , 234 , 43 ]
deleteFromArrayUsingElement(arr,23)
console.log(arr)
