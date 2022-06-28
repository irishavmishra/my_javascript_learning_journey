// important array method

// const numbers = [4,5,6,7,9];

// function myFunction(number, index){
//     console.log(`index is ${index} number is ${number}`)
    
// }
 
// numbers.forEach(myFunction);

// numbers.forEach(function(number){
//     console.log(`number is ${number*2}`)
// })


const users = [
    {firstName: "harshit", age:24},
    {firstName: "harshit1", age:14},
    {firstName: "harshit2", age:34},
    {firstName: "harshit3", age:54},
]
 

// users.forEach(function(naame){
//     console.log(naame.firstName)
// })



// users.forEach((naame)=>{
//     console.log(naame.firstName)
// })


for(let naame of users){
    console.log(naame.firstName);
}