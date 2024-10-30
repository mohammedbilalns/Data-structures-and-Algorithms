var plusOne = function(digits) {
    return String(parseInt(digits.join(''))+1).split('')
};

console.log(plusOne([1,2,3]))