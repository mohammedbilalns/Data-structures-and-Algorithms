
class Stack {
	constructor(){
		this.items = []
		this.count = 0 
	}

	push(element){
			
		this.items[this.count] = element 
		this.count++ 
		return this.count-1
	}

	pop(){
		if(this.count == 0 ){
			console.log("Stack is Empty")
			return 
		}	
		let removed = this.items[this.count-1]
		this.count-- 
		return removed
	}

	peek(){
		if(this.isEmpty()){
			return "Stack is Empty"
		}

		return this.items[this.count -1 ]
	}

	isEmpty(){
		return this.items.length == 0 
	}

	getSize(){
		return this.count 
	}

	print(){

		if(this.count == 0 ){
			console.log("Stack is Empty")
			return 
		}
		let str = ""
		for(let i=0;i<this.count ; i++){
			str += this.items[i]+ ' '
		}
		console.log(str)
	}

}


let stack = new Stack();

stack.push(234)
stack.push(2342)
stack.print()



