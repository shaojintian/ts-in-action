const math = require("../src/a.ts")

test('add 1+1',()=>{
    expect(math.add(1,1)).toBe(2);
})
test('sub 1 - 2 = -1',()=>{
    expect(math.sub(1,2)).toBe(-1);
})
