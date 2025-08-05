

var missingNumber = function(nums) {

    let actualSum = (nums.length) * (nums.length+1)/2
    let sum = 0 
    nums.forEach(element => {
        sum += element
    });

    return actualSum - sum
};


console.log(missingNumber([3,0,1]))