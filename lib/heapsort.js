// This method uses a heap to sort an array.


import { MinHeap } from "./minheap";

// Time Complexity:  O(n log n) where n is the length of the list because add/remove both have O(log n) and this is O(n`)
// Space Complexity: O(n)
function heapsort(list) {
  if(list.length == 0){return list;}

  heap = new MinHeap;

  for(element of list){
    heap.add(element)
  }

  for(i = 0; i < (list.length); i++){
    list[i] = heap.remove()
  }

  return list
};

export default heapsort;
