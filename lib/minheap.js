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
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  add(key, value = key) {
    let node = new HeapNode(key, value);
    this.store.push(node);

    this.heapUp(this.store.length - 1);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  remove() {
    if (this.isEmpty()) return;

    this.swap(0, this.store.length - 1);
    let removed = this.store.pop();

    if (!this.isEmpty()) {
      this.heapDown(0);
    }
    
    return removed.value;
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
  // Time complexity: O(log n)
  // Space complexity: O(log n)
  heapUp(index) {
    let parent = Math.floor((index - 1)/2);
    if (index === 0 || this.store[index].key > this.store[parent].key) {
      return;
    }

    let temp = this.store[parent];
    this.store[parent] = this.store[index];
    this.store[index] = temp;

    this.heapUp(parent);
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;

    if(rightChildIndex < this.store.length) {
      let smallestChildIndex;
      if(this.store[rightChildIndex].key < this.store[leftChildIndex].key) {
        smallestChildIndex = rightChildIndex;
      } else {
        smallestChildIndex = leftChildIndex;
      }

      if(this.store[index].key > this.store[smallestChildIndex].key) {
        this.swap(index, smallestChildIndex);
        this.heapDown(smallestChildIndex);
      }

    } else if(leftChildIndex < this.store.length) {
      if(this.store[index].key > this.store[leftChildIndex].key) {
        this.swap(index, leftChildIndex);
        this.heapDown(leftChildIndex);
      }

    } else {
      return;
    }

  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};
