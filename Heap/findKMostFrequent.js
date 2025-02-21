
class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    getLeftChildIndex(index) {
        return index * 2 + 1
    }
    getRightChildIndex(index) {
        return index * 2 + 2
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index)
        while (this.hasParent(index) && this.heap[index][1] < this.heap[parentIndex][1]) {
            this.swap(index, parentIndex)
            index = parentIndex
        }
    }

    heapifyDown(index) {
        let smallest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if (leftChildIndex< this.heap.length &&  this.heap[smallest][1] > this.heap[leftChildIndex][1]) {
            smallest = leftChildIndex
        }
        if (rightChildIndex < this.heap.length &&  this.heap[smallest][1] > this.heap[rightChildIndex][1]) {
            smallest = rightChildIndex
        }

        if (index !== smallest) {
            this.swap(index, smallest)
            this.heapifyDown(smallest)
        }
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    removeSmallest() {

        if (this.heap.length == 0) return
        if (this.heap.length == 1) return this.heap.pop()

        let smallest = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return smallest
    }
    print(){
        console.log(this.heap)
    }
}


function topKFrequent(nums, k) {
    let freqMap = new Map();

    // Step 1: Count Frequency
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Use MinHeap to store top K elements
    let minHeap = new MinHeap();
    for (let [num, freq] of freqMap.entries()) {
        minHeap.insert([num, freq]);
        if (minHeap.heap.length > k) {
            minHeap.removeSmallest(); // Remove the least frequent element
        }
    }

    // Step 3: Extract elements from heap
    return minHeap.heap.map(entry => entry[0]);
}
console.log(topKFrequent([4,6,2,6,7,2,7,2,7,4,6,2,2,4,5,6,4,3,7,3,6,3],3))


