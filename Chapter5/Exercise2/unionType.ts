/*
    UnionType and Type Guards
**/

// basic union type
type yesNo  = string | boolean;

// basic usage of  a union type and type guard
function go(status: yesNo): void {
    // type guard checks if status is boolean
    // if boolean run below if logic
    if( typeof status === "boolean") {
        if(status) {
            console.log("lets go !!!");
        } else {
            console.log("Stop !!!");
        }
    }
    // type guard checks if status is string
    // if string run below if logic
    if(typeof status === "string") {
        if(status === "yes") {
            console.log("lets go !!!");
        } else {
            console.log("stop !!!");
        }
    }
}

// example of usage
go(false);
go("yes");

// union type object
// create a person type
type Person = {
    height: number;
    name: string;
    weight: number;
    sex: string;
};
// create a robot
type Robot = {
    height: number,
    serial: string;
    weight: number;
};

// thing is a union type of person and robot and can be declared as
// type thing = person | robot;
function amIHuman(thing: Person | Robot):void {
    console.log(`My Height is  ${thing.height}`);
    console.log(`My Weight is  ${thing.weight}`);

    // type guard
    if("serial" in thing) {
        console.log(`My Serial Number is ${thing.serial}`);
        console.log(`I am a robot I now Rule !!!`);
    }

    // type guard
    if("sex" in thing) {
        console.log(`My Sex is ${thing.sex}`);
        console.log(`I am the last Human`);
    }
}


// declare a person
const rayon: Person = {
    height: 6.3,
    weight:  209,
    name: "Rayon",
    sex: "Male"
};
// declare a robot
const fives: Robot = {
    height: 6.10,
    serial: "T8000",
    weight: 20000
};
// call the function with a person and robot
amIHuman(rayon);

amIHuman(fives);


// activity
// create a ork class
class Ork {
    fight():void { console.log("lets get  scrapping"); }
    battleCry():void { console.log("war war !!!!!"); }
}
// create a human class
class Human {
    fight():void { console.log("for the empire"); }
    callOfBattle():void { console.log("in the name of gray skull !!!"); }
}

// declare a union type of Ork and Human
type warFighter = Ork | Human;

// create an instance of Ork and Human
const fighter1: Ork = new Ork();
const fighter2: Human = new Human();

function letsStartAFight(fighter: warFighter):void {
    // call method common to Ork and Human
    fighter.fight();
    // instanceof type guard
    // if class instance Ork call unique method
    if(fighter instanceof Ork) {
        fighter.battleCry();
    }
    // instanceof type guard
    // if class instance human call unique method
    if(fighter instanceof Human) {
        fighter.callOfBattle();
    }
}


// call letsStartAFight function with Ork and Human instance
letsStartAFight(fighter1);
letsStartAFight(fighter2);


// type Predicates and discriminated Unions
//  create two type of type interface
interface ICar {
    name: string;
}

interface ITruck {
    modelNumber: number;
}


// function checks type returns boolean;
function isCar(motor: ICar | ITruck): motor is ICar {
    return typeof motor.modelNumber === "string";
}

const raptor: ICar | ITruck = {
    modelNumber: 7
};

if (isCar(raptor)) {
    // i Predicate
    console.log("this is a truck");
} else {
    console.log("this is a car");
}


// discriminated Unions
// create the interfaces
interface IDecepticons {
    type: "Decepticon";
    flyingSpeed: number;
}
interface IAutobot {
    type: "Autobot";
    drivingSpeed: number;
}
interface IJonneyFive {
    type: "JonneyFive";
    rollSpeed: number;
}

// create a union type of robots
type Robots = IDecepticons | IAutobot | IJonneyFive;
function whichBot(bot: Robots) {
    switch(bot.type) {
        case "Autobot":
            console.log("roll out");
            break;
        case "Decepticon":
            console.log("destroy");
            break;
        case "JonneyFive":
            console.log("five alive");
            break;
        default:
            console.log("Unknown Bot");
    }
}

const fiveAlive: IJonneyFive = {
    type: 'JonneyFive',
    rollSpeed: 200
}

whichBot(fiveAlive);





