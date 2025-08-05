// given an array return the array of largest three elements in the array 

function largestThree(arr){
	let largest = -Infinity 
	let secondLargest = -Infinity 
	let thirdLargest = -Infinity 

	for(let elem of arr ){
		if(elem> largest){
			thirdLargest = secondLargest 
			secondLargest = largest 
			largest = elem 
		}else if( elem> secondLargest && elem !== largest){
			thirdLargest = secondLargest 
			secondLargest = elem 
		}else if(elem > thirdLargest && elem !== secondLargest && elem !== largest){
			thirdLargest = elem 
		}
	}
	let res = []

	if(largest!== -Infinity) res.push(largest)
	if(secondLargest !== -Infinity) res.push(secondLargest)
	if(thirdLargest !== -Infinity) res.push(thirdLargest)
	return res 
}



console.log(largestThree([1,3,4,5,6,7,8,3]))
