"use strict";

// step 1
type User = {
    email: string,
    userId: number
}

// step 2
interface SuperAddMe {
    (user: User): User[]
};

// step 3
const allUsers: User[] = [
	{ email: "home@home.com", userId: 1 },
	{ email: "out@side.com", userId: 2 }
];

// step 4
let addUser: SuperAddMe;
addUser = function (user: User): User[] {
	return [
		...allUsers,
		user
	];
};

// step 5
console.log(
	addUser(
		{ email: "slow@mo", userId: allUsers.length }
	)
);