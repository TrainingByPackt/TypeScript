"use strict";
//make product function
var productMaker = function (product) {
    return product;
};
// implement interface
var myProduct = {
    height: 10,
    width: 12,
    color: 'red'
};
// call the function using console log to show the output
console.log(productMaker(myProduct));
// call function with incorrect object
var myBadProduct = {
    height: '20',
    color: 1
};
console.log(productMaker(myBadProduct));
