// TASK 1
// function countOccurrences(arr: (number | string)[]) {
//     let res: { [key: string]: number } = {};
//     for (let i = 0; i < arr.length; i++) {
//       if (res[arr[i]]) {
//         res[arr[i]]++;
//       } else {
//         res[arr[i]] = 1;
//       }
//     }
//     return res;
//   }
// console.log(countOccurrences([1, 2, 2, 3, 3, 3]));   
// console.log(countOccurrences([2, "hello", 2, 3, 3, 3]));

// TASK 2
// interface types {
//     id: number;
//     name: string;
//   }
// function findUniqueElements(arr: types[]) {
//     let uniq: { [key: number]: types } = {};
//     arr.forEach((obj) => {
//       uniq[obj.id] = obj;
//     });
//     return Object.values(uniq);
// }
// console.log(
//     findUniqueElements([
//       { id: 1, name: "John" },
//       { id: 2, name: "Jane" },
//       { id: 1, name: "Jim" },
//     ])
//   );
  
// TASK 3
// function mergeArraysToObject(keys: string[], val: (string | number)[]){
//     let res: { [a: string]: string | number } = {};
//     keys.forEach((key, index) => {
//       res[key] = val[index];
//     });
//     return res;
// }
// console.log(mergeArraysToObject(["name", "age"], ["John", 25])); // { name: 'John', age: 25 }
  
// TASK 4
// function countWords1(str: string) {
//     const a = str.split(" ");
//     const cnt: { [key: string]: number } = {};
//     for (let i = 0; i < a.length; i++) {
//       let b = a[i];
//       if (cnt[b]) {
//         cnt[b]++;
//       } else {
//         cnt[b] = 1;
//       }
//     }
//     return cnt;
//   }
// console.log(countWords1("This is a test. This test is only a test."));
// console.log(countWords1("I am Hasan.I am a developer"));
  
// TASK 5
// function filterObjectByValueType1(obj:{[key:string]: string | number | boolean}, type:string)
// {
//     let res:{[key:string]:string | number | boolean} = {}
//     let keys = Object.keys(obj)
//     for (let i = 0; i< keys.length; i++) {
//     if (typeof obj[keys[i]] == type) {
//         res[keys[i]] = obj[keys[i]];
//       }
//     }
//     return res;
// }
// console.log(filterObjectByValueType1({ a: 1, b: "hello", c: true, d: 5 }, "number"));  // { a: 1, d: 5 }






