/*
    UnionType and Type Guards
**/
// basic usage of  a union type and type guard
function go(status) {
    // type guard checks if status is boolean
    // if boolean run below if logic
    if (typeof status === "boolean") {
        if (status) {
            console.log("lets go !!!");
        }
        else {
            console.log("Stop !!!");
        }
    }
    // type guard checks if status is string
    // if string run below if logic
    if (typeof status === "string") {
        if (status === "yes") {
            console.log("lets go !!!");
        }
        else {
            console.log("stop !!!");
        }
    }
}
// example of usage
go(false);
go("yes");
// thing is a union type of person and robot and can be declared as
// type thing = person | robot;
function amIHuman(thing) {
    console.log("My Height is  " + thing.height);
    console.log("My Weight is  " + thing.weight);
    // type guard
    if ("serial" in thing) {
        console.log("My Serial Number is " + thing.serial);
        console.log("I am a robot I now Rule !!!");
    }
    // type guard
    if ("sex" in thing) {
        console.log("My Sex is " + thing.sex);
        console.log("I am the last Human");
    }
}
// declare a person
var rayon = {
    height: 6.3,
    weight: 209,
    name: "Rayon",
    sex: "Male"
};
// declare a robot
var fives = {
    height: 6.10,
    serial: "T8000",
    weight: 20000
};
// call the function with a person and robot
amIHuman(rayon);
amIHuman(fives);
// create a ork class
var Ork = /** @class */ (function () {
    function Ork() {
    }
    Ork.prototype.fight = function () { console.log("lets get  scrapping"); };
    Ork.prototype.battleCry = function () { console.log("war war !!!!!"); };
    return Ork;
}());
// create a human class
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.fight = function () { console.log("for the empire"); };
    Human.prototype.callOfBattle = function () { console.log("in the name of gray skull !!!"); };
    return Human;
}());
// create an instance of Ork and Human
var fighter1 = new Ork();
var fighter2 = new Human();
function letsStartAFight(fighter) {
    // call method common to Ork and Human
    fighter.fight();
    // instanceof type guard
    // if class instance Ork call unique method
    if (fighter instanceof Ork) {
        fighter.battleCry();
    }
    // instanceof type guard
    // if class instance human call unique method
    if (fighter instanceof Human) {
        fighter.callOfBattle();
    }
}
// call letsStartAFight function with Ork and Human instance
letsStartAFight(fighter1);
letsStartAFight(fighter2);
