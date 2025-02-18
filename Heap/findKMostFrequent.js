
class minHeap {
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
        if (leftChildIndex < this.heap.length &&  this.heap[smallest][1] > this.heap[rightChildIndex][1]) {
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
}


// function mostFrequentK(arr, k ){
//     let freqMap = new Map()
//     let heap = new minHeap()

//     let result = []

//     for(let i=0 ; i< arr.length ; i++){
//         freqMap.set(arr[i] , (freqMap.get(arr[i])?? 0)+1 )
//     }

//     for(let [elem , freq] of freqMap.entries()){
//         heap.insert([elem , freq])
//     }

//     for(let i=0 ; i<k ; i++){
//         result.push(heap.removeSmallest())
//     }

//     return result 
// }

function mostFrequentK(arr, k) {
    let freqMap = new Map()
    let heap = new minHeap()
    let result = []

    // Step 1: Count frequency of each element
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    // Step 2: Use a Min Heap (of size k)
    for (let [num, freq] of freqMap.entries()) {
        heap.insert([num, freq])
        if (heap.heap.length > k) {
            heap.removeSmallest()
        }
    }

    // Step 3: Extract k most frequent elements
    while (heap.heap.length > 0) {
        result.push(heap.removeSmallest()[0]) // Extract only the element, not its frequency
    }

    return result.reverse() // Reverse to maintain descending order of frequency
}


console.log(mostFrequentK([4,6,2,6,7,2,7,2,7,4,6,2,2,4,5,6,4,3,7,3,6,3]))


