import {expect} from 'chai'
import jsturbo from '../src/index'

describe('str', function() {
  let str = jsturbo.str

  /**
   * str.pad
   */
  describe('pad', function() {
    it('should not change string with same length', function() {
      expect(str.pad('test', 4)).to.equal('test')
      expect(str.pad('test', 3)).to.equal('test')
    })

    it('should pad with zeros', function() {
      expect(str.pad('test', 5)).to.equal('0test')
      expect(str.pad('test', 7)).to.equal('000test')
    })

    it('should pad with custom char', function() {
      expect(str.pad('test', 5, 'z')).to.equal('ztest')
      expect(str.pad('test', 7, 'z')).to.equal('zzztest')
    })
  });

  /**
   * str.isNumber
   */
  describe("isNumber", function() {
    it("should indentify valid numbers", function() {
      expect(str.isNumber('10')).to.be.true;
      expect(str.isNumber('10.9')).to.be.true;
    });

    it("should indentify invalid numbers", function() {
      expect(str.isNumber('10x')).to.be.false;
      expect(str.isNumber('1$')).to.be.false;
      expect(str.isNumber('10.9.2')).to.be.false;
    });

    it("should indentify valid numbers with custom separators", function() {
      expect(str.isNumber('10,123', ',')).to.be.true;
    });

    it("should indentify invalid numbers with custom separators", function() {
      expect(str.isNumber('1.', ',')).to.be.false;
    });
  })
})