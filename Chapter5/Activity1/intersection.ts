
// create employee type
type Employee = {
    _id: number,
    FirstName: string,
    LastName: string,
    salary?: number
};
// create supervisor type
type Supervisor = {
    /* supervisors may have employees so added an array of type Employee
       reuse of the Employee type shows flexibility of the typing system
    **/
    employees: Employee[],
    department: string
};
// create manager type
type Manager = {
    location: string,
    /* reuse of the Supervisor type **/
    supervisor: Supervisor[]
};
// declare floorSupervisor intersecting Employee and Supervisor
const floorSupervisor: Employee & Supervisor  = {
    _id:1,
    FirstName: 'Mike',
    LastName: 'Wright',
    department: 'Shipping',
    employees: [
        {_id: 2, FirstName: 'Dan', LastName: 'theMan'}
    ]
};
// declare storeManager intersecting Employee and Manager
const storeManager: Employee & Manager = {
    _id:1,
    FirstName: 'Mark',
    LastName: 'Wills',
    location: '100 Willson Street',
    supervisor: [
        floorSupervisor
    ]
};
// console out the results
console.log(floorSupervisor);
console.log(storeManager);