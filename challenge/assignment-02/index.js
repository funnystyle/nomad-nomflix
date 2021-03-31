"use strict";

class ArrayUtilities {
  static addZeros = numbers => numbers.map(n => parseInt(`${n}0`, 10));
  static moreThanFifty = numbers => numbers.filter(n => n > 50);
  static removeFirst = ([, ...tail]) => tail;
  static sumAll = numbers => numbers.reduce((sum, n) => sum + n);
  static divide = number => `${number}`.split("");
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
