"use strict"

class UserOne {
    email: string = "";
    createDate: number = 0;
    lastLogin: number = 0;
    token: string = ""

    public setToken(token: string): void {
        // set user token
        this.token = token;
    }
    public resetPassword(password: string):string {
        // return string of new password
        return password;
    }
}

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


class SuperAdmin extends AdminUser {
    superPages: string[] = ["super", "ultimate"]

    createAdminUser(adminUser: AdminUser ): AdminUser {
        return adminUser
    }
}






// create a string to hold our props
let propString = ''

// loop through your props and appends prop names to propString
for(let u in adminUser) {
    propString += u + ','
}
// console out the results
console.log(propString)
