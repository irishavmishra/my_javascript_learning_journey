// every method 

// const numbers = [2,4,6,8];

// const evenNumber = numbers.every((number)=>number%2===0);
// console.log(evenNumber);



const userCart=[
    {productId:1, productName:"mobile", price:12000,},
    {productId:2, productName:"tv", price:15000,},
    {productId:3, productName:"laptop", price:22000,},
]


const underPrice = userCart.every((amount)=>{
    return amount.price<=30000
});

console.log(underPrice)