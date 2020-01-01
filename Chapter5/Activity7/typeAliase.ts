// alias a type user which is a object
type SysUser = {
    email: string,
    toke: string,
    id: number
}
// user creation function
function buildUser(userDetails: SysUser): SysUser {
    return userDetails
}
// create userOne constant of type alias SysUser
const userOne: SysUser = {
    email: 'user@one.com',
    toke: '12345678',
    id: 1234
}
// create wrongUser object
const wrongUser = {
    email: 'just@email.com'
}
// call buildUser function with userOne of type SysUser
console.log(
    buildUser(userOne)
)
// call buildUser function with wrongUser note out put errors
/* 
Argument of type '{ email: string; }' is not assignable to parameter of type 'SysUser'.
*/
console.log(
    buildUser(wrongUser)
)











