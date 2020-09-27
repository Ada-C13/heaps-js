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
  // Time Complexity: O(log n) (because of helper function I think?)
  // Space Complexity: O(log n)
  add(key, value = key) {
    //Add new element to the end of the store
    this.store.push(new HeapNode(key, value))
    //Execute headUp on last added node
    this.heapUp(this.store.length - 1)
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  remove() {
    //return if there is nothing to remove
    if (this.isEmpty()) return;
    //switch root and last element
    this.swap(0, this.store.length - 1)
    //remove old root/new last element (from ^) and save
    let removedNode = this.store.pop();
    //resort the element that you moved back to the root
    this.heapDown(0);
    //return the value of the node you removed
    return removedNode.value;
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
    return this.store.length == 0
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(log n)
  heapUp(index) {
    const s = this.store;
    let parentIndex = ((index % 2 === 0) ? this.leftChildUp(index) : this.rightChildUp(index));

    // If the parent is bigger than the child, the child moves up
    while( index > 0 && (s[parentIndex].key > s[index].key)) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = ((index % 2 === 0) ? this.leftChildUp(index) : this.rightChildUp(index));
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const s = this.store;

    let leftChild = index * 2 + 1
    let rightChild = index * 2 + 2

    // are no children, return (no left means no right)
    if (s[leftChild] === undefined) { return; } else {
      // find smaller child
      let minChild;
      
      if (s[rightChild] === undefined || s[leftChild].key <= s[rightChild].key)
        {minChild = leftChild} 
      else 
        {minChild = rightChild}

      // if the child is smaller than the parent, move the child up
      if (s[minChild].key < s[index].key) {
        //swap so child is parent
        this.swap(minChild, index)
        //repeat heapDown on new starting point
        this.heapDown(minChild);
      } 
    }
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }


  leftChildUp(index){
    return (index - 2) / 2
  }

  rightChildUp(index){
    return (index - 1) / 2
  }
}

module.exports = {
  MinHeap
};
