// map methord

const numbers = [2,4,5,6,7,8];

// const square = function(number){
//     return number*number;
// }

const squareNumber =numbers.map(function(number){
        return number*number;
});
console.log(squareNumber);