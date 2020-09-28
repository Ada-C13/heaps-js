const expect = require('chai').expect;
const { heapsort } = require('../lib/heapsort');

describe("heapsort", function() {
  it("sorts an empty array", function() {
    // Arrange 
    const list = [];

    // Act
    const result = heapsort(list);

    // Assert
    expect(result).to.eql([]); // Note: use eql for deep equality
  });

  it("can sort a 1-element array", function() {
    // Arrange 
    const list = [5];

    // Act
    const result = heapsort(list);

    // Assert
    expect(result).to.eql([5]);
  });
  
  it("can sort a 5-element array", function() {
    // Arrange 
    const list = [5, 27, 3, 16, -50];

    // Act
    const result = heapsort(list);

    // Assert
    expect(result).to.eql([-50, 3, 5, 16, 27]);
  });
});
