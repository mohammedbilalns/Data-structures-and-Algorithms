//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


var searchInsert = function(nums, target){
	let isFound = false , index 
	for(let i=0;nums[i]<=target;i++){
		if(nums[i]== target){
			isFound = true
		}
		index = i 
	}
	if(isFound){
		return index 
	}else{
		return index+1
	}
}

let result = searchInsert([4,5,6,7,8],10)
console.log(result)
