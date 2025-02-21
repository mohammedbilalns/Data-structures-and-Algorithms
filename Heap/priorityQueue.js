class PriorityQueue{
    constructor(){
        this.heap = []
    }

    getLeftChildIndex(index){
        return 2*index+1 
    }
    getRightChildIndex(index){
        return 2*index+2 
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0 
    }
    swap(a,b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }

    heapifyUp(index){
        if(this.hasParent(index) && this.heap[this.getParentIndex(index)].priority < this.heap[index].priority ){
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(index){
        let largest = index 
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if(leftChildIndex< this.heap.length && this.heap[leftChildIndex].priority > this.heap[index].priority){
            largest = leftChildIndex 
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[index].priority){
            largest = rightChildIndex 
        }

        if(largest !== index){
            this.swap(largest, index)
            this.heapifyDown(largest)
        }
    }
    enqueue(value, priority){
        this.heap.push({value, priority})
        this.heapifyUp(this.heap.length -1 )
    }

    dequeue(){

        let dequedElem = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return dequedElem.value 
    }

}

const pq = new PriorityQueue()
pq.enqueue("value 1", 3)
pq.enqueue("Value 2", 6)
pq.enqueue("value, 3", 1)
pq.dequeue()
pq.dequeue()

console.log(pq)
