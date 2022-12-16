// stringLength
const stringLength = string => {
  if(string.length < 1 || string.length > 10) {
    throw new Error ('String has less than one character')
  }
  return string.length;
}

// Reverse String

const reverseString = string => {
  return string.split("").reverse().join("");
}

class Calculator {
  // Constructor
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }

  // Add method
  add() {
    return this.a + this.b;
  }

// Substract method
substract() {
  return this.a - this.b;
}

// Divide
divide() {
  if(this.b === 0) {
    return 'undefined';
  } else {
    return this.a / this.b;
  }
}

// Multiply
multiply() {
  return this.a * this.b;
}
}

const capitalize = str => {
  return result = str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {stringLength, reverseString, Calculator, capitalize};