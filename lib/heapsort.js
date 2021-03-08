const { MinHeap } = require('../lib/minheap');

// This method uses a heap to sort an array.
// Time Complexity: O(n log n), where n is the length of the list.
// Space Complexity: O(n), where n is the length of the list.
function heapsort(list) {
  if (list.length === 0) return list;

  sortingHeap = new MinHeap;

  for (item of list) {
    sortingHeap.add(item);
  }

  for (let i = 0; i < list.length; i++) {
    list[i] = sortingHeap.remove();
  }

  return list;
};

module.exports = { heapsort };
