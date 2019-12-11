// basic enum
enum ActionPerson  {
    WakeUp,
    Sleep,
    Run,
    Eat
}

console.log(ActionPerson)

type RunningPerson = {
    action: ActionPerson,
    name: string
}

const newPerson: RunningPerson = {
    action: ActionPerson.Run,
    name: 'Action Jackson'
}

function whichPerson(person: RunningPerson) {
    console.log(person)
    if(person.action === 2) {
        console.log("Hi action Jackson")
    }
}

whichPerson(newPerson);