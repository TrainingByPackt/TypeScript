
// basic interface
interface BasicBot {
    legs: number
    powerSwitch: boolean
    turnOn(): boolean
    turnOff(): boolean
}

/** 
 * Class 'SecurityBot' incorrectly implements interface 'BasicBot'.
  Type 'SecurityBot' is missing the following properties from type
  'BasicBot': legs, powerSwitch, turnOn, turnOff
 * 
*/

// class SecurityBot implements BasicBot {}

// correct implementation 
class SecurityBot implements BasicBot {
    legs = 4;
    powerSwitch = false;

    turnOn() {
        return this.powerSwitch = true;
    }

    turnOff() {
        return this.powerSwitch = false;
    }
}

// new shopping bot with more features
class ShoppingBot implements BasicBot {
    legs = 4;
    powerSwitch = true;

    turnOff(){return this.powerSwitch = false}
    turnOn(){return this.powerSwitch = true}

    // additional method
    shop(listOfItems: string[]): string[] {
        return listOfItems;
    }

}


// instance security bot
const secBot = new SecurityBot
console.log(secBot)

// instance shopping bot
const shopBot = new ShoppingBot
shopBot.shop(
    ['bags', 'apples']
)
console.log(shopBot)
