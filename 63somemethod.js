// some method 



// const numbers = [23,3,4,5,15,7,17,9]
// const ans= numbers.some((number)=>number%2===0);
// console.log(ans)




const userCart=[
    {productId:1, productName:"mobile", price:122000,},
    {productId:2, productName:"tv", price:15000,},
    {productId:3, productName:"laptop", price:22000,},
]

const underPrice = userCart.some((anypro)=>anypro.price<=16000);
console.log(underPrice);


