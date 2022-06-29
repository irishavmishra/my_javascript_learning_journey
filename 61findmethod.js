// find method



// const myArray = ["lion","dog","cat","cow","goat"];

// function isLength3(String){
//     return String.length===3
// };
// const ans = myArray.find(isLength3);
// console.log(ans);


const users=[
    {userId : 1, userName : "ritik"},
    {userId : 2, userName : "ritik2"},
    {userId : 3, userName : "ritik3"},
    {userId : 4, userName : "ritik4"},
    {userId : 5, userName : "ritik5"},
    {userId : 6, userName : "ritik6"},
]

const myUser = users.find((user)=>user.userId===3);
console.log(myUser)