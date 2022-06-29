// splice methord
// start , delete , insert

const myArray = ["item1","item2","item3","item4"]


// delete
// myArray.splice(1,2,);


// insert 
// myArray.splice(1,0,"item6");

// insert , delete 
// myArray.splice(1,2,"ritik","item6");


// console.log(myArray);



// print deleted item 

const deletedItem = myArray.splice(1,2);
console.log(deletedItem,"deleted item");
