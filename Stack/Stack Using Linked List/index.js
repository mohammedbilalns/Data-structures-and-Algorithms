class Node {
	constructor(value){
		this.value = value 
		this.next = null 
	}
}

class LinkedList{
	constructor(){
		this.size = 0 
		this.head = null 
		this.tail = null 
	}

	getSize(){
		return this.size 
	}
	isEmpty(){
		return this.size == 0 
	}
	
	prepend(value){
		
		const node = new Node(value)
		if(this.isEmpty()){
			this.head = node 
			this.tail = node 
		}else {
			node.next = this.head 
			this.head = node 
		}
		this.size++ 
	}
	append(value){
		const node = new Node(value)

		if(this.isEmpty()){
			this.head = node 
			this.tail = node 
		}else {
			this.tail.next = node 
			this.tail = node 
		}
		this.size++ 

	}
	removeFromFirst(){
		if(this.isEmpty()){
			return null 
		}

		let removed 
		if(this.size == 1){
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

	removeFromLast(){
		if(this.isEmpty()){
			return null 
		}

		let removed 
		if(this.size == 1){
			removed = this.head 
			this.head = null 
			this.tail = null 
		}else {
			removed = this.tail 
			let prev = this.head 
			while(prev.next != this.tail ){
				prev = prev.next 
			}

			prev.next = null 
			this.tail = prev 
		}

		this.size-- 
		return removed.value  
	}

	print(){
		if(this.isEmpty()){
			console.log("List is Empty")
		}else {
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

class LinkedListStack {
	constructor(){
		this.list = new LinkedList()
	}

	push(value){
		this.list.append(value)
	}

	pop(){
		return this.list.removeFromLast()

	}

	peek(){
		return this.list.tail.value  
	}

	isEmpty(){
		return this.list.isEmpty()	
	}
	
	getSize(){
		return this.list.getSize()
	}

	print(){
		return this.list.print()
	}
}

const stack = new LinkedListStack()
stack.print()
stack.push(23)
stack.push(65)
stack.print()
stack.pop()
stack.print()
