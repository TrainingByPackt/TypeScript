"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// step 5
var UserClass = /** @class */ (function () {
    function UserClass(user) {
        this.user = user;
    }
    UserClass.prototype.getUser = function () {
        return this.user;
    };
    UserClass.prototype.login = function (user, password) {
        // set props user object
        return password === 'password123' ? this.user = __assign({}, user, { loginAt: new Date().getTime(), token: '12345678' }) : __assign({}, user);
    };
    return UserClass;
}());
// step 6
var newUser = {
    email: "home@home.com"
};
// step 7
var newUserClass = new UserClass(newUser);
console.log(newUserClass.login(newUser, "password123"));
//console.log(
//   newUserClass.login(newUser, "12345")
//)
console.log(newUserClass.getUser());
