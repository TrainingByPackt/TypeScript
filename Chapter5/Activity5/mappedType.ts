// create a user model
type UserModel = {
    _id: number;
    create: Date;
    email: string;
    first: string;
    last: string;
    password: string;
    token: string;
} 

// array of users
const user: UserModel[] = [
    {
        _id:1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    },
    {
        _id:1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    },
    {
        _id:1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    }
]


const newUsers = user
.map(
    (user: UserModel): Readonly<UserModel> => user
)
.map(
    (user: UserModel): Pick<UserModel, 'email'| 'first'| 'last'> => {
        return {
           email: user.email,
           first: user.first,
           last: user.last
        }

    }
)
console.log(newUsers)