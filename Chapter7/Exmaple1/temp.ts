// first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}


// make product function
const productMaker = (product: ProductTemplate) => {
    console.log(product)
    return product
} 

const myProduct: ProductTemplate = {
    height: 10,
    width: 12,
    color: 'red',

}

productMaker(myProduct)