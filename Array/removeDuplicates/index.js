
// O(n^2)T

function removeDuplicates(arr){

	let seen = new Set()

	for(let i=0;i<arr.length;i++){
		if(seen.has(arr[i])){
			arr.splice(i,1)
		}else {
			seen.add(arr[i])
		}
	}	
}

let arr = [ 324,23,123, 23,123 ]
removeDuplicates(arr) 
console.log(arr)
