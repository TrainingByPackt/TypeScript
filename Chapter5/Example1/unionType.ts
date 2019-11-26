// Union Type of number or string
type Age =  number | string

// function that takes the union type as an argument and returns the union type
function myAge(age: Age) :Age {
    return age
}

// console out function call with number
console.log( myAge(45) )

// console out function all with age as string
console.log(myAge('45'))

// 
console.log(myAge(true))

