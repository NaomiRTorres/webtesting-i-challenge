const enhancer = require('./enhancer.js');
const { succeed, fail, repair } = require('./enhancer.js');
// test away!

describe('enhancer.js', function() {
    describe('.succeed()', function() {
        it('should return true if enhancer succeeded', function() {
            expect(succeed()).toBe(true);
        })
    })

    describe('.fail()', function() {
        it('should return true if enhancer failed', function() {
            expect(fail()).toBe(false);
        })
    })

    describe('.repair()', function() {
        it('should return true if repair is needed', function() {
            const item = {durability: 20};
            expect(repair(item).durability).toBe(100);
        })
    })

    describe('.get()', function() {

    })
})