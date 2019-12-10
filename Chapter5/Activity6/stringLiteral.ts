// create a sting literal union type
type peopleNames = "Rayon" | "Mike" | "Mark";
// function to check name sting and run some logic based on the string literal
function whoAmI(name: peopleNames) {
    switch (name) {
        case "Rayon":
            console.log("HI Rayon !!!")
            break;
        case "Mike":
            console.log("HI Mike !!!")
            break
        case "Mark":
            console.log("HI Mark !!!")
            break
        default:
            console.log("New Phone Who This !!!")
            break;
    }
}
// call function 
whoAmI("Rayon")




