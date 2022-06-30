

const user1 = {
    firstName: "harshit",
    age: 8,
    about: function(hobby, favMusician){
        console.log(this.firstName, this.age,);
    }
}
// user1.about()
const myFunc = user1.about.bind(user1);
myFunc();