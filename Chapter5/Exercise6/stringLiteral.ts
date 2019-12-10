
// create a string literal union type 
type gateWay = "open" | "close"

// create a gate class
class GateControl {

    // operate the front gate
    frontGate(gate: gateWay): string {
       // type guard using sting literal
        if(gate === "open") { 
           console.log("front gate is open !!!")
           return "true";
       } else {
           console.log("front gate is closed")
           return "false";
       }
    }
}
// instance of Gate class
const gateControl = new GateControl;

// user returning string literal 
if (gateControl.frontGate("open") === 'true') {
    console.log("drive your car in !!!")
} else {
    console.log("call the front desk")
}

