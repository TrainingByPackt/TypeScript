// create a string and number literal 
type Status = "on";
type MyNumber = 123456;

//create a function that takes 2 args of string and number literal 
function takeTwoLiteral(status:Status, myNumber: MyNumber) {
    return {status, myNumber}
}

// wrong number type errors
takeTwoLiteral("on", 123457)

// wrong string
takeTwoLiteral("off", 123456) 

// correct string no errors
takeTwoLiteral("on", 123456) //?
