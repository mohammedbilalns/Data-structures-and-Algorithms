class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let curr = this.root;
    while (true) {
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      } else {
        return;
      }
    }
  }

  getHeight(node = this.root) {
    if (!node) return 0;
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  bfs() {
    let queue = [this.root];
    let result = [];
    while (queue.length > 0) {
      let curr = queue.shift();
      result.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return result;
  }

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  getMin(node = this.root) {
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let successor = this.getMin(node.right);
      node.value = successor;
      node.right = this.removeNode(node.right, successor);
    }
    return node;
  }
}

const tree = new Tree();
tree.insert(4);
tree.insert(2);
tree.insert(9);
tree.insert(8);
tree.insert(1);
console.log(tree.inOrder());
tree.remove(9);
console.log(tree.inOrder());
