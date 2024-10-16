
function summation(n){
	let sum = 0 
	for(let i=1; i<=n;i++){
	sum += i  
	}
	return sum
} // O(n)(Linear) time complexity 


function summationtwo(n){
	return (n* (n+1)/2)
} // O(1) titme complexity 
console.log(summation(43))
