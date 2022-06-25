// Arrow Function


// const singHappyBirthday = () => {

//     console.log("Happy birthday To You......");

// }
// singHappyBirthday();





// const  sumTwoNumber = (number1, number2) => {
//   return number1 + number2;
// }
// const ans =  sumTwoNumber(2,8)
// console.log(ans)



// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(9))



// const isEven = number => number % 2 ===0;
// console.log(isEven(9))




// function

// Input : String
// output : firstCharacter

// const firstCharacter = (anystring) => {
//     return anystring[0];

// };

// console.log(firstCharacter("dbhj"));




const firstCharacter = anystring => anystring[0];


console.log(firstCharacter("dbhj"));





// const findTarget = (array, target) => {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === target) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const myArray =[1,3,5,15,68]
//   const ans = findTarget(myArray,68)
//   console.log(ans);





const findTarget = (array, target) => {
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
  