'use strict';

var expect = require('chai').expect;
var styleNumb = require('../index');

describe('style-abbreviated-number', function () {
    it('should return styled number', function () {
        var result = styleNumb(100000);
        expect(result).to.equal('100k');
    });

    it('should return 1k with 1000', function () {
        var result = styleNumb(1000);
        expect(result).to.equal('1k');
    });

    it('should return 1000 with 1000 and minimum to 10000', function () {
        var result = styleNumb(1000, 0, 10000);
        expect(result).to.equal(1000);
    });
});
