
// sort an array in ascending order 
function selectSort(arr){
	let n = arr.length 

	for(let i=0;i< n ;i++){
		
		let smallestIndex = i 
		for(let j=i+1;j< n ;j++){
			smallestIndex = arr[j] < arr[smallestIndex] ? j : smallestIndex

		}
		[arr[i], arr[smallestIndex]] = [ arr[smallestIndex], arr[i]]
	}
}
let arr = [8,3,2,1,6,3,4]
selectSort(arr)
console.log(arr)
