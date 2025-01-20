class Node {
	constructor(value){
		this.value = value 
		this.next = null 
	}
}


function traverseLinkedList(head){
	let current = head 

	while(current !== null ){
		console.log(current.value + " ")
		current = current.next 
	}
}

function searchLinkedList(head , target){

	while(head !== null ){
		if(head.data == target){
			return true 
		}

		head = head.next 
	}
	return false 
}

