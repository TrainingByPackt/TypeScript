/* eslint-disable no-mixed-spaces-and-tabs */
"use strict";

// step 1
interface UserObj {
    email: string
    loginAt?: number
    token?: string
    password?: string
}

// step 2
interface UserClass {
    user: UserObj
    // step 3
    getUser(): UserObj
    // step 4
    login(user: UserObj, password: string):UserObj
}


// step 3
class UserClass implements UserClass {
    
    user: UserObj

    constructor(){
    	this.user = {
    		email: "",
    	};
    }

    getUser(): UserObj {
    	return this.user;
    }

    login(user:  UserObj, password: string): UserObj {
    	return this.user = {
    		...user,
    		loginAt: new Date().getTime(),
    		token: "123456",
    		password: password
    	};
    }
}

// step 4
const newUser: UserObj = {
	email: "home@home.com",
	loginAt: new Date().getTime(), 
	token: "123456" 
};

// step 7
const newUserClass = new UserClass();


console.log(
	newUserClass.login(newUser, "password123")
);

console.log(
	newUserClass.getUser()
);
  