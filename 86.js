class CreateUser{
    constructor(firstName, lastName, email, age,address,){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} year old`
    };
    is18(){
        return this .age >= 18;
    }
}




const user1 = new CreateUser("ritik", "mishra", "ritikmishra@gmail.com",23,"my address");
const user2 = new CreateUser("ritik2", "mishra2", "ritikmishra@gmail.com",23,"my address");
const user3 = new CreateUser("ritik3", "mishra3", "ritikmishra@gmail.com",23,"my address");

console.log(user1.about())