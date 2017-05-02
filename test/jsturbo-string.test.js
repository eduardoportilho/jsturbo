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
  })

  /**
   * str.isNumber
   */
  describe("isNumber", function() {
  it("should indentify valid numbers", function() {
    expect(str.isNumber('10')).to.be.true
    expect(str.isNumber('10.9')).to.be.true
  })

  it("should indentify invalid numbers", function() {
    expect(str.isNumber('10x')).to.be.false
    expect(str.isNumber('1$')).to.be.false
    expect(str.isNumber('10.9.2')).to.be.false
  })

  it("should indentify valid numbers with custom separators", function() {
    expect(str.isNumber('10,123', ',')).to.be.true
  })

  it("should indentify invalid numbers with custom separators", function() {
    expect(str.isNumber('1.', ',')).to.be.false
  })
  })
  /**
   * str.toNumber
   */
  describe("toNumber", function() {
    it("should be able to recognize different decimal and thousand separators", function() {
      var num = str.toNumber('1.234,56')
      expect(num).to.equal(1234.56)

      var num2 = str.toNumber('1,234.56')
      expect(num2).to.equal(1234.56)
    })

    it("should be able to ignore thousand separators", function() {
      var num = str.toNumber('1.234.567,89')
      expect(num).to.equal(1234567.89)
    })

    it("should be able to ignore wrong separators", function() {
      var num = str.toNumber('1.234.567.89')
      expect(num).to.equal(1234567.89)
    })

    it("should be able to ignore currency signs", function() {
      var num = str.toNumber('R$ 1.234,56')
      expect(num).to.equal(1234.56)

      var num2 = str.toNumber('USD 1,234.56')
      expect(num2).to.equal(1234.56)
    })

    it("should be able to ignore other characters", function() {
      var num = str.toNumber('"""1.234,56"""')
      expect(num).to.equal(1234.56)

      var num2 = str.toNumber('#@W1,234.56CF&*Y')
      expect(num2).to.equal(1234.56)
    })

    it("should return NaN on undefined, null or not a number", function() {
      expect(str.toNumber('')).to.be.NaN
      expect(str.toNumber('notanumber')).to.be.NaN
      expect(str.toNumber(null)).to.be.NaN
      expect(str.toNumber(undefined)).to.be.NaN
    })

    it("should recognize negative numbers", function() {
      var num = str.toNumber('-1.234,56')
      expect(num).to.equal(-1234.56)

      var num = str.toNumber('+1.234,56')
      expect(num).to.equal(1234.56)
    })
  })

  /**
   * str.containsAlpha
   */
  describe('containsAlpha', function() {
    it('should identify at least N letters', function() {
      expect(str.containsAlpha('a12 4./')).to.be.true
      expect(str.containsAlpha('test', 4)).to.be.true
      expect(str.containsAlpha('t e s t', 4)).to.be.true
    })

    it('should identify less than N letters', function() {
      expect(str.containsAlpha('12 4./')).to.be.false
      expect(str.containsAlpha('test', 5)).to.be.false
      expect(str.containsAlpha('t e s t', 5)).to.be.false
    })
  })
})
