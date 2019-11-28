type Employee = {
    _id: number,
    FirstName: string,
    LastName: string,
    salary?: number
}

type Supervisor = {
    employees: Employee[],
    department: string
}


type Manager = {
    location: string,
    supervisor: Supervisor[]
}


const floorSupervisor: Employee & Supervisor  = {
    _id:1,
    FirstName: 'Mike',
    LastName: 'Wright',
    department: 'Shipping',
    employees: [
        {_id: 2, FirstName: 'Dan', LastName: 'theMan'}
    ]
}

const storeManager: Employee & Manager = {
    _id:1,
    FirstName: 'Mark',
    LastName: 'Wills',
    location: '100 Willson Street',
    supervisor: [
        floorSupervisor
    ]
}


console.log(floorSupervisor)
console.log(storeManager)