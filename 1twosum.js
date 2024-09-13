// Given an array of integers nums and intege target , return indices of the tow numbers such thta they add up to target 


var twoSum = function(nums, target){
	
	let arrayLength = nums.length 
	for(let i=0;i< arrayLength;i++){
		for(let j=i+1; j<arrayLength;j++){
			if(nums[i]+nums[j]===target){
				return [i,j]
			}
		}
	}
}


let returnedArray = twoSum([4,5,6,7,8,9],14)
console.log(returnedArray)
