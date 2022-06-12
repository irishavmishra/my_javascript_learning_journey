// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];

let [myval1,myval2,...mynewArray] = myArray;

console.log(myval1);
console.log(mynewArray)