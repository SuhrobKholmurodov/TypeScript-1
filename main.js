//  TASK 1
// function countOccurrences(arr) {
//   let res = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (res[arr[i]]) {
//       res[arr[i]]++;
//     } else {
//       res[arr[i]] = 1;
//     }
//   }
//   return res;
// }
// console.log(countOccurrences([2, "hello", 2, 3, 3, 3])); //{ '2': 2, '3': 3, hello: 1 }

// TASK 2
// function findUniqueElements(arr) {
//   const uniq = {};
//   arr.forEach((obj) => {
//     uniq[obj.id] = obj;
//   });
//   return Object.values(uniq);
// }
// console.log(
//   findUniqueElements([
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 1, name: "Jim" },
//   ])
// ); //[ { id: 1, name: 'Jim' }, { id: 2, name: 'Jane' } ]

// TASK 3
// function mergeArraysToObject(keys, val) {
//   let res = {};
//   keys.forEach((key, index) => {
//     res[key] = val[index];
//   });
//   return res;
// }
// console.log(mergeArraysToObject(["name", "age"], ["John", 25])); // { name: 'John', age: 25 }

// TASK 4
// function countWords(str) {
//   const a = str.split(" ");
//   const cnt = {};
//   for (let i = 0; i < a.length; i++) {
//     let b = a[i];
//     if (cnt[b]) {
//       cnt[b]++;
//     } else {
//       cnt[b] = 1;
//     }
//   }
//   return cnt;
// }
// console.log(countWords("This is a test. This test is only a test.")); // { This: 2, is: 2, a: 2, 'test.': 2, test: 1, only: 1 }
// console.log(countWords("I am Hasan.I am a developer")); //  { I: 1, am: 2, 'Hasan.I': 1, a: 1, developer: 1 }

//  TASK 5

// function filterObjectByValueType(obj, type) {
//   let res = {};
//   let keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     if (typeof obj[keys[i]] == type) {
//       res[keys[i]] = obj[keys[i]];
//     }
//   }
//   return res;
// }
// console.log(
//   filterObjectByValueType({ a: 1, b: "hello", c: true, d: 5 }, "number")
// ); // { a: 1, d: 5 }

// function countStr(str, word) {
//   let cnt = 0;
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] == word) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(countStr("hasan", "a"));

// function reverseNumber(num) {
//   let a = 0;
//   while (num !== 0) {
//     a = a * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return a;
// }
// console.log(reverseNumber(123));

// function reverseNumber(num) {
//   let reversed = 0;
//   let numToString = num.toString();
//   for (let i = numToString.length - 1; i >= 0; i--) {
//     reversed = reversed * 10 + parseInt(numToString.charAt(i));
//   }
//   return reversed;
// }
// console.log(reverseNumber(123));

