/* eslint-disable no-mixed-spaces-and-tabs */
"use strict";

// step 1
interface UserObj {
    email: string
    loginAt?: number
    token?: string
}

// step 2
interface UserClass {
    user: UserObj
    // step 3
    getUser(): UserObj
    // step 4
    login(user: UserObj, password: string):UserObj
}


// step 5
class UserClass implements UserClass {
    
    user: UserObj

    constructor(user: UserObj){
    	this.user = user;
    }

    getUser(): UserObj {
    	return this.user;
    }

    login(user:  UserObj, password: string): UserObj {
    	return this.user = {
    		...user,
    		loginAt: new Date().getTime(),
    		token: "123456"
    	};
    }
}

// step 6
const newUser: UserObj = {
	email: "home@home.com",
}

// step 7
const newUserClass = new UserClass(newUser)


console.log(
	newUserClass.login(newUser, "password123")
)

//console.log(
//   newUserClass.login(newUser, "12345")
//)

console.log(
	newUserClass.getUser()
)
  