import {expect} from 'chai'
import {obj} from '../src/index'

describe("obj", function() {
    /*
     * obj.isEmpty
     */
    describe("isEmpty", function() {
        it("should be empty", function() {
            expect(obj.isEmpty()).to.be.true;
            expect(obj.isEmpty(null)).to.be.true;
            expect(obj.isEmpty(undefined)).to.be.true;
            expect(obj.isEmpty('')).to.be.true;
            expect(obj.isEmpty('   ')).to.be.true;
            expect(obj.isEmpty([])).to.be.true;
            expect(obj.isEmpty({})).to.be.true;
        });

        it("should not be empty", function() {
            expect(obj.isEmpty('a')).to.be.false;
            expect(obj.isEmpty(12)).to.be.false;
            expect(obj.isEmpty(12.0)).to.be.false;
            expect(obj.isEmpty([''])).to.be.false;
            expect(obj.isEmpty({a:''})).to.be.false;
        });
    });
});
