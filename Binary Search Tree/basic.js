
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST {

    constructor() {
        this.root = null
    }

    // insert a node 
    insert(value) {
        const newNode = new TreeNode(value)

        if (!this.root) {
            this.root = newNode
            return
        }

        function insertRecursively(node) {
            if (value < node.value) {
                if (!node.left) node.left = newNode
                else insertRecursively(node.left)
            } else {
                if (!node.right) node.right = newNode
                else insertRecursively(node.right)
            }
        }
        insertRecursively(this.root)
    }

    // search a node with a value 
    search(value) {
        function searchRecursively(node) {
            if (!node) return null
            if (node.value == value) return node
            return value < node.value ? searchRecursively(node.left) : searchRecursively(node.right)
        }

        return searchRecursively(this.root)
    }

    // Depth First search 
    preOrder(node = this.root, result = []) {
        if (node) {
            result.push(node.value)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
        return result
    }

    inOrder(node = this.root, result = []) {
        if (node) {
            this.inOrder(node.left, result)
            result.push(node.value)
            this.inOrder(node.right, result)
        }
        return result
    }

    postOrder(node = this.root , result  =[]){
        if(node){
            this.postOrder(node.left, result)
            result.push(node.value)
            this.postOrder(node.right, result)
        }
        return result
    }

    levelOrder(){
        let result  = []
        let queue = [this.root]

        while(queue.length > 0 ){
            let curr = queue.shift()
            result.push(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return result 
    }
    

}

let bst = new BST()
bst.insert(4)
bst.insert(8)
bst.insert(1)
bst.insert(7)
console.log(bst.levelOrder())