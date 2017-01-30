import {expect} from 'chai'
import jsturbo from '../src/index'

describe("num", function() {
  let num = jsturbo.num

  /**
   * str.format
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

});
