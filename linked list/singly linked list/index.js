class Node {
    constructor(value){
        this.value = value 
        this.next = null 
    }
}


class LinkedList {
    constructor(){
        this.head = null 
        this.size = 0 
    }   
    
    isEmpty(){
        return this.size == 0 
    }
    
    getSize(){
        return this.size 
    }
    
    prepend(value){
        const node  = new Node(value)
        if(!this.isEmpty()){
            node.next = this.head 
        }
        this.head = node 
        this.size++ 
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
        }else {
            let tail = this.head 
            while(tail.next){
                tail = tail.next 
            }
            tail.next = node 
        }
        this.size++ 
    }
    
    insert(value, index){
        if(index<0 || index > this.size){
            console.log("Invalid Index")
            return 
        }
        
        if(index == 0 ){
            this.prepend(value)
        }else{
            const node  = new Node(value)
            let prev = this.head 
            for(let i=0;i<index-1;i++){
                prev = prev.next 
            }
            node.next = prev.next 
            prev.next = node 
            this.size ++ 
            
        }
        
    }
    
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return 
        }
        
        let removedNode
        if(index ==0 ){
            removedNode = this.head 
            this.head = this.head.next 
            
        }else {
            let prev = this.head 
            for(let i=0;i< index-1;i++){
                prev = prev.next 
            }
            removedNode = prev.next 
            prev.next = removedNode.next 
        }
        
        this.size--
        return removedNode.value 
        
    }
    
    removeValue(value){
        if(this.isEmpty()){
            return null 
        }
        if(this.head.value == value ){
            this.head = this.head.next 
            this.size-- 
            return value 
        } else {
            let prev = this.head 
            while(prev.next && prev.next.value!== value){
                prev = prev.next 
            }
            if(prev.next){
                const removedNode = prev.next 
                prev.next = removedNode.next 
                this.size-- 
                return value 
            }
            return null 
        }
    }
    
    removeFirst(){
        if(this.isEmpty()){
            return null 
        }
        let removedNode = this.head 
        this.head = this.head.next 
        return removedNode.value 
        this.size-- 
    }
    
    removeLast(){
        if(this.isEmpty()){
            return null 
        }
        
        let deleted 
        if(!this.head.next){
             deleted = this.head 
            this.head = null 
        }else {
            let prev = this.head 
            let curr = prev.next 
            while(curr.next){
                prev = curr 
                curr = curr.next 
            }
            deleted = curr
            prev.next = null 
        }
       this.size-- 
       return deleted.value
        
    }
    
    removeFromMiddle(){
        if(this.isEmpty()){
            return null 
        }
        
        let deleted 
        if(this.size == 1 ){
            deleted = this.head 
            this.head = null 
        }else {
            let middleIndex = Math.floor(this.size/2)
            let prev = null 
            let curr = this.head 
            
            for(let i=0;i<middleIndex;i++){
                prev = curr 
                curr = curr.next 
            }
            deleted = curr 
            prev.next= curr.next 
        }
        
        this.size-- 
        return deleted.value 
    }
    
    search(value){
        if(this.isEmpty()){
            return -1 
        }
        
        let i = 0 
        let curr = this.head 
        while (curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next 
            i++
        }
        return -1 
    }
    
    reverse(){
        let prev = null 
        let curr = this.head 
        while(curr){
            let next = curr.next 
            curr.next = prev 
            prev = curr 
            curr = next 
        }
        this.head = prev 
    }
    
    removeDuplicates(){
        if(this.isEmpty()){
            return null 
        }
        
        let curr = this.head 
        
        while(curr !== null ){
           let runner = curr
           
           while(runner.next !== null){
               if(runner.next.value == curr.value){
                   runner.next = runner.next.next 
               }else{
                   runner = runner.next 
               }
           }
           curr = curr.next 
        }
    }
    
    arrayToLl(arr){
        if(arr.length ==0 ){
            return null 
        }
        
        this.head = new Node(arr[0])
        let curr = this.head 
        this.size = 1 
        
        for(let i=1;i<arr.length;i++){
            curr.next = new Node(arr[i])
            curr = curr.next
            this.size++ 
        }
    }
    
    removeFromOddPostions(){
        if(this.isEmpty()){
            return null 
        }
        
        let pos = 1 
        let curr = this.head 
        let prev = null 
        
        while(curr !== null){
            if(pos %2==1){
                if(prev == null){
                    this.head = curr.next
                    this.size--
                }else {
                    prev.next = curr.next 
                    this.size--
                }
                
            }else {
                prev = curr 
            }
            curr = curr.next 
            pos++ 
        }
    }
    
    print(){
        if(this.isEmpty()){
            console.log("List is Empty ")
        }else {
            let curr = this.head 
            let values = ""
            while(curr){
                values += curr.value + " "
                curr = curr.next 
            }
            
            console.log(values)
        }
    }
}


const list = new LinkedList()
list.arrayToLl([123,123,1234,34,2342,234,543])
list.removeFromOddPostions()
list.print()
console.log(list.getSize())
