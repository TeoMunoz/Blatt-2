const R = require('rambda'); 

const sentence = 'AAA';

const isNumberChar = (char) => !isNaN(char) && char !== ' ';

const toChars = (str) => str.split('');


const filterNumbers = (arr) => arr.filter(isNumberChar);

const count = (arr) => arr.length;

const countNumbersInSentence = R.compose(count, filterNumbers, toChars);

const result = countNumbersInSentence(sentence);
console.log(result);