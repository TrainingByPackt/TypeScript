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


// step 3  Extend Super Class User
// override constructor
// add new logout method
class Super extends User {
   constructor(userName: string){ 
       if(userName.length > 0) {
        super(userName)
       }
        
    }
   logOut(){
        this.userName = ''
        this.token = ''
   }
}

// step 4 instance child class Super
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

// step 5
// user array
const myUsers = ['DarkVader','Batman','BlackPanther']
// new parent class service
class Service {

    private users: string []
    protected userCount: number = 0
    readonly userLimit: number = 100

    constructor(){
        this.users = []
    }

    get(): string[] {
        return this.users
    }

    set(userName: string):void {
        this.users.push(userName)
    }
    
    getCount(): number {
        return this.userCount = this.users.length? this.users.length : 0
    }

    private resetUsers(){
        this.users = []
    }

    loadUsers(users: string[]) {
        this.resetUsers()
        this.users = [
            ...users
        ]
    }

}

// step 6
const basicService = new Service()
console.log(basicService)
basicService.loadUsers(myUsers)
console.log(basicService)
console.log(basicService.getCount())
console.log(basicService.userLimit)


class AddedService extends Service {
    getUserByIndex(index: number): string {
        return this.get().length > 0 ? this.get()[index]: 'no users loaded'
    }
    AddUser(userName: string){
        if (userName && userName.length > 0) {
            this.set(userName)
        }
    }
}

const addedService = new AddedService()

console.log(addedService)
console.log(addedService.getUserByIndex(0))
addedService.loadUsers(myUsers)
console.log(addedService.get(), addedService.userLimit)
addedService.AddUser('DeathPool')
console.log(addedService)



