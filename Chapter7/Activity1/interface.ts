// step 1
// interface 
interface Remove {
    index: number,
    word: string
}

// step 2
// interface 
interface WordGenRules{
    word: string[]
    Word():string
    Front(front:string):void
    Back(back:string):void
    Remove(index: Remove): string    
}

// step 3
// class 
class WordGen implements WordGenRules{
    // global string array 
    word: string[]
    constructor() {
        // init string array
        this.word = []
    }

    Word():string{
        // join array
        return this.word.join(',')
    }
    Front(front:string){
        // add word to front pf string array
        this.word.unshift(front)
    }
    Back(back:string){
        // add string to back of array
        this.word.push(back)
    }
    
    Remove(rIndex: Remove) {
        // remove string my index match word
        if (this.word[rIndex.index].toLowerCase() === rIndex.word.toLowerCase()) {
            this.word.splice(rIndex.index, 1)    
        return `${rIndex.word} Was Removed !!!`
        } else {
            return `${rIndex.word} Wrong Word !!!`
        }
        
    }
}

// step 4
const newWordGen = new WordGen();

newWordGen.Word() //?
// step 5
newWordGen.Front('Rayon')
newWordGen.Word() //?
// step 6
newWordGen.Back('Hunte')
newWordGen.Word() //?
// step 7
newWordGen.Remove({index:0, word: ''}) //?
newWordGen.Word() //?