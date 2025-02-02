// Insert at beginning end and in between after a value in a singly linked list 
class Node{
	constructor(value){
		this.value = value 
		this.next = null 
	}
}


class LinkedList{
	constructor(){
		this.head = null 
	}


	// insert At beginning 
	prepend(value){
		const node = new Node(value)
		if(this.head){
			node.next = this.head 	
		}
		this.head = node 
		this.size++ 
	}
	// insert At ending 
	append(value){
		const node = new Node(value)
		
		if(!this.head ){
			this.head = node 
		}else {
			let curr = this.head 
			while(curr.next){
				curr = curr.next 
			}
			curr.next = node 
		}
		this.size++ 
	}

	// insert at a index 
	insertAt(index, value){
		const node = new Node(value)

		if(index == 0 ){
			if(!this.head){
				this.head = node 
			}else {
				this.head.next = 
			}
		}
	}
}
