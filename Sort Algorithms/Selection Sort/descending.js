// sort an array in descending order 

function selectionSort(arr){

	let n = arr.length 
	for(let i=0 ;i<n;i++){
		
		let largestIndex = i+1 
		for(let j=i+1;j< n;j++){
			largestIndex = arr[j]> arr[largestIndex] ? j : largestIndex
		}

		[arr[i], arr[largestIndex]] = [arr[largestIndex], arr[i]]
	}
}


let arr = [1,3,9,1,3,5,3,6,3]
selectionSort(arr)
console.log(arr)

