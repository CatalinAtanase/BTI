function isPowerOfTwo(number) {
    return Math.log2(number) % 1 === 0;
}

function getNumberOfOnes(index, array) {
    console.log(`index = ${index}`);
    console.log(`step = ${index}`);
    valuesToCheck = index
    valuesToSkip = index
    numberOfOnes = 0
    
    let skip = false

    for (let i = index; i <= array.length; i++) {
        if(valuesToSkip == 0) {
            skip = false
        }

        if(skip) {
            valuesToCheck = index
            valuesToSkip--
            continue
        }

        if(!isPowerOfTwo(i) || i == index) {
            numberOfOnes++
            console.log(`value = ${i}`)
            valuesToCheck--
        }

        if(valuesToCheck == 0) {
            skip = true
            valuesToSkip = index
        }
    }

    // console.log(`${numberOfOnes}`);
    
}