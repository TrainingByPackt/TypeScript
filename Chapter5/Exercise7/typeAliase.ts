
// type alias of type union number literal 
type countToThree  = 1| 2 | 3;


// user type generics to set new type alias to countToThree
type someCount<T> = {status: string, count: T}


// declare new object to of type someCount pass countToThree as generic type argument  
const startCount: someCount<countToThree> = {
    status: 'start', 
    count: 1
}

console.log(startCount);