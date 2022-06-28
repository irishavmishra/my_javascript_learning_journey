// reduce method



const userCart=[
    {productId:1, productName:"mobile", price:12000,},
    {productId:2, productName:"tv", price:15000,},
    {productId:3, productName:"laptop", price:22000,},
]

const userPay = userCart.reduce((totalPrice , curentProduct)=>{
    return totalPrice+curentProduct.price;
},0);

console.log(userPay)