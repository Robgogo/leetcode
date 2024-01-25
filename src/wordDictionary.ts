/**
 * 211. Design Add and Search Words Data Structure
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the WordDictionary class:
 *  - WordDictionary() Initializes the object.
 *  - void addWord(word) Adds word to the data structure, it can be matched later.
 *  - bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 */

import { TrieNode } from "./utils/TrieNode";

class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.endOfWord = true;
  }

  search(word: string): boolean {
    return this.searchHelper(word, 0, this.root);
  }

  private searchHelper(word: string, index: number, node: TrieNode): boolean {
    if (index === word.length) {
      return node.endOfWord;
    }

    const char = word[index];
    if (char !== ".") {
      if (!node.children.has(char)) {
        return false;
      }
      return this.searchHelper(word, index + 1, node.children.get(char)!);
    } else {
      for (const child of node.children.values()) {
        if (this.searchHelper(word, index + 1, child)) {
          return true;
        }
      }
      return false;
    }
  }
}
