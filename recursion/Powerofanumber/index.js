
function power(base , exp){
	if(exp==0 ) return 1 

	return power(base, exp-1)* base 
}

console.log(power(-4,3))
