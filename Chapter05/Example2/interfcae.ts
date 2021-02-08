"use strict";

//first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}

//make product function
const productMaker = (product: ProductTemplate) => {
	return product;
}; 

// implement interface
const myProduct: ProductTemplate = {
	height: 10,
	width: 12,
	color: "red", // comment to show error
	//length: '42' //uncomment to show error 

};
// call the function using console log to show the output
console.log(productMaker(myProduct));



// uncomment to show error
// call function with incorrect object

// const myBadProduct = {
// 	height: "20",
// 	color: 1
// };

// console.log (productMaker(myBadProduct))


