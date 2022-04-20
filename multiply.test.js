const multiplyTwoNum = require('./multiply');

describe('test multiply positive scenarios',() =>{

//toBe uses strict equality, toEqual tests the value of an object    
   
test.only('multiply two numbers',() =>{
        //Using toBe to test equality
        expect(multiplyTwoNum(3,2)).toBe(6);
        expect(multiplyTwoNum(2,2)).toBe(4);
    });


test('test object equality example', () => {
    //Using toEqual to test value
    const data = {first: 1};
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
    });

test('test multiply negative scenarios',() =>{
    //using negative testing with not
    expect(multiplyTwoNum(4,3)).not.toBe(11);
    });

})