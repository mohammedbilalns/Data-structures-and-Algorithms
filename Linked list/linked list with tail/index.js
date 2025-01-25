class Node{
    constructor(value){
        this.value = value 
        this.next = null 
    }
}


class LinkedList{
    constructor(){
        this.head = null 
        this.tail = null 
        this.size = 0 
        
    }
    
    isEmpty(){
        return this.size == 0 
    }
    
    getSize(){
        return this.size 
    }
    
    print(){
        if(this.isEmpty()){
            console.log("List is Empty ")
        } else {
            let output = ""
            let curr = this.head 
            while(curr){
                output += curr.value + " "    
                curr = curr.next 
            }
                   console.log(output) 

        }
        
    }
    
    prepend(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.tail = node 
        }else{
             node.next = this.head 
        }
        this.head = node 
        this.size++ 
        
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
        } else {
            this.tail.next = node 
        }
        this.tail = node
        this.size++ 
        
    }
    
    removeFromFront(){
        if(this.isEmpty()){
            return null 
        }
        let removed = this.head 
        if(this.size ==1 ){
            this.head = null 
            this.tail = null 
        }else {
            this.head = this.head.next
        } 
        this.size-- 
        return removed.value 
    }
    
    removeFromEnd(){
        if(this.isEmpty()){
            return null 
        }
        let removed = this.tail 
       if(this.size ==1 ){
           this.head = null 
           this.tail = null 
       }else {
           let prev = this.head 
           while(prev.next !== this.tail){
               prev = prev.next 
           }
           prev.next = null 
           this.tail = prev 
       }
       this.size-- 
       return removed.value 
    }  
}



const list = new LinkedList()
list.prepend(10)
list.prepend(11)
list.prepend(32)
list.append(234)
console.log(list.removeFromEnd())
list.print()
