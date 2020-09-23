"use strict";

interface UserInterFace {
    email: string,
    token: string,
    resetPassword: ()=> boolean   
}


const User: UserInterFace = {
    email: 'home@home.com',
    token: '12345678',
    resetPassword(): boolean{
        return true
    }
}