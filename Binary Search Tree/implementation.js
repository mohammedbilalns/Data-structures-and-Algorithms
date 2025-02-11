class Node {
	constructor(value) {
		this.value = value
		this.left = this.right = null
	}

}


class BinaryTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		const newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return
		}// check if root is exists 

		function insertRercursively(node) {
			if (value < node.value) {
				if (!node.left) node.left = newNode
				else insertRercursively(node.left)
			} else {
				if (!node.right) node.right = newNode
				else insertRercursively(node.right)
			}
		}// recursively insert new node 

		insertRercursively(this.root)
	}

	search(value) {
		function searchRecursively(node) {
			if (!node) return null
			if (node.value == value) return node
			return value < node.value ? node.left : node.right
		}
		return searchRecursively(this.root)
	} // search for a node with a value 

	preOrderTraversal(node = this.root, result = []) {
		if (node) {
			result.push(node.value)
			this.preOrderTraversal(node.left, result)
			this.preOrderTraversal(node.right, result)
		}
		return result
	} // curr, left, right 

	inOrderTraversal(node = this.root, result = []) {
		if (node) {
			this.inOrderTraversal(node.left, result)
			result.push(node.value)
			this.inOrderTraversal(node.right, result)
		}
		return result
	}//  left , curr , right 

	postOrderTraversal(node = this.root, result = []) {
		if (node) {
			this.postOrderTraversal(node.left, result)
			this.postOrderTraversal(node.right, result)
			result.push(node.value)
		}
		return result
	}// left right  curr 

	levelOrderTraversal(node = this.root, result = []){
		const queue = []
		queue.push(this.root)
		while(queue.length !== 0 ){
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

	}//  

	getMin(node = this.root){
		while(node.left ){
			node = node.left 
		}

		return node 
	}// find the minimum element 

	getMax(node = this.root ){
		while(node.right){
			node = node.right 
		}
		return node 
	}// find the maximum element 

	getHeightFromNode(node = this.root){
		if(!node) return -1
		if(!node.left && !node.right) return 0 
		return Math.max(this.getHeight(node.left), this.getHeight(node.right))+1 
	}
	getHeightFromValue(value){
		const node = this.search(value)
		return this.getHeightFromNode(node)
	}

	getDepth(node = this.root, curr = this.root, depth=0 ){
		if(!curr) return -1 
		if(curr == node ) return depth 

		if(node.value < curr.value){
			return this.getDepth(node, curr.left, depth+1)
		}else{
			return this.getDepth(node, curr.right, depth+1 )
		}
	}

	remove(value){
		this.root = this.removeNode(this.root, value)
	}

	removeNode(node, value){
		if(!node) return null 

		if(value < node.value){
			node.left = this.removeNode(node.left, value)
		}else if(value> node.value) {
			node.right = this.removeNode(node.right, value)
		}else {

			if(!node.left && !node.right){
				return null 
			}


			if(!node.left) return node.right 
			if(!node.right) return node.left 

			let minRight = this.getMin(node.right)
			node.value = minRight.value 
			node.right = this.removeNode(node.right , minRight.value)
		}
		
		return node 

	}

	

}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);

let nd = tree.search(5)
tree.remove(5)
console.log(tree.preOrderTraversal())

