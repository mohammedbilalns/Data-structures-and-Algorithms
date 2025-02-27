// implement the trie data structure

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  delete(word) {
    let stack = [];
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) return false;
      stack.push([node, char]);
      node = node.children[char];
    }
    if (!node.isEndOfWord) return false;
    node.isEndOfWord = false;

    while (stack.length > 0) {
      let [parent, char] = stack.pop();
      if (!node.isEndOfWord && Object.keys(node.children).length == 0) {
        delete parent.children[char];
      } else {
        break;
      }
      node = parent;
    }
  }
}

const trie = new Trie();
trie.insert("category");
trie.insert("cat");
trie.delete("category");
console.log(trie.search("category"));
