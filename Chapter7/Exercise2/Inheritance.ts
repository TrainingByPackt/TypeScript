type user = {
    userName: string
    token: string
    createdAt: number
}

class User {
    
    private userName: string; 
    private token: string = ''
    readonly timeStamp: number = new Date().getTime()

    constructor(userName: string, token: string) {
        this.userName =  userName
        this.token = token
    }

    logOut():void {
        this.userName = ''
        this.token = ''
    }

    getUser(): user {
        return {
            userName: this.userName,
            token: this.token,
            createdAt: this.timeStamp
        }
    }

    protected renewToken (newToken: string) {
        this.token = newToken
    }
}

const user = new User('rayon', '12345678') 

console.log(user)
console.log(user.getUser())
