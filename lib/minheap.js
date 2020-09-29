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
  // Time Complexity: ?
  // Space Complexity: ?
  add(key, value = key) { 
    const node  = new HeapNode(key, value)
    this.store.push(node)
    let newNodeIndex = this.store.length - 1
    let parentIndex = Math.floor((newNodeIndex-1)/2)
      while(parentIndex >= 0){
        this.heapUp(newNodeIndex);
        newNodeIndex = parentIndex;
        parentIndex = Math.floor((newNodeIndex-1)/2)
      }

  }


  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    const results = this.store.shift()
    if(!results) return
    let last = this.store.pop()
    this.store.unshift(last)

    let currentIndex = 0;
    let leftIndex =  2 * currentIndex + 1;
    let rightIndex = 2 * currentIndex + 2;
    while(leftIndex < this.store.length){
      if (this.store[rightIndex]) {
        if (this.store[rightIndex].key < this.store[leftIndex].key){
          this.swap(currentIndex, rightIndex)
          currentIndex = rightIndex
        } else {
          this.swap(currentIndex, leftIndex)
          currentIndex =leftIndex
        }
      } else if (this.store[leftIndex]){
        this.swap(currentIndex, leftIndex)
        currentIndex =leftIndex
      }
       leftIndex =  2 * currentIndex + 1
       rightIndex = 2 * currentIndex + 2
    }
    return results.value
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
  // Time complexity: ?
  // Space complexity: ?
  isEmpty() {
    return this.store.length == 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {
    let parentIndex = Math.floor((index-1)/2)
    if (this.store[parentIndex].key > this.store[index].key ){
      this.swap(index,parentIndex)
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {

  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}
heap = new MinHeap()
heap.add(6, 'Pasta');
heap.add(12, 'Soup');
heap.add(20, 'Pizza');
heap.add(25, 'Donuts');
heap.add(13, 'Cookies');

console.log(heap.remove())


module.exports = {
  MinHeap
};
