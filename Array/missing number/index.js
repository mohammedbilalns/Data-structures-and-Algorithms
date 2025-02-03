// Optimal solution with O(n)T and O(1)S 
var missingNumber = function(nums) {
    
    let length = nums.length 
    let actualSum = length * (length+1)/2 
    let numsSum = nums.reduce((acc,elem)=> acc+elem , 0)
    return actualSum-numsSum
};

// Sorting approach with O(n logn T)

var missingNumber = function(nums){
	 nums = nums.sort((a,b)=> a-b)

	for(let i=0 ; i<nums.length ; i++){
		if(nums[i]!== i){
			return i 
		}
	}
}
