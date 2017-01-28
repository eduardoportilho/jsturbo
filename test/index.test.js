import {expect} from 'chai'
import jsturbo from '../src/index'

describe('str', function() {
  let str = jsturbo.str

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
})