/* eslint-disable no-mixed-spaces-and-tabs */
"use strict"

// comment out to test access modifier version
class UserOne {
    email: string = "";
    createDate: number = 0;
    lastLogin: number = 0;
    token: string = ""

    setToken(token: string): void {
    	// set user token
    	this.token = token;
    }
    resetPassword(password: string):string {
    	// return string of new password
    	return password;
    }
}
// un comment the below to test access modifiers 
// class UserOne {
//     email: string = "";
//     createDate: number = 0;
//     lastLogin: number = 0;
//     private token: string = ""

//     setToken(token: string): void {
//         // set user token
//         this.token = token;
//     }
//     resetPassword(password: string):string {
//         // return string of new password
//         return password;
// }}



class AdminUser extends UserOne {
    // pages admin has access to
    adminPages: string [] = ["admin", "settings"];

    // method that allows the admin to reset other users
    resetUserPassword(email: string):string {
    	// return default user password
    	return "password123";
    }


}

// create a instance of our child class
const adminUser: AdminUser = new AdminUser() 



// create a string to hold our props
let propString = ''

// loop through your props and appends prop names to propString
for(let u in adminUser) {
	propString += u + ','
}
// console out the results
console.log(propString)


class SuperAdmin extends AdminUser {
    superPages: string[] = ["super", "ultimate"]
    readonly myHash: string

    constructor() {
    	super()
    	this.myHash = '1234567'
    }

    createAdminUser(adminUser: AdminUser ): AdminUser {
    	return adminUser
    }
    resetPassword(password: string): string {
    	// add hash to password
    	return password + this.myHash; 
    }
}

// instance of SuperAdmin
const superAdmin = new SuperAdmin()

// instance of AdminUser
const newAdmin = new AdminUser()

console.log(
	superAdmin.resetPassword('iampassword'),
)

console.log(
	newAdmin.resetPassword('iampassword')
)


// adminUserTwo
class AdminUserTwo extends UserOne {
	// pages admin has access to
	constructor(email: string) {
		super()
		this.email = email;
	}
      
      adminPages: string [] = ["admin", "settings"];
  
      resetUserPassword():string {
      	// return default user password
      	return "password123";
      }
  
}

const adminUserTwo = new AdminUserTwo('home@home.com');


