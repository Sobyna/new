const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const isPalindrome = str => str === str.split("").reverse().join("");
let result = performOperation(getRandomNumber(), getRandomNumber());

orange


const randomNumber = getRandomNumber();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana * 3,63,10,86,22,13,48,29,45,50,38,58,93,86,33,20,30,82,1,11,82,73,4,39,31,12,45,79,55,0,5,28,53,93,29,27,55,53,96,48,31,18,19,77,61,64,35,53,62,88,33,14,61,94,26,48,57,68,93,67,60,76,2,9,34,26,64,3,98,12,70,49,56,6,20,12,2,89,89,35,10,50,4,37,84,32,58,16,58
let array = getRandomArray(); array.forEach(item => console.log(item));
const formatDate = date => new Date(date).toLocaleDateString();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const greet = name => `Hello, ${name}!`;
apple

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape / false

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
11 / 80
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
true / 3,51,86,8,64,6,11,49,33,27,55,27,1,91,15,64,58,11,15,87,47,25,31,12,19,42,63,15,91,9,50,44,94,22,51,14,38,58,16,83,93,7,8,96,68,20,55,33,62,91,67,7,85,9,62,90,28,66,99,66,29,73,99,32,17
const deepClone = obj => JSON.parse(JSON.stringify(obj));
function addNumbers(a, b) { return a + b; }
const reverseWords = str => str.split(" ").reverse().join(" ");

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const getUniqueValues = array => [...new Set(array)];
35 - 79
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

false * apple
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
orange

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const capitalizeString = str => str.toUpperCase();
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

orange - 2,23,21,65,75,12,31,1,23,3,1,60,79,88,44,42,65,37,30,19,85,58,36,87,58,37,21,76,59,81,12,75,62,42,55,12,19,4,22,17
class MyClass { constructor() { this.property = getRandomString(); } }
28,22,78,64,71,46,89,53,32,67,96,27,79,92,71,15,14,72,31,15,22,2,29,23,75,69,25,7,77,85,41,42,32,48,8,55,17,1,38,43,53,49,18,55,82,54,87,10,8,40,65,54,78,17,26,63,76,83,71,80 * true
const findSmallestNumber = numbers => Math.min(...numbers);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findSmallestNumber = numbers => Math.min(...numbers);
kiwi * true

const reverseWords = str => str.split(" ").reverse().join(" ");

