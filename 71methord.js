// methord
// function inside object 

// const person = {
//     firstName: "ritik",
//     age:25,
//     about: function(){
//         console.log(`this is ${this.firstName} and my age is ${this.age}`);
//     }
// }
// person.about();                 



function personInfo(){
    console.log(`this is ${this.firstName} and my age is ${this.age}`)
}

const person = {
    firstName: "ritik",
    age:25,
    about: personInfo
}
const person2 = {
    firstName: "ritik2",
    age:15,
    about: personInfo
};
const person3 = {
    firstName: "ritik3",
    age:5,
    about: personInfo
}

person.about();                 
person2.about();                 
person3.about();                 
