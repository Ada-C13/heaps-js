class HeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }

  // This method adds a HeapNode instance to the heap
  // Time Complexity: O(log n), where n is number of levels in the heap
  // Space Complexity: O(1)
  add(key, value = key) {
    const newNode = new HeapNode(key, value);
    this.store.push(newNode);
    this.heapUp(this.store.length - 1);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    if (this.isEmpty()) return;

    // Swap first and last nodes
    this.swap(0, this.store.length - 1);
 
    // pop off the last item from heap
    let popped = this.store.pop();

    // heapDown on new Root
    if (!this.store.isEmpty) {
      this.heapDown(0);
    }

    return popped.value;
  }
  
  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map(item => item.value);
    const output = `[${values.join(', ')}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return this.store.length === 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  // Parent = (i - 1) / 2
  heapUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    // base case when index is the root or we don't need to swap at all
    if (index === 0 || this.store[index].key >= this.store[parentIndex].key) return;

    this.swap(index, parentIndex);
    this.heapUp(parentIndex);
  }

  // This helper method takes an index and 
  // moves it DOWN the heap if it's larger
  // than either child node.
  heapDown(index) {
    // base case when index is the leaf node (no children) or no swap is necessary
    // if index of child is greater than or equal to length of store, that child doesn't exist
    let leftC = 2 * index + 1;
    let rightC = 2 * index + 2;

    if (rightC < this.store.length) {
      // there are 2 children, determine minC
      let minC;
      if (this.store[leftC].key < this.store[rightC].key) {
        minC = leftC;
      } else {
        minC = rightC;
      }
      if (this.store[index].key > this.store[minC].key) {
        // swap and heap down the smaller of leftC and rightC
        this.swap(index, minC);
        this.heapDown(minC);
      }
    } else if (leftC < this.store.length) {
      // leftC exists, check its value with current index
      if (this.store[index].key > this.store[leftC].key) {
        // swap and heap down leftC
        this.swap(index, leftC);
        this.heapDown(leftC);
      }
    } else {
      return;
    }
  }

  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};

testHeap = new MinHeap;