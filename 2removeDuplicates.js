// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

var removeDuplicates = function(nums){
	
	for(let i=0;i<nums.length-1;i++){	
		for(let j=i+1; j<nums.length;j++){
			if(nums[i]==nums[j]){
				for(let k = j;k<nums.length-1;k++){
					nums[k] = nums[k+1]
				}
				j--	
			}	
		}	
		
	}
	return nums
	
}

let returnedValue = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(returnedValue)
