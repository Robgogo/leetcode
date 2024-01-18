/**
 * 208. Implement Trie (Prefix Tree)
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 *  - Trie() Initializes the trie object.
 *  - void insert(String word) Inserts the string word into the trie.
 *  - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 *  - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 */

class TrieNode {
  children: Record<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endOfWord = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}
