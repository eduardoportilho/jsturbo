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
})
