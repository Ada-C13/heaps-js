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
    console.log('hello')
    const node = new HeapNode(key, value)
    console.log('node', node)
    this.store.push(node)
    console.log('store', this.store)
    let index = this.store.length - 1
    console.log('index')
    console.log(index)
    console.log('this.store')
    console.log(this.store)
    console.log('key')
    console.log(this.store[0].key)

    if (index === 0){
      return [this.store]
    }

    // if (!this.store[(index - 1)/2]){
    //   return [this.store]
    // }
    console.log('floor')

    const parentKey = this.store[Math.floor((index - 1)/2)].key
    const addedKey = this.store[index].key
    console.log(parentKey)
    console.log(addedKey)
    if (parentKey <= addedKey){
      console.log("is it here????")
      return this.store
    }

    console.log('parent then current')
    console.log(parentKey)
    console.log(addedKey)

    while( this.store[Math.floor((index - 1)/2)] && this.store[Math.floor((index - 1)/2)].key > this.store[index].key){

    console.log('parent then current')
    console.log(parentKey)
    console.log(addedKey)
      console.log('in while loop', this.store)
      let heapAnswer = this.heapUp(index)
      console.log('here is the heapup answer', heapAnswer)
      this.store = heapAnswer[0]
      index = heapAnswer[1]
      console.log('heapanswer[0]', this.store)
      console.log('heapanswer[1]', index)
      // console.log('break')
      // break
    }
    console.log('after while')
    return this.store
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    throw new Error("Method not implemented yet...");
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
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {
    
    console.log('in the heapup')
    const hold = this.store[Math.floor((index - 1)/2)] 
    console.log('hold', hold)
    this.store[Math.floor((index - 1)/2)] = this.store[index]
    this.store[index] = hold
    console.log('this.store in heapup')
    console.log(this.store)
    return [this.store, Math.floor((index - 1)/2)]
  
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    throw new Error("Method not implemented yet...");
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
