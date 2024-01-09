// TASK 2
// interface types 
// {
//     name: string,
//     grade:string
// }
// function findStudentByGrade(arr:{[key:string]:string}[], str:string)
// {
//    for(let i = 0; i<arr.length; i++)
//    {
//        if(arr[i].grade == str)
//        {
//         return arr[i]
//        }
//    }
// }
// console.log(findStudentByGrade([ 
//     { name: "Alice", grade: "B" },
//     { name: "Bob",grade: "A" },
//     { name: "Charlie", grade: "C" }, ] , "B"));

// TASK 2
// interface Product {
//     name: string;
//     price: number;
//     category: string;
// }

// function filterProducts(arr: Product[], n: number, str: string) {
//     let a = arr.filter(b => {
//         return b.price <= n && b.category === str;
//     });
//     return a;
// }

// console.log(filterProducts([
//     { name: "Laptop", price: 800, category: "электроника" },
//     { name: "Headphones", price: 30, category: "электроника" },
//     { name: "Book", price: 15, category: "книги" }
// ], 50, "электроника"));


// TASK 3
// interface Types 
// {
//     name:string,
//     age:number
// }
// function sortPeopleByAge(arr:Types[])
// {
//     return arr.sort((a,b) => a.age - b.age)
// }
// console.log(sortPeopleByAge([
//     { name: "Anna", age: 25 },
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 22 } ]));

// TASK 4
// interface Types
// {
//     name:string, 
//     age:number,
//     grades:number[]
// }
// function calculateAverageGrade1(arr:Types[])
// {
//     let res:{[key:string]:number} = {}
//     for (let i = 0; i < arr.length; i++) {
//         let b = arr[i];
//         let average = b.grades.reduce((a, b) => a + b) / 3;
//         res['Name ' + arr[i].name] = average;
//       }
//       return res;
// }
// console.log(
//     calculateAverageGrade1([
//       { name: "Alice", age: 22, grades: [90, 85, 88] },
//       { name: "Bob", age: 20, grades: [75, 92, 80] },
//       { name: "Charlie", age: 21, grades: [88, 85, 90] },
//     ])
//   )