// Nested Destructuring

const users = [
    {userId:1, fullName:"Rishav Mishra", gender:"male",},
    {userId:2, fullName:"fishav Mishra", gender:"male",},
    {userId:3, fullName:"tishav Mishra", gender:"male",},
    {userId:4, fullName:"dishav Mishra", gender:"male",},



];

// const [user1, user2, user3] = users;
// console.log(user1);

// const [{fullName}, ,{gender}] = users;
// console.log(fullName);
// console.log(gender);


const [{fullName:user1fullName}, ,{gender}] = users;
console.log(user1fullName);
console.log(gender);