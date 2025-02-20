
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

    insert(value) {
        const newNode = new TreeNode(value)
        if (!this.root) {
            this.root = newNode
            return 
        }
        let curr = this.root
        while (true) {
            if (value < curr.value) {
                if (!curr.left) {
                    curr.left = newNode
                    return
                }
                curr = curr.left
            } else if (value > curr.value) {
                if (!curr.right) {
                    curr.right = newNode
                    return
                }
                curr = curr.right
            } else {
                return
            }
        }
    }

    inOrder(node = this.root, result = []) {
        if (node) {
            this.inOrder(node.left, result)
            result.push(node.value)
            this.inOrder(node.right, result)
        }
        return result
    }

    getMin(node = this.root) {
        let curr = node
        while (curr.left) {
            curr = curr.left
        }
        return curr
    }

    remove(value) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(node, value) {
        if (!node) return null

        if(value< node.value){
            node.left = this.removeNode(node.left, value)
        }else if (value> node.value){
            node.right = this.removeNode(node.right, value)
        }else {
            if(!node.left && !node.right) return null 
            if(!node.left) return node.right 
            if(!node.right) return node.left 

            let successer = this.getMin(node.right)
            node.value = successer.value
            node.right= this.removeNode(node.right, successer)
        }

        return node 

    }

}

const tree = new BST()
tree.insert(6)
tree.insert(8)
tree.insert(4)
tree.insert(2)
tree.insert(9)
tree.remove(6)
console.log(tree.inOrder())
