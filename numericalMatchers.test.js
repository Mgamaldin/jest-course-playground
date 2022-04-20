
test('numerical matchers test', () => {
    
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //Testing Truthiness 
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    // expect(value).not.toBeTruthy();
    // expect(value).toBeFalsy();
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("numeric operators", () => {
 
    var num1 = 100;
    var num2 = -20;
    var num3 = 0;
  
    // greater than
    expect(num1).toBeGreaterThan(10)
  
    // less than or equal
    expect(num2).toBeLessThanOrEqual(0)
  
    // greater than or equal
    expect(num3).toBeGreaterThanOrEqual(0)
  })

  test('adding floating point numbers Test', () => {
    const num = 0.1 + 0.2;
    //This won't work because of rounding error
    //expect(num).toBe(0.3);           
    expect(num).toBeCloseTo(0.3);
  });