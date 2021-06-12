function sum(a, b) {
  if (typeof a === 'number' && b === undefined) {
    return a + 0;
  } else if (a === undefined) {
    return 0;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (typeof a === 'number' && b === undefined) {
    return a - 0;
  } else if (a === undefined) {
    return 0;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by 0");
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
