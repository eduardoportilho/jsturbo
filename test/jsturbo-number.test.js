import {expect} from 'chai'
import jsturbo from '../src/index'

describe("num", function() {
  let num = jsturbo.num

  /**
   * num.format
   */
  describe("format", function() {
      it("should be able to convert to string without formatting", function() {
        expect(num.format(1234567)).to.equal('1234567');
        expect(num.format(1234567.00)).to.equal('1234567');
        expect(num.format(1234567.456)).to.equal('1234567.456');
      });

      it("should be able to format with decimal places", function() {
        expect(num.format(1234567, {decimalPlaces: 2})).to.equal('1234567.00');
        expect(num.format(1234567.12, {decimalPlaces: 2})).to.equal('1234567.12');
        expect(num.format(1234567.1234, {decimalPlaces: 2})).to.equal('1234567.12');
      });

      it("should be able to format with custom decimal separator", function() {
        expect(num.format(1234567, {decimalSeparator: ','})).to.equal('1234567');
        expect(num.format(1234567.12, {decimalSeparator: ','})).to.equal('1234567,12');
        expect(num.format(1234567.1234, {decimalSeparator: ','})).to.equal('1234567,1234');
      });

      it("should be able to format", function() {
        expect(num.format(1234567, {decimalPlaces: 3, decimalSeparator: ','})).to.equal('1234567,000');
        expect(num.format(1234567.12, {decimalPlaces: 3, decimalSeparator: ','})).to.equal('1234567,120');
        expect(num.format(1234567.1234, {decimalPlaces: 3, decimalSeparator: ','})).to.equal('1234567,123');
      });
  });

  /**
   * num.isInt
   */
  describe("isInt", function() {  
    it("should recognize integer numbers", function() {  
      expect(num.isInt(0)).to.be.true;
      expect(num.isInt(123456)).to.be.true;
      expect(num.isInt(123456.00)).to.be.true;
    });

    it("should reject decimal numbers", function() {  
      expect(num.isInt(0.1)).to.be.false;
      expect(num.isInt(123456.7)).to.be.false;
    });

    it("should reject other types", function() {  
      expect(num.isInt("0")).to.be.false;
      expect(num.isInt({})).to.be.false;
    });
  });

    /**
     * num.isNumber
     */
    describe("isNumber", function() {  
        it("should recognize numbers", function() {  
            expect(num.isNumber(0)).to.be.true;
            expect(num.isNumber(123456)).to.be.true;
            expect(num.isNumber(123456.00)).to.be.true;
            expect(num.isNumber(0.1)).to.be.true;
            expect(num.isNumber(123456.7)).to.be.true;
        });

        it("should reject other types", function() {  
            expect(num.isNumber("0")).to.be.false;
            expect(num.isNumber({})).to.be.false;
        });

        it("should reject NaN", function() {  
            expect(num.isNumber(NaN)).to.be.false;
        });
    });

    /**
     * num.toNumber
     */
    describe("toNumber", function() {  
        it("should convert to number", function() {  
            expect(num.toNumber('1.234,56')).to.equal(1234.56);
            expect(num.toNumber(1234.56)).to.equal(1234.56);
            expect(num.toNumber('123456')).to.equal(123456);
            expect(num.toNumber(123456)).to.equal(123456);
            expect(num.toNumber('1.234.567,89')).to.equal(1234567.89);
        });

        it("should return NaN on undefined, null or not a number", function() {
            expect(num.toNumber(NaN)).to.be.NaN;
            expect(num.toNumber(null)).to.be.NaN;
            expect(num.toNumber(undefined)).to.be.NaN;
            expect(num.toNumber('')).to.be.NaN;
            expect(num.toNumber('naosounumero')).to.be.NaN;
        });
    });

});
