/* eslint-disable no-mixed-spaces-and-tabs */
"use strict";

//step 1
interface ProductObjectTemplate {
    height: number
    width: number
    color: string
}

// step 2
interface ProductFunctionTemplate {
    (product: ProductObjectTemplate): void
}

//step 3
interface ProductClassTemplate {
    makeProduct: ProductFunctionTemplate;
    allProducts():ProductObjectTemplate[]
}

//step 4
class Product implements ProductClassTemplate {
    products: ProductObjectTemplate []
    
    constructor() {
    	this.products = [];
    }

    makeProduct(product: ProductObjectTemplate) {
    	return this.products.push(product);
    }
    
    allProducts():ProductObjectTemplate[] {
    	return this.products;
    }}

//step 5
const productInstance: ProductClassTemplate = new Product();
    
// uncomment to see error
//productInstance.makeProduct({})


//step 6
productInstance.makeProduct(
	{
		color: "red", 
		height: 10, 
		width: 14
	}
);

//step 7 
console.log(
	productInstance.allProducts()
);