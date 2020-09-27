const { MinHeap } = require('../lib/minheap');

// This method uses a heap to sort an array.
// Time Complexity:  O(nlogn) because andding and removing is log n and we are doing that n times.
// Space Complexity: O(n) because I made a sorted array
function heapsort(list) {
  let heap = new MinHeap()
  let sorted = []
  
  list.forEach(key => {
    heap.add(key, key)
  })

  for(let i = 0; i < list.length; i++){
    sorted.push(heap.remove())
  }
  return sorted
};

module.exports = {heapsort};
