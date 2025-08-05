
// iterative - Approach - O(n^2)
function moveZeroes(arr){

	for(let i=0;i<arr.length ; i++){
		if(arr[i] == 0){
			for(let j=i ; j< arr.length-1 ;j++){
				arr[j] = arr[j+1]
			}

		}
	
	}
	return arr 
}


function moveZeroes2(arr){
	let nonZeroIndex = 0 

	for(let i=0 ; i <arr.length ; i++){
		if(arr[i] !== 0 ){
			[arr[i], arr[nonZeroIndex]] = [ arr[nonZeroIndex], arr[i] ]
			nonZeroIndex++ 
		}
	}

	return arr 
}

function moveZeroesToFront(arr){

	let lastNonZeroindex = arr.length-1 

	for(let i= arr.length -1 ; i>=0 ;i--){
		if(arr[i] !== 0 ){
			[arr[i], arr[lastNonZeroindex]] = [arr[lastNonZeroindex], arr[i]]
			lastNonZeroindex-- 
		}
	}
	return arr 
}

let arr = [0,5,0,6,2,0,2,4]

console.log(moveZeroes2(arr))
