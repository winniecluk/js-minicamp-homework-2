//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  return Math.max(x, y);
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  switch(language){
    case 'German':
      return 'Guten Tag!';
    // case 'English':
    //   return 'Hello';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
}

function isTenOrFive(num) {
  return (num === 10 || num === 5 ? true : false);
}

function isInRange(num) {
  return (num < 50 && num > 20 ? true : false);
}

function isInteger(num) {
  return (Number.isInteger(num) ? true : false);
}

function fizzBuzz(num) {
  var output = '';
  if (num % 3 === 0){
    output += 'fizz';
  }
  if (num % 5 === 0){
    output += 'buzz';
  }
  return (output ? output : num);
}

function isPrime(num) {
  if (Number.isInteger(num) && num != 0 && num != 1){
    for (var i = 2; i < num; i++){
      if (num % i === 0){
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  var arrMap = arr.map(function(el){
    return el + 1;
  });
  return arrMap;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  return words.join(' ');
}

function contains(arr, item) {
  return (arr.includes(item)? true : false);
}

function addNumbers(numbers) {
  return numbers.reduce(function(prev, curr){
    return prev + curr;
  });
}

function averageTestScore(testScores) {
  return (testScores.reduce(function(prev, curr){
    return prev + curr;
    })) / testScores.length;
}

function largestNumber(numbers) {
  return Math.max.apply(Math, numbers);
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
