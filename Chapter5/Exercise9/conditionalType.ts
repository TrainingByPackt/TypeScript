// function process<T extends string | null>(
//     text: T
//   ): any {
//     return text === null ? null : text
//   }


// typeof process("foo") //?
// typeof process(null) //?


// type  Cats = {
//     name: string;
//     meow():void
// }
// type Others = {
//     name: string;
// }


// // cat example
// type Animal = Cats | Others

// type extractCat<A> = A extends {meow(): void}? A: never;

// type cat = extractCat<Animal>

// const someCat: cat = {
//     name: "lion",
//     meow():void {
//         console.log("me")
//     }
// }

// const someOther: cat = {
//     name: "zebra",
//     meow: ():void => {}
// }

// type Action = {type: "INIT"} | {type: "SYNC"} | {type: "LOGIN", email: string} | {type: "LOGIN_IN_SUCCESS", token: string}

// type ExtractActionParameters<A, T> = A extends {type: T} ? A : never;

// // type ActionType = Action["type"]

// // function dispatch<T extends ActionType>(
// //     type: T,
// //     args: ExtractActionParameters<Action, T>
// //     ): void {}

// type test = ExtractActionParameters<Action, "LOGIN">

// const someTest: test = {
//     type: 'LOGIN',
//     email: '@somemail.com'
// }


// const x = 7 < 10 ?  "cool" : "uncool";

// type c <T> = T extends number | string ?  string : null
// const cType : c<number> = "cool"
// cType


/* 

conditional types allow you to crate not uniform mapping
how I understand it is, conditionals allow you to apply a type based on a condition 
using the syntax of the turnery operator 
type someType<T, U> = T extends U? U : never
In sudo code if T === U then return U else return nothing
*/

// simple operation with a union type
type isNumberOrString<T> = T extends number | string? string | number : never

// returns a number type
const myNewNumber: isNumberOrString<number> = 45;
console.log(typeof myNewNumber)

// returns a string
const myNewString:isNumberOrString<string> = "cool runnings";
console.log(typeof myNewString)

// type complation error because sting cannot be never
const myNull:isNumberOrString<boolean> = "some thing";
console.log(typeof myNewString)

// more complex example
// user profile types
type profiles = {user: "admin", adminProfile: string[]} | {user: "normal", userProfile: string[] } 
// extract the right user type based on user string literal type
type rightUserType<U, T> = U extends {user: T} ?  U : never; 

// create some user with rightUserType type pass profile type and user sting as generic arguments 
const someUserIs: rightUserType<profiles, "admin" > = {
    user: "admin",
    adminProfile: ['reset uer', 'update profiles']
} 

// console out user to end exercise 
console.log(someUserIs)


