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
     * date.fromString
     */
    describe("fromString", function() {
        it("should parse YYYY-MM-DD date", function() {
            expect(date.fromString('2016-01-02')).to.eql(new Date(2016, 0, 2));
            expect(date.fromString('2016\\01\\02')).to.eql(new Date(2016, 0, 2));
            expect(date.fromString('2016-13-02')).to.eql(new Date(2016, 1, 13));
        });

        it("should parse DD-MM-YYYY date", function() {
            expect(date.fromString('02-01-2016')).to.eql(new Date(2016, 0, 2));
            expect(date.fromString('02\\01\\2016')).to.eql(new Date(2016, 0, 2));
            expect(date.fromString('02-13-2016')).to.eql(new Date(2016, 1, 13));
        });

        it("should parse DD-MM date", function() {
            var currentYear = new Date().getFullYear()
            expect(date.fromString('02-01')).to.eql(new Date(currentYear, 0, 2));
            expect(date.fromString('02\\01')).to.eql(new Date(currentYear, 0, 2));
            expect(date.fromString('02-13')).to.eql(new Date(currentYear, 1, 13));
        });

        it("should throw on invalid length", function() {
            expect(() => {
                date.fromString('02-01-16-90');
            }).to.throw('invalid length');
        });

        it("should throw on invalid date", function() {
            expect(() => {
                date.fromString('16-16-90');
            }).to.throw('Invalid date');
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

    /*
     * date.isToday
     */
    describe("isDate", function() {
        it("should recognize valid date", function() {
            expect(date.isDate('31/01/2010')).to.be.true;
            expect(date.isDate('2010/01/31')).to.be.true;
            expect(date.isDate('01-31-2010')).to.be.true;
            expect(date.isDate('01-31')).to.be.true;
        });

        it("should recognize ivalid date", function() {
            expect(date.isDate('31012010')).to.be.false;
            expect(date.isDate('31/01/2010 dc')).to.be.false;
            expect(date.isDate('31/20/2010')).to.be.false;
        });
    });
});
