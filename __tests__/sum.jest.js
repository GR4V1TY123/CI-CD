function sum(a, b){
    return a + b;
}

test("add 2 + 4 = 6", ()=> {
    expect(sum(2,4)).toBe(6)
})