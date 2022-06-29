// // short method

// const numbers = [2,3,5,7,9,400,180,4000,9000];
// numbers.sort((a,b)=>a-b);
// numbers.sort((a,b)=>b-a);
// console.log(numbers);


const products = [
    {productId: 1, productName: "p1", price:4000},
    {productId: 2, productName: "p2", price:500},
    {productId: 3, productName: "p3", price:7000},
    {productId: 4, productName: "p4", price:300},
    {productId: 5, productName: "p5", price:15000},
]




// products.sort((a,b)=>{
//     return a.price-b.price
// });



// const LowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(LowToHigh)



const LowToHigh = products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(LowToHigh)
// console.log(products)





