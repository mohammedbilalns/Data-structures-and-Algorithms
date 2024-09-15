//Question 1 find two numbers that add up to a target from an array

//First approach
// Time complexity: O(n^2)
// Space complexity: O(1)

    function twoSum(nums, target){

        for(let i = 0; i < nums.length-1; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return [nums[i], nums[j]];
                }
            }
        }
        return [];
    }
//Second approach
// Time complexity: O(n)
// Space complexity: O(n)

    function twoSum2(nums, target){
        let map = new Map();
        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i];
            if(map.has(complement)){ 
                return [complement, nums[i]];
            }else{
                map.set(nums[i], i);
            }
        }
        return [];
    }


    console.log(twoSum2([2, 7, 11, 15], 9));