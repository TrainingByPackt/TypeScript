"use strict";

// string literal  
type Yes = "yes";

// number literal
type One = 1;

// process my literal 
function yesOne(yes: Yes, one: One ) {
    console.log(yes, one);
}

// errors uncomment to show error examples
// yesOne("", 2)
// yesOne("yes", 2)

// function with the correct arguments 
yesOne("yes", 1);

