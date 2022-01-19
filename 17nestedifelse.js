// nested if else 

let age = 18;

let userGuess=+prompt("guess the number");
if(age===userGuess){
    console.log("you win");
}else{
    if(userGuess>18){
        console.log("high")
    }else{
        console.log("low")
    }
}