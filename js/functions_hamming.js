let wrongBits = []

function isPowerOfTwo(number) {
    return Math.log2(number) % 1 === 0;
}

function getNumberOfOnes(index, array) {
    console.log(`index = ${index}`);
    step = index + 1
    console.log(`step = ${step}`);
    valuesToCheck = step
    valuesToSkip = step
    numberOfOnes = 0

    let skip = false

    for (let i = index; i < array.length; i++) {
        if (valuesToSkip == 0) {
            skip = false
        }

        if (skip) {
            valuesToCheck = step
            valuesToSkip--
            continue
        }

        if (!isPowerOfTwo(i + 1) || i == index) {
            if (array[i] == 1) {
                numberOfOnes++
            }
            console.log(`value for ${i + 1} = ${array[i]}`)
            valuesToCheck--
        }

        if (valuesToCheck == 0) {
            skip = true
            valuesToSkip = step
        }
    }

    if (numberOfOnes % 2 == 1) {
        wrongBits.push(step)
    }
    console.log(`${numberOfOnes}`);
}

function findWrongBit(array) {
    if (array.length) {
        return array.reduce((acc, val) => {
            return acc + val
        })
    } else {
        return 'Mesajul este corect'
    }
}

function correctMessage(wrongBit, array) {
    msj = ''

    if (typeof (wrongBit) === 'number') {
        array[wrongBit - 1] = array[wrongBit - 1] ? '0' : '1'
        msj += `Mesajul a fost corectat!\nBitul gresit este ${wrongBit}\nMesajul corect este: `
    } else {
        msj += 'Mesajul initial a fost transmis fara eroare si este: '
    }

    return msj + array.join('')
}

function initialMessage(array) {
    return 'Mesajul initial este: ' + array.filter((value, index) => {
        return !isPowerOfTwo(index + 1)
    }).join('')
}

