// difference between dot and bracket notaion 

const key ="email"
const person={
    name: "Rishav",
    age: 25,
    "person hobbies":[ "exploring","sleeping","traveling"]


}
// console.log(person["person hobbies"]);

person[key] = "rishav@gmail.com";
console.log(person);