class Node {
	constructor(value){
		this.value = value 
		this.next = null 
	}
}


class LinkedList{
	constructor(){
		this.head = null 
		this.tail = null 
	}

	append(value){

		const node = new Node(value)
		if(!this.head){
			this.head = node 
			this.tail = node 
		}else {
			this.tail.next = node
			this.tail = node 
		}
		this.size++ 
	}

	removeFromFirst(){
		if(!this.head){
			return null 
		}
	
		let removed 
		if(!this.head.next){
			removed = this.head 
			this.head = null 
			this.tail = null 
		}else {
			removed = this.head 
			this.head = this.head.next 
		}
		
		this.size-- 
		return removed 
	}

	print(){

		if(!this.head){
			console.log("List is Empty")
			 
		}else{
			
			let str = ""
			let curr = this.head 
			
			while(curr){
				str+= curr.value + " -> "
				curr = curr.next 
			}
			console.log(str)
		} 
	}
}


class Queue{
	constructor(){
		this.items = new LinkedList()
	}

	enqueue(value){
		this.items.append(value)
	}

	dequeue(){
		return this.items.removeFromFirst()
	}

	peek(){
		return this.items.head	
	}

	isEmpty(){
		return this.items.head == null 
	}

	print(){
		return this.items.print()
	}
}

const queue = new Queue()

queue.enqueue(32)
queue.dequeue()
queue.print()
