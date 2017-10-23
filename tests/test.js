const assert = require('chai').assert;
const myApp = require('../src/raindrop.js');

describe("Test for raindrops", function(){
    describe("handle for Corect Input", function() {
        it("should return 'Pling' for 3 ", function(){
            assert.equal(myApp.rainDrops(3), "Pling");
        });
    });
    
    describe("handle for Corect Input", function() {
        it("should return 'Plang' for 5 ", function(){
            assert.equal(myApp.rainDrops(5), "Plang");
        });
    });

    describe("handle for Corect Input", function() {
        it("should return 'Value must be entered ", function(){
            assert.equal(myApp.rainDrops(""), "Value must be entered");
        });
    });

    describe("handle for Corect Input", function() {
        it("should return 'Plong' for 7 ", function(){
            assert.equal(myApp.rainDrops("7"), "Plong");
        });
    });

    
    describe("handle for Corect Input", function() {
        it("should return 'Plong' for 7 ", function(){
            assert.equal(myApp.rainDrops("5.3"), "Value Cannot be a Decimal number");
        });
    });

    describe("handle for Corect Input", function() {
        it("should return not a number ", function(){
            assert.equal(myApp.rainDrops("yes"), "Value must be a number");
        });
    });


    describe("handle for Corect Input", function() {
        it("should return 29 ", function(){
            assert.equal(myApp.rainDrops(29), 29);
        });
    });

    describe("handle for Corect Input", function() {
        it("should return same number", function(){
            assert.equal(myApp.rainDrops(2), 2);
        });
    });

    describe("handle for Corect Input", function() {
        it("should return not a number", function(){
            assert.equal(myApp.rainDrops("xyz"), "Value must be a number");
        });
    })

    describe("handle for Corect Input", function() {
        it("should return not a number", function(){
            assert.equal(myApp.rainDrops("xyz"), "Value must be a number");
        });
    })

    describe("handle for Corect Input", function() {
        it("should return not a number", function(){
            assert.equal(myApp.rainDrops(35), "PlangPlong");
        });
    })
})
