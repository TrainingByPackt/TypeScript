"use strict";
//make product function
var productMake = function (product) {
    return product;
};
//class that implements product class interface 
var ProductClass = /** @class */ (function () {
    function ProductClass(product) {
        this.product = product;
    }
    ProductClass.prototype.makeProduct = function () {
        return this.product;
    };
    return ProductClass;
}());
var product = { height: 100, width: 200, color: 'pink' };
var newProduct = new ProductClass(product);
console.log(newProduct.makeProduct());
