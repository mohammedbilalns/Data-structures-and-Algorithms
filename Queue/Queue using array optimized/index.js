class Queue {
	constructor(){
		this.items = {}
		this.rear = 0 
		this.front = 0 
	}

	enqueue(element){
		this.items[this.rear] = element 
		this.rear++ 
	}

	dequeue(){

		if(this.isEmpty){
			console.log("Queue is Empty")
			return 
		}
		const deletedItem = this.items[this.front] = 
		delete this.items[this.front]
		this.front++ 
		return deletedItem
	}

	isEmpty(){
		return this.rear - this.front === 0 
	}

	peak(){
		return this.items[this.front]
	}

	size(){
		return this.rear- this.front 
	}

	print(){
		console.log(this.items)
	}
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.dequeue()

