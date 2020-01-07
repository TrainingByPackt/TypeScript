// step 1
// basic star fighter shape | rules
interface BasicFighter {
    wings: number
    engines: number
    serial: string,
    type: string,
    payLoad?:number,
    guns?: number
}

// step 2 
// factory rules | shape
interface FactoryRules {
    fighter: BasicFighter
    makeFighter(): BasicFighter
    addPayLoad(): void
    addGuns(): void
}

// set 3
// create start fighter
class StarFighter implements FactoryRules {
    fighter: BasicFighter
    constructor(fighter: BasicFighter){
        this.fighter = fighter;
    }
    addPayLoad() {
        this.fighter = {
            ...this.fighter,
            payLoad: 5
        }
    }
    addGuns() {
        this.fighter = {
            ...this.fighter,
            guns: 10
        }
    }
    makeFighter():BasicFighter {
        if (this.fighter.type === 'fighter') this.addGuns()
        if (this.fighter.type === 'bomber') this.addPayLoad()
        return this.fighter
    }
}
// step 4
// instance a fighter
const starOne: BasicFighter = {
    wings: 6,
    engines:4,
    serial: 'a12345',
    type: 'bomber' 
}
// step 4
// instance a fighter
const starTwo: BasicFighter = {
    wings:4,
    engines:2,
    serial: 'awing1',
    type: 'fighter'
}
// step 5
// create a bomber
const bomberFactory = new StarFighter(starOne)
// create a fighter
const fighterFactory = new StarFighter(starTwo)
// step 6
console.log(
    bomberFactory.makeFighter()
)
console.log(
    fighterFactory.makeFighter()
)

// step 7 
// merge interface
interface BasicFighter {
    lightSpeed?: boolean
}

// step 8
// instance a fighter
const starThree: BasicFighter = {
    wings:4,
    engines:2,
    serial: 'awing1',
    type: 'fighter',
    lightSpeed: true
}
// step 9
// create fighter 
const lightFighterFactory = new StarFighter(starThree)

//step 10
// console out new fighter
console.log(
    lightFighterFactory.makeFighter()
)






