import {expect} from 'chai'
import {date} from '../src/index'

describe("date", function() {
    /*
     * date.toStringDMY
     */
    describe("toStringDMY", function() {
        it("should convert to DMY string", function() {
            var stringDMY = date.toStringDMY(new Date(2014, 8, 19));
            expect(stringDMY).to.equal('19/09/2014');
        });
    });

    /*
     * date.fromStringDMY
     */
    describe("fromStringDMY", function() {
        it("should parse from DMY string", function() {
            var aDate = date.fromStringDMY('19/09/2014');
            expect(date.toStringDMY(aDate)).to.equal('19/09/2014');
        });
    });

    /*
     * date.isToday
     */
    describe("isToday", function() {
        it("should recognize today", function() {
            expect(date.isToday(new Date())).to.be.true;
        });

        it("should not recognize past date as today", function() {
            var aDate = date.fromStringDMY('19/09/2014');
            expect(date.isToday(aDate)).to.be.false;
        });
    });
});
