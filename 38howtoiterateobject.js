// how to iterate Object

const person={
    name: "Rishav",
    age: 25,
    "person hobbies":[ "exploring","sleeping","traveling"]


}

// for in loop
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`)
//     console.log(key ,":" ,person[key])
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}