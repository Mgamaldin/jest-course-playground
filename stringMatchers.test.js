
test('there is no I in team - not toMatch test', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph - toMatch test', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test("string matchers",() => {
    var string1 = "software testing help - a great resource for testers"
    // test for success match
    expect(string1).toMatch(/test/);
    // test for failure match
    expect(string1).not.toMatch(/abc/)
  })

  test('Truthiness on null value test', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });