class ArrayUtilities {
  static addZeros = arr => arr.map(n => n * 10);
  static moreThanFifty = arr => arr.filter(n => n > 50);
  static removeFirst = arr => {
    const [, ...rest] = arr;
    return rest;
  };
  static sumAll = arr => arr.reduce((a, b) => a + b, 0);
  static divide = payload => `${payload}`.split("");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
