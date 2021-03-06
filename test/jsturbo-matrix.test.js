import {expect} from 'chai'
import jsturbo from '../src/index'

describe("matrix", function() {
  let matrix = jsturbo.matrix

  /**
   * matrix.coordToIndex
   */
  describe(".coordToIndex", function() {
    it("should be able to convert coord to index", function() {
      expect(matrix.coordToIndex({r:0, c:0}, {R:2, C:2})).to.equal(0)
      expect(matrix.coordToIndex({r:0, c:1}, {R:2, C:2})).to.equal(1)
      expect(matrix.coordToIndex({r:1, c:0}, {R:2, C:2})).to.equal(2)
      expect(matrix.coordToIndex({r:1, c:1}, {R:2, C:2})).to.equal(3)
    })

    it("should throw on out of bounds", function() {
      expect(function() {
        matrix.coordToIndex({r:2, c:0}, {R:2, C:2})
      }).to.throw('Index out of bounds.');

      expect(function() {
        matrix.coordToIndex({r:-1, c:0}, {R:2, C:2})
      }).to.throw('Index out of bounds.');
    })
  })

  /**
   * matrix.format
   */
  describe(".indexToCoord", function() {
    it("should be able to convert index to coord", function() {
      expect(matrix.indexToCoord(0, {R:2, C:2})).to.eql({r:0, c:0})
      expect(matrix.indexToCoord(1, {R:2, C:2})).to.eql({r:0, c:1})
      expect(matrix.indexToCoord(2, {R:2, C:2})).to.eql({r:1, c:0})
      expect(matrix.indexToCoord(3, {R:2, C:2})).to.eql({r:1, c:1})
    })

    it("should throw on out of bounds", function() {
      expect(function() {
        matrix.indexToCoord(4, {R:2, C:2})
      }).to.throw('Index out of bounds.');

      expect(function() {
        matrix.indexToCoord(-1, {R:2, C:2})
      }).to.throw('Index out of bounds.');
    })
  })

  /**
   * matrix.forEach
   */
  describe(".forEach", function() {
    it("should iterate over matrix", function() {
      var sum = 0
      matrix.forEach([[1,2],[3,4]], (i) => sum += i)
      expect(sum).to.equal(10)
    })

    it("should access receive indexes in callback", function() {
      var sum = 0
      matrix.forEach([[1,2],[3,4]], (val, r, c) => sum += (r+c))
      expect(sum).to.equal(4)
    })

    it("should iterate over incomplete matrix", function() {
      var sum = 0
      matrix.forEach([[1,2],[3,4], [5]], (i) => sum += i)
      expect(sum).to.equal(15)
    })
  })

  /**
   * matrix.map
   */
  describe(".map", function() {
    it("should double the values of the matrix", function() {
      expect(matrix.map([[1,2],[3,4]], (i) => i*2)).to.eql([[2,4],[6,8]])
    })

    it("should replace the values of the matrix by the col index", function() {
      expect(matrix.map([[1,2],[3,4],[5]], (val, r, c, matrix) => c)).to.eql([[0,1],[0,1],[0]])
    })
  })
})
