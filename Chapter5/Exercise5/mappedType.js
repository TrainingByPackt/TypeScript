// export interface Cat {
//     age: number,
//     name: string;
// }
// type ReadOnlyCat = {
//     readonly [P in keyof Cat]: Cat[P]
// }
// type GenericReadyOnly<T> = {
//     readonly [P in keyof T]: T[P]
// }
// type ReadOnlyCat2 = GenericReadyOnly<Cat>
// type partCat =  Pick<Cat, 'age'>;
// const oneCat: partCat = {
//     age: 13
// }
// console.log(oneCat)//?
