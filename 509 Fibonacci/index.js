// Given a number n find the first n numbers of fibonacci sequence 

// Approach 1 -  O(n)T
function generateFibonacci(n){
    let sequence = [0,1]
    
    for(let i=2;i<n;i++){
        sequence[i] =  sequence[i-1]+sequence[i-2]
    }
    return sequence
}

// given a number 'n', find the nth element of the fibonacci sequence 

// Approach 1 - O(2^n)T
function nthFibonacci(n){
	if(n ==0 ) return 0 
	if(n ==1) return 1

	return nthFibonacci(n-1)+ nthFibonacci(n-2)

}

console.log(nthFibonacci(11))
console.log(generateFibonacci(11))
