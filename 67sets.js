// sets (it is iterable)
// store data 
// sets also have its own methods
// no index bases access 
// order is not guranteed
// unique items only (no duplicates allowes)
// const items = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }

// console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }


const myArray = [1,2,3,4,5,6,4,5,6,7,7]
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
// console.log(myArray);

let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);



