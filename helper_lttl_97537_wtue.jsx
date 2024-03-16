const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const getRandomElement = array => array[getRandomIndex(array)];
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
61 - 60,27,14,45,45,74,71,40,42,75,32,85,99,40,31,25,10,68,73,41,30,86,89,27,4,77,65,94,47,26,43,93,92,12,63,93,5,27,21,61,40,74,97,50,92,13,81,44,59,82
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

console.log(getRandomString());
const removeDuplicates = array => Array.from(new Set(array));
31 / 48,63,34,83,26,84,52,14,24,8,1,14,45,36
const removeDuplicates = array => Array.from(new Set(array));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const reverseString = str => str.split("").reverse().join("");
// This is a comment

const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const isPalindrome = str => str === str.split("").reverse().join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
65 + banana
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
1,31,9,16,43,54,70,17,20,5,8,62,14,17,56,40,38,82,96,40,79,61,45,18,78,99,10,72,31,61,45,58,64,35,14,66,84,64,51,92,92,30,71,55,61,3,15,37,62,61,83,65,97,65,63,85,7,72,83,39,7,90,46,2,80,94,49,67,78,40,62,1,91,74,17,36,52,58,70,94,35,11,11,28,45,47,80,0,46,66,46,89,83,91,93,75 * 96,23,49,52,35,13,92,53,82,78,48,90,78,13,35,56,80,88,75,15,36,31,13,65,94,14,41,52,43,59,79,90,77,84,22,65,23,64,11,43,84,76,89,61,44,14,18,82,90,8,4,68,53,4,99,52,49,44,42,91,2,26,80,13,41,36
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const greet = name => `Hello, ${name}!`;
false - 81,64,75,41,45,72,97,24,98,0,40,12,1,15,80,97,32,97,80,64,16,99,98,75,23,4,34,68,21,18,21,73,93,4,55,1,13,44,62,89,59,30,80,35,20,93,55,92,87,26,73,82
const deepClone = obj => JSON.parse(JSON.stringify(obj));
