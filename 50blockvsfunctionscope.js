// Block Scope Vs Function Scope

// let and const are block scope
// var is function scope

// {
//   const firstName = "rishav";
//   console.log(firstName);
// }

// {
//   const firstName = "mohit";
//   console.log(firstName);
// }

// const firstName = "pooja";
// console.log(firstName);



// var is function scope
// {

//     var firstName= "ritik";

// }
//  console.log(firstName);


// if(true){
//     var firstName ="rishav"
//     console.log(firstName);
// }

// console.log(firstName);

let firstName = "rishav2"

function myApp(){

    if(true){
        var firstName = "rishav"
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();