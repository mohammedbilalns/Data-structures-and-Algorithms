class Queue {
	constructor(capacity){
		this.items = new Array()
		this.capacity = capacity
		this.length = 0 
		this.front = -1 
		this.rear = -1 
	}

	isFull(){
		return this.capacity == this.length 
	}

	isEmpty(){
		return this.length == 0 
	}
	
	enqueue(value){
		if(!this.isFull()){	
			this.rear = (this.rear+1)% this.capacity 
			this.items[this.rear] = value 
			if(this.front == -1){
				this.front = this.rear 
			}	

			this.length++ 
		}else {
			console.log("Queue is Full ")
			return false 
		}
	}

	dequeue(){
		if(this.isEmpty()){
			return null 
		}

		const deleted = this.items[this.front]
		delete this.items[this.front] 
		this.front = (this.front+1)% this.capacity 
		this.length--

		if(this.isEmpty()){
			this.front = -1 
			this.rear = -1 
		}
		return deleted 
		
	}

	peek(){
		if(this.isEmpty()){
			return null 
		}
		return this.items[this.front]
	}

	print(){
		if(this.isEmpty()){
			console.log("Queue is Empty")
			return null
			
		}

		let i 
		let str = ""
		for( i=this.front ; i != this.rear ; i= (i+1)%this.capacity){
			str += this.items[i] + " "
		}
			str+= this.items[this.rear]
		console.log(str)
	}
}

const circularQueue  = new Queue(5)
circularQueue.print()
circularQueue.enqueue(12)
circularQueue.enqueue(23)
circularQueue.enqueue(235)
circularQueue.enqueue(65)
circularQueue.enqueue(243)
circularQueue.enqueue(98)
circularQueue.print()

