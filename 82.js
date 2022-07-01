// const userMethord = {
//     about: function(){
//         return `${this.firstName} is ${this.age} year old`
//     },
//     is18: function(){
//         return this .age >= 18;
//     }
// }


function createUser(firstName, lastName, email, age,address,){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}


createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old`
};

createUser.prototype.is18 = function(){
    return this .age >= 18;
};


const user1 = createUser("ritik", "mishra", "ritikmishra@gmail.com",23,"my address");
const user2 = createUser("ritik2", "mishra2", "ritikmishra@gmail.com",23,"my address");
const user3 = createUser("ritik3", "mishra3", "ritikmishra@gmail.com",23,"my address");



console.log(user1)
console.log(user1.about());
// console.log(user1.is18());