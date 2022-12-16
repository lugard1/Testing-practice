const {stringLength, reverseString, Calculator, capitalize} = require('./index');

// Test for stringLength

describe ('value length module', () => {
  test ('length of value to be atleast 1', () => {
  // Arrange
  const value = 'Lugard';

  // Act
  const check = stringLength(value);

  // Assert
  expect (check).not.toBe(0);
 })
 test ('length of value is less than 10', () => {
  // Arrange
   const value = 'hello';

  // Act
   const check = stringLength(value);
  
  // Assert 
  expect(check < 10).toEqual(true);
  })
})

// Test for reverseString

describe('reverseString module', () => {
  test('Reverse the string',() => {
    // Arrange
    const string = 'random string';

    // Act
    const result = reverseString(string);

    // Assert
    expect(reverseString(string)).toBe('gnirts modnar');
  })
  test('Reverse the string', () => {
    // Arrange
    const string = 'random string';

     // Act
     const result = reverseString(string);

      // Assert
    expect(result).not.toBe('random string')
  })
})

// Test for add

describe('Calculate addtogether', () => {
  test('expected 1 + 2 equal 3', () => {
    // Arrange
    const a = 1;
    const b = 2;
    const expectedoutput = 3;

    // Act
    const addtogether = new Calculator(a, b);
    const result = addtogether.add();

    // Assert
    expect(result).toEqual(expectedoutput);
  });

  test('expected 6 + 3 equal 9', () => {
    // Arrange
    const a = 6;
    const b = 3;
    const expectedoutput = 9;

    // Act
    const addtogether = new Calculator(a, b);
    const result = addtogether.add();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
    test('expected 20 + 25 equal 45', () => {
    // Arrange
    const a = 20;
    const b = 25;
    const expectedoutput = 45;

    // Act
    const addtogether = new Calculator(a, b);
    const result = addtogether.add();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
})

// Test for substract

describe('difference between two numbers', () => {
  test('expected 5 - 3 equal 2', () => {
    // Arrange
    const a = 5;
    const b = 3;
    const expectedoutput = 2;

    // Act
    const difference = new Calculator(a, b);
    const result = difference.substract();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
  test('expected 50- 32 equal 18', () => {
    // Arrange
    const a = 50;
    const b = 32;
    const expectedoutput = 18;

    // Act
    const difference = new Calculator(a, b);
    const result = difference.substract();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
  test('expected 47 - 63 equal -16', () => {
    // Arrange
    const a = 47;
    const b = 63;
    const expectedoutput = -16;

    // Act
    const difference = new Calculator(a, b);
    const result = difference.substract();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
})

// Test for divide

describe('divide two numbers', () => {
  test('expected 6 / 2 equal 3', () => {
    // Arrange
    const a = 6;
    const b = 2;
    const expectedoutput = 3;

    // Act
    const division = new Calculator(a, b);
    const result = division.divide();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
  test('expected 12 / 4 equal 3', () => {
    // Arrange
    const a = 12;
    const b = 4;
    const expectedoutput = 3;

    // Act
    const division = new Calculator(a, b);
    const result = division.divide();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
  test('expected 100 / 25 equal 4', () => {
    // Arrange
    const a = 100;
    const b = 25;
    const expectedoutput = 4;

    // Act
    const division = new Calculator(a, b);
    const result = division.divide();

    // Assert
    expect(result).toEqual(expectedoutput);
  });
})

// Test for multiply

describe('multiply two numbers', () => {
  test('expected 3 * 6 equal 18', () => {
    // Arrange
    const a = 3;
    const b = 6;
    const expectedoutput = 18;

    // Act
    const times = new Calculator(a, b);
    const result = times.multiply();

    // Assert

    expect(result).toEqual(expectedoutput);
  });
  test('expected 3 * 7 equal 21', () => {
    // Arrange
    const a = 3;
    const b = 7;
    const expectedoutput = 21;

    // Act
    const times = new Calculator(a, b);
    const result = times.multiply();

    // Assert

    expect(result).toEqual(expectedoutput);
  });
  test('expected 4 * 6 equal 18', () => {
    // Arrange
    const a = 4;
    const b = 6;
    const expectedoutput = 24;

    // Act
    const times = new Calculator(a, b);
    const result = times.multiply();

    // Assert

    expect(result).toEqual(expectedoutput);
  })
})

// Test for Capitalize first character
describe('capitalize first character of string', () => {
  test('expected lugard to be Lugard', () => {
    // Arrange
    const string = 'lugard';
    expectedoutput = 'Lugard';

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toEqual(expectedoutput)
  })
})