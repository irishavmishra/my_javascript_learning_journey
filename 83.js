// new keyword


function CreateUser(firstName, lastName, email, age,address,){
    // const user = Object.create(createUser.prototype);

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}


CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old`
};

CreateUser.prototype.is18 = function(){
    return this .age >= 18;
};


const user1 = new CreateUser("ritik", "mishra", "ritikmishra@gmail.com",23,"my address");
const user2 = new CreateUser("ritik2", "mishra2", "ritikmishra@gmail.com",23,"my address");
const user3 = new CreateUser("ritik3", "mishra3", "ritikmishra@gmail.com",23,"my address");



console.log(user1)
console.log(user1.about());
console.log(user1.is18());