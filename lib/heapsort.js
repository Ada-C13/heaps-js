const { MinHeap } = require("./minheap");

// This method uses a heap to sort an array.
// Time Complexity:  O(n log n)
// Space Complexity: O(n)

function heapsort(list) {
  // create an empty min heap
  const heap = new MinHeap();

  // add elements to the heap
  for(let i = 0; i < list.length; i++) {
    heap.add(list[i]);
  }

  const sorted = [];

  // remove elements from the heap while it's not empty and add each element to the new array
  while(!heap.isEmpty()) {
    let removed = heap.remove();
    sorted.push(removed);
  }

  return sorted;
};

module.exports = { 
  heapsort 
};
