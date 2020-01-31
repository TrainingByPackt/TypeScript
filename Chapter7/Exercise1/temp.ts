// step 1 object
interface Product {
    height: number
    width: number
    color: string
}

// set 2 function 
interface ProductFunctionTemplate {
    (product: Product)
}

// step 3 class
interface ProductClassTemplate {
    makeProduct: ProductFunctionTemplate
    allProducts():Product[]
}

// step 4 implement class
class Product implements ProductClassTemplate {
    products: Product []
    makeProduct(product: Product) {}
    
    allProducts():Product[] {
        return this.products
    }
}

