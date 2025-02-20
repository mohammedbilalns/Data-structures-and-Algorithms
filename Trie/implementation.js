class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true

    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }


    startsWith(word) {
        let node = this.root 
        for(let char of word){
            if(!node.children[char]){
                return false 
            }
            node = node.children[char]
        }
        return true 
    }

    delete(word){
        this.deleteHelper(this.root, word, 0 )
    }

    deleteHelper( node,  word, index){

        if(index == word.length){
            if(!node.isEndOfWord){
                return false 
            }

            node.isEndOfWord = false 
            return Object.keys(node.children).length == 0 
        }
        
        let char = word[index]
        if(!node.children[char]) return false 

        let shouldDeleteChild = this.deleteHelper(node.children[char], word , index+1)

        if(shouldDeleteChild){
            delete node.children[char]
            return Object.keys(node.children).length == 0 && !node.isEndOfWord
        }
    }

    replace(oldWord, newWord){
        if(this.search(oldWord)){
            this.delete(oldWord)
            this.insert(newWord)
        }
    }

    countWords(node = this.root){
        
        let count = 0 
        if(node.isEndOfWord){
            count++ 
        }
        for(let char in node.children){
            count += this.countWords(node.children[char])
        }
        return count 
    }
}

const trie = new Trie()
trie.insert("cat")
trie.insert("category")
trie.insert("rew")
trie.insert("oire")
console.log(trie.countWords())
