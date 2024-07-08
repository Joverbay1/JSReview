const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnAbcString = function () {
  return "abc123";
};

const returnSumOfTen = function (a, b) {
  return a + b;
};

const subtraction = function (a, b) {
  return a - b;
};

const multiplication = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

const returnArray = function () {
  return [1, 2, 3];
};

const returnFirstIndex = function () {
  const array = [1, 2, 3];
  return array[0];
};

const returnSecondIndex = function () {
  const array = [1, 2, 3];
  return array[1];
};

const returnArrayLength = function () {
  const array = [1, 2, 3];
  return array.length;
};

const arraySum = function () {
  const array = [1, 2, 3];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const arraySubtraction = function () {
  const array = [1, 2, 3];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum -= array[i];
  }
  return sum;
};

const multiplicationArray = function () {
  const array = [1, 2, 3];
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const divisionArray = function () {
  const array = [1, 2, 3];
  let quotient = array[0];
  for (let i = 1; i < array.length; i++) {
    quotient /= array[i];
  }
  return parseFloat(quotient.toFixed(3));
};

const oddArray = function (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
};

const evenArray = function (array) {
  const result = [];
  for (let number of array) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
};

module.exports = {
  returnEmptyString,
  returnZeroNumber,
  returnEmptyArray,
  returnEmptyObject,
  returnAbcString,
  returnSumOfTen,
  subtraction,
  multiplication,
  division,
  returnArray,
  returnFirstIndex,
  returnSecondIndex,
  returnArrayLength,
  arraySum,
  arraySubtraction,
  multiplicationArray,
  divisionArray,
  oddArray,
  evenArray,
};
