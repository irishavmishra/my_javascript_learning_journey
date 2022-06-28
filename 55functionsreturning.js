// Function returning Function

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;

// }



function myFunc(){
    return function(){
        return "hello world"
    }

}

const ans = myFunc()
console.log(ans());