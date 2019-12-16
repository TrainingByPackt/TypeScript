
// type alias of type union number literal 
type countToThree  = 1| 2 | 3;


/* 
    user type generics to pass a type out object type someCount and set property count
    to out generic type
*/  
type someCount<T> = {status: string, count: T}


/* 
declare new object to of type someCount pass countToThree as generic type argument
count can now only be set to 1, 2 or 3 without compilation errors
*/  
const startCount: someCount<countToThree> = {
    status: 'start', 
    count: 1
}

console.log(startCount);