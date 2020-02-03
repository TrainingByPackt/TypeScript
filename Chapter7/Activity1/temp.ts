interface User {
    email: string
    loginAt: number
    token: string
}


interface UserClass {
    user: User
    getUser(): User
    login(user: User, password: string):User
}

class User implements UserClass {
    
    user:User

    getUser(): User {
        return this.user
    }

    login(user:  User): User {
        return this.user
    }
}


const user: UserClass = new User()