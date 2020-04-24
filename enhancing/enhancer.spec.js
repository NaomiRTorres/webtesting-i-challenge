const enhancer = require('./enhancer.js');
const { succeed, fail, repair } = require('./enhancer.js');
// test away!

const itemObj = {
    name: 'shield',
    enhancement: 10,
    durability: 50
}


describe('enhancer.js', function() {
    describe('.succeed()', function() {
        it('should return true if enhancer succeeded', function() {
           expect(succeed(itemObj).enhancement).toBe(11)
        }) 
        it('should not add anything', function(){
            const newItemObj = {
                enhancement: 20
            }
            expect(succeed(newItemObj).enhancement).toBe(20)
        })  
    })

    describe('.fail()', function() {
        it('should return true if enhancer failed', function() {
            expect(fail(itemObj).durability).toBe(45);
        })
        it('enhancement is 16 or higher, 16 < durability decreases by 10, enhancement decreases by 1', function(){
            const newItemObj = {
                enhancement: 17,
                durability: 13
            }
            expect(fail(newItemObj).durability).toBe(3);
            expect(fail(newItemObj).enhancement).toBe(16);
        })
        it('enhancement is 15, durability of item should decrease by 10 ', function(){
            const newItemObj = {
                enhancement: 15,
                durability: 2
            }
            expect(fail(newItemObj).durability).toBe(-8);
        })
    })

    describe('.repair()', function() {
        it('should return true if repair is needed', function() {
            expect(repair(itemObj).durability).toBe(100);
        })
    })

    describe('.get()', function() {

    })
})