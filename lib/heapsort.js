const { MinHeap }= require('./minheap');
const minheap = require('./minheap');
// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  const minHeap = new MinHeap()
 
  for(let node of list) {
    minHeap.add(node)
    console.log(minHeap.store)
  }
 
  const results = [];
  for ( let i = 0; i < list.length; i++){
    results.push(minHeap.remove())

  }
  return results
};


module.exports = { heapsort };
