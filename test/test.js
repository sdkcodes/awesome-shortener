var assert = require('assert');

describe("Array", function(){
    describe("indexOf", function(){
        it('should return -1 if value is not present', function(){
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        })
    })
})
