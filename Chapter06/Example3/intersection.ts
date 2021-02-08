// product type
type Product = {
    name: string, 
    price: number,
    description: string
} 

// order type
type Order = {
    orderId: string,
    amount: number,
   discount?: number 
}


// Alias Cart of Product intersect Order
type Cart = Product & Order;


// cart of type Cart
const cart: Cart = {
    name: "Mango", // comment out prop to show missing type error
    price: 400,
    orderId: "x123456",
    amount: 4,
    description: "big sweet, full of sugar !!!" 
}

console.log(cart);
