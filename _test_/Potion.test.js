
const Potion = require('../lib/Potion.js');

//"new"--creates a new potion object
test('creates a health potion object', () => {
    const potion = new Potion('health');
    //.name and.value properties property is assigned both to the now potion object having 2 values
    // expect.any()- method takes a constructor as a argument..in this case the value
    // property is created with a number() constructor.
    //don't test random number -10.1.5
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

//second test written before the function in Potion.js 
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});