// Given an integer n find the sum of first n natural numbers 

// iterative 
function sumNatural(n){

	let sum = 0 
	for(let i =1 ;i<=n;i++){
		sum+= i 
	}
	return sum 
}

// using formula 
function sumNatuarl2(n){

	return n * (n+1)/2 
}

// formula with  avoid integer overflow 

function sumNatural3(n){

	if(n%2==0){
		return (n/2)*(n+1)
	}else{
		return ((n+1)/2)*n 
	} 
}

console.log(sumNatural3(5))
