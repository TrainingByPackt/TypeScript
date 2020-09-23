"use strict"
//first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}

//function interface
interface productInterfaceFunction {
    (product: ProductTemplate): ProductTemplate
}

//make product function
const productMake: productInterfaceFunction = (product: ProductTemplate) => {
    return product 
}

//product class  interface
interface ProductClassInterface {
    product: ProductTemplate
    makeProduct(product: ProductTemplate) :ProductTemplate
}

//class that implements product class interface 
class ProductClass implements ProductClassInterface  {
    product: ProductTemplate
    constructor(product: ProductTemplate){
        this.product = product
    }
    makeProduct():ProductTemplate {
        return this.product;
    }
}

// new product object
const product: ProductTemplate = {height:100, width:200, color: 'pink'}

// instance product class with new product object 
const newProduct = new ProductClass(product)

// console out new product object
console.log(
    newProduct.makeProduct()
)





