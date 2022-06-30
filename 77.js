// object 

const user = {
    firstName: "ritik",
    lastName: "mishra",
    email: "ritikmishra@gmail.com",
    age: 2,
    address: "House Number, Colony, pincode ,state, country",
    about: function(){
        return `${this.firstName} is ${this.age} year old`
    },
    is18: function(){
        return this .age >= 18;
    }
}
// const aboutUser = user.about();
// console.log(aboutUser); 



// function (that function create object)
// add key value pair 
// Object ko return karega 

function createUser(firstName, lastName, email, age,address,){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} year old`
    },
    user.is18 = function(){
        return this .age >= 18;
    }
    return user;
}

const user1 = createUser("ritik", "mishra", "ritikmishra@gmail.com",23,"my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18)
