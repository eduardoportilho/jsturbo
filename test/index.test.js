var expect = require('chai').expect;
var jsturbo = require('../src/index');

describe('index', function() {
  describe('foo', function() {
    it('should return bar', function() {
      expect(jsturbo.foo()).to.equal('bar');
    });
  });
});