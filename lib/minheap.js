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
  // Time Complexity: o(log n)because the while loop where we only switch with the parent only deals with half the nodes at most.
  // Space Complexity: o(1) we are just adding a node.
  add(key, value = key) {
    const node = new HeapNode(key, value)
    this.store.push(node)
    let index = this.store.length - 1

    if (index === 0){
      return [this.store]
    }

    const parentKey = this.store[Math.floor((index - 1)/2)].key
    const addedKey = this.store[index].key

    if (parentKey <= addedKey){
      return this.store
    }

    while( this.store[Math.floor((index - 1)/2)] && this.store[Math.floor((index - 1)/2)].key > this.store[index].key){
      let heapAnswer = this.heapUp(index)
      this.store = heapAnswer[0]
      index = heapAnswer[1]
    }
 
    return this.store
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n) due to dividing by two. Each parent has two children an dwe only work with half of them
  // Space Complexity: O(1) only creating holder variables
  remove() {
    if(this.store.length === 0){
    return undefined
    }

    const answer = this.store[0]
    this.store[0] = this.store[this.store.length - 1]
    this.store.pop()
    let index = 0

    if(!this.store){
      return answer
    }

    while(this.store[(index * 2) + 1 ] && ((this.store[(index * 2) + 1 ].key <  this.store[index].key) || (this.store[(index * 2) + 2 ].key <  this.store[index].key))){
      console.log('this.store in while')
      console.log(this.store)
      let heapAnswer = this.heapDown(index)
      this.store = heapAnswer[0]
      index = heapAnswer[1]
    }
    console.log ('answer')
    console.log (answer.value)
    console.log('this.store')
    console.log(this.store)
    return answer.value
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
  // Time complexity: O(n)getting length is an o(n) operation
  // Space complexity: O(1) no new things made
  isEmpty() {
    if (!this.store.length) {
      return true;
    }else {
      return false
    }
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(1) we are doing a simple switch no loops or anything.
  // Space complexity: O(1) because just the hold variable was made
  heapUp(index) {
    const hold = this.store[Math.floor((index - 1)/2)] 
  
    this.store[Math.floor((index - 1)/2)] = this.store[index]
    this.store[index] = hold
    
    return [this.store, Math.floor((index - 1)/2)]
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    if (this.store[(index * 2) + 1 ].key < (this.store[(index * 2) + 2 ].key)){
      const hold = this.store[index]
      this.store[index] = this.store[(index * 2) + 1 ]
      this.store[(index * 2) + 1 ] = hold
      return [this.store, (this.store[(index * 2) + 1 ])]
    }else {
      const hold = this.store[index]
      this.store[index] = this.store[(index * 2) + 2 ]
      this.store[(index * 2) + 2 ] = hold
      return [this.store, (this.store[(index * 2) + 2 ])]
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
