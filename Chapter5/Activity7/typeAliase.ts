// alias of type  object
type block = { width: number, height: number}

// used generics to add a name to your block
type namedBlock<T> = {name: string, block: T}

// create a clay bock
const clayBlock: namedBlock<block> = {
    name: 'clay brick',
    block: {width: 200, height: 200}
}

// create glass block
const glassBlock: namedBlock<block> = {
    name: 'glass brick',
    block: {width: 200, height: 200}
}

// create a block array
const blockArray: namedBlock<block>[] = [
    clayBlock,
    glassBlock
]

console.log(blockArray)


