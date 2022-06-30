// call apply bind method 

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician)
}

const user1 = {
    firstName: "harshit",
    age: 8,
}


const user2 = {
    firstName: "ritik",
    age: 12,
}

// call 
about.call(user1, "guitar", "moazrt");


// apply
about.apply(user1, ["guitar", "moazrt"]);


// bind
const func = about.bind(user1, "guitar", "moazrt");
func();