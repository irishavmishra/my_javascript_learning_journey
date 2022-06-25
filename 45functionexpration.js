// // Function declaration

// const singHappyBirthday = function(){

//     console.log("Happy birthday To You......");

// }
// singHappyBirthday();

// const  sumTwoNumber = function(number1, number2) {
//   return number1 + number2;
// }
// const ans =  sumTwoNumber(2,8)
// console.log(ans)



// const isEven = function(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(9))





// function

// Input : String
// output : firstCharacter

// const firstCharacter = function(anystring){
//     return anystring[0];

// };

// console.log(firstCharacter("dbhj"));





const findTarget = function(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray =[1,3,5,15,68]
const ans = findTarget(myArray,68)
console.log(ans);
