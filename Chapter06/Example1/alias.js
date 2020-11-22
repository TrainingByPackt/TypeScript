"use strict";
// instance of numbers only class
var NumbersOnly = /** @class */ (function () {
    function NumbersOnly() {
    }
    NumbersOnly.prototype.SetNumber = function (someNumber) {
        this.count = someNumber;
    };
    return NumbersOnly;
}());
// class instance
var onlyNumbers = new NumbersOnly;
// call instance method with wrong argument
// uncomment to show error message 
//onlyNumbers.SetNumber("15")
// method with correct arguments
onlyNumbers.SetNumber(15);
