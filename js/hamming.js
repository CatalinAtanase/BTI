let msj = '011100101010'
list = []

for (let char of msj) {
    list.push(char)
}

list.forEach((value, index) => {
    if (isPowerOfTwo(index + 1)) {
        let power = Math.log2(index + 1) + 1
        getNumberOfOnes(index, list)
    }
})

wrongBit = findWrongBit(wrongBits)

console.log(`${correctMessage(wrongBit, list)}`);

console.log(`${initialMessage(list)}`);







