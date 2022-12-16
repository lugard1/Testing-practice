const stringLength = require('./index');


describe ('value length module', () => {
  test ('length of value to be atleast 1', () => {
    const value = 'hello';
    expect (stringLength(value)).not.toBe(0);
  })
  test ('length of value is less than 10', () => {
    const value = 'hello';
    const check = stringLength(value);
    expect(check < 10).toEqual(true);
  })
})
