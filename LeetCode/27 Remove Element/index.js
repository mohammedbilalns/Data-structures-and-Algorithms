// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

var removeElement = function(nums, val){
    let length = nums.length 
    let equalCount = 0 
    for(let i=0;i<length;i++){
        if(nums[i]===val){
            nums.splice(i,1)
            equalCount++
            i--
        }
    }
    return length-equalCount
} 
let arr = [0,1,2,2,3,0,4,2]
console.log(removeElement(arr,2))

console.log(arr)