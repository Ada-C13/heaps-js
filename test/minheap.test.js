const expect = require('chai').expect;
const { MinHeap } = require('../lib/minheap');

describe('Heap', function() {
  let heap;

  beforeEach(function() {
    heap = new MinHeap();
  });

  it('can be created', function() {
    
    // Assert
    expect(heap).to.be.an.instanceOf(MinHeap);
  });

  it('can have nodes added', function() {
    // Arrange/Act
    const addSomethingToHeap = function () {
      heap.add(10, 'someValue');
    }

    // Assert
    expect(heap.add).not.to.be.undefined;
    expect(addSomethingToHeap).not.to.throw();
  });

  it('adds one node properly', function() {
    // Arrange
    heap.add(3, 'Pasta');

    // Act
    const output = heap.toString();

    // Assert

    expect(output).to.equal('[Pasta]');
  });

  it('adds two node properly', function() {
    // Arrange
    heap.add(3, 'Pasta');
    heap.add(1, 'Pizza');

    // Act
    const output = heap.toString();

    // Assert

    expect(output).to.equal('[Pizza, Pasta]');
  });

  it('adds nodes in a proper order', function() {
    // Arrange
    heap.add(3, 'Pasta');
    heap.add(6, 'Soup');
    heap.add(1, 'Pizza');

    // Act
    const output = heap.toString();

    // Assert

    expect(output).to.equal('[Pizza, Soup, Pasta]');
  });

  it('adds nodes in a proper order with a lot of nodes', function() {
    // Arrange
    heap.add(3, 'Pasta');
    heap.add(6, 'Soup');
    heap.add(1, 'Pizza');
    heap.add(0, 'Donuts');
    heap.add(16, 'Cookies');
    heap.add(57, 'Cake');

    // Act
    const output = heap.toString();

    // Assert

    expect(output).to.equal('[Donuts, Pizza, Pasta, Soup, Cookies, Cake]');
  });

  it('can remove one node in the proper order', function() {
    // Arrange
    heap.add(3, 'Pasta');
    heap.add(6, 'Soup');
    heap.add(1, 'Pizza');
    heap.add(0, 'Donuts');
    heap.add(16, 'Cookies');
    heap.add(57, 'Cake');

    // Act
    const removed = heap.remove();

    // Assert
    expect(removed).to.equal('Donuts');
  });

  it('can remove two nodes in the proper order', function() {
    // Arrange
    heap.add(3, 'Pasta');
    heap.add(6, 'Soup');
    heap.add(1, 'Pizza');
    heap.add(0, 'Donuts');
    heap.add(16, 'Cookies');
    heap.add(57, 'Cake');

    // Act
    heap.remove();
    const removed = heap.remove();

    // Assert
    expect(removed).to.equal('Pizza');
  });

  it('can remove three nodes in the proper order', function() {
    // Arrange
    heap.add(3, 'Pasta');
    heap.add(6, 'Soup');
    heap.add(1, 'Pizza');
    heap.add(0, 'Donuts');
    heap.add(16, 'Cookies');
    heap.add(57, 'Cake');

    // Act
    heap.remove();
    heap.remove();
    const removed = heap.remove();

    // Assert
    expect(removed).to.equal('Pasta');
  });

  it('does nothing when removing from an empty heap', function() {
    // Act
    const removed = heap.remove();

    // Assert
    expect(removed).to.be.undefined;
  });
});