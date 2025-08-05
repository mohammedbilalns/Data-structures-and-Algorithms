

var differenceOfSum = function(nums){

    let arrSum = nums.reduce((acc, elem)=> acc += elem , 0 )

    let digitSum = 0 

    nums.forEach(element => {
        let stringNum = String(element)
        let digitArray = stringNum.split('')
         digitArray.forEach((elem)=>{
            digitSum += parseInt(elem)
        })
    });

    if(arrSum > digitSum) return (arrSum - digitSum)
    return digitSum- arrSum
}


console.log(differenceOfSum([1,15,6,3]))