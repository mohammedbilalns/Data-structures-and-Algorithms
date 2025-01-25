// Given an array find all the leaders in the array , an element is said to be the leader of the array if all the remaining elements after it is less than that element 

function getLeaders(arr){
	let length = arr.length 
	let leaders = [arr[length-1]]

	for(let i= 0; i <=length-2 ;i++ ){
		let isLeader = true 

		for(let j=i+1;j<=length-1 ;j++){
			if(arr[j]> arr[i]){
				isLeader = false 
			}
		}

		if(isLeader) leaders.push(arr[i])
	}
	return leaders
}


console.log(getLeaders([1,3,98,2,32,12,32,1,12]))
