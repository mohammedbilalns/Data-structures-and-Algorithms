// insert given  element in the given position of an array 
// O(n)T 

let arr = [ 23 , 13 , 32 , 43 , 23]

function insertElement(array, elementToInsert , pos){
	for(let i = array.length; i>= pos+1 ; i--){
		array[i] = array[i-1]
	}
	array[pos] = elementToInsert

}



insertElement(arr , 4, 2)
console.log(arr)
