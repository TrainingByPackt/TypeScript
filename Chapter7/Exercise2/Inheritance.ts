// step 1 super class
class User {
    userName: string
    token: string = ''

    constructor(userName: string) {
        this.userName = userName
    }

    set (token: string) {
        this.token = token
    }
    get () {
        return {
            userName: this.userName,
            token: this.token
        }
    }
}

// step 2 instance super class set token 
// return user object 
const user = new User('Mark')
user.set('12345')
console.log(
    user.get()
)


// step 3  Super Interstates from User
// use super method to call parent constructor method
// add new logout method
class Super extends User {
   constructor(userName: string){ super(userName)}
   logOut(){
        this.userName = ''
        this.token = ''
   }
}

// step 4 instance child class Super
// set toke
// console out the return from superUser get 
const superUser = new Super('Rayon')
// set token
superUser.set('6789')
//console out superUser get method return
console.log(
    superUser.get()
)
// logout 
superUser.logOut()
// console out superUser
console.log(superUser)