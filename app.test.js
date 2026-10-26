const {test} =require("node:test")
const assert = require("node:assert/strict")

const {add} = require('./app')

test("greet returns the correct message",()=>{
    assert.strictEqual(add(5,3),10)
})

console.log('test passed');
