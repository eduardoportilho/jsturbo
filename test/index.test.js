import {expect} from 'chai'
import jsturbo from '../src/index'

describe('index', function() {
  describe('foo', function() {
    it('should return bar', function() {
      expect(jsturbo.foo()).to.equal('bar')
    })
  })
})