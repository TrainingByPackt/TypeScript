"use strict";


// primitive type assignment
type One = number;


// complex (object assignment)
type Admin = {
    username: string,
    email: string,
    userId: string,
    AllowedPages: string
};

// example of the use of a primitive type use in a class
type OnlyNumbers = number;

// instance of numbers only class
class NumbersOnly {
    count: number
    SetNumber(someNumber: OnlyNumbers) {
    	this.count = someNumber;
    }
}

// class instance
const onlyNumbers = new NumbersOnly;

// call instance method with wrong argument
// uncomment to show error message 
//onlyNumbers.SetNumber("15")


// method with correct arguments
onlyNumbers.SetNumber(15);


// function and type definition  
function badCode(user: {
    email: string,
    userName: string,
    token: string,
    lastLogin: number
}) { }


// object / complex type User
type User = {
    email: string,
    userName: string,
    token: string,
    lastLogin: number
};

// function with type alias
function goodCode(user: User) { }



