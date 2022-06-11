// for loop for array

let fruits = ["apple", "mango", "banana"];

// for(let i=0; i<=9; i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);
let fruits2 = [];
// for(let i=0; i<=fruits.length-1; i++){
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
};
console.log(fruits2);