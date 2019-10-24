let wrongBits = []
let messages = []

function isPowerOfTwo(number) {
    return Math.log2(number) % 1 === 0;
}

function getNumberOfOnes(index, array) {
    step = index + 1
    valuesToCheck = step
    valuesToSkip = step
    numberOfOnes = 0
    nameOfVars = ''
    valueOfVars = ''

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

        if (nameOfVars != '') {
            nameOfVars += ' &#8853; '
            valueOfVars += ' &#8853; '
        }

        if (!isPowerOfTwo(i + 1) || i == index) {
            if (array[i] == 1) {
                numberOfOnes++
            }

            if (i == index) {
                nameOfVars += `c<sub>${i + 1}</sub>`
            } else {
                nameOfVars += `a<sub>${i + 1}</sub>`
            }

            valueOfVars += `${array[i]}`

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

    let msj = `<p> ${nameOfVars} = 0 => ${valueOfVars} = 0 (${numberOfOnes % 2 == 0 ? 'A' : 'F'}) </p>`

    messages.push(msj)
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
        array[wrongBit - 1] = array[wrongBit - 1] == 1 ? '0' : '1'
        return `<p>Mesajul a fost corectat! </p> <p> Bitul gresit este ${wrongBit}</p> <p>Mesajul corect este: ${array.join('')}</p>`
    } else {
        return `<p>Mesajul a fost transmis fara eroare si este: ${array.join('')} </p>`
    }
}

function initialMessage(array) {
    return 'Mesajul initial este: ' + array.filter((value, index) => {
        return !isPowerOfTwo(index + 1)
    }).join('')
}

function doDecode() {
    let msj = `${inputDecode.value}`
    let list = []

    decodeMessages.innerHTML = ''
    decodeResult.innerHTML = ''

    for (let char of msj) {
        list.push(char)
    }

    list.forEach((value, index) => {
        if (isPowerOfTwo(index + 1)) {
            let power = Math.log2(index + 1) + 1
            getNumberOfOnes(index, list)
        }
    })

    let wrongBit = findWrongBit(wrongBits)

    messages.forEach(message => {
        decodeMessages.innerHTML += `${message}`
    })

    decodeResult.innerHTML = `${correctMessage(wrongBit, list)} ${initialMessage(list)}`

    messages = []
    wrongBit = ''
    wrongBits = []
}


/* ****************************************************************
   ****************************************************************
   **************************************************************** 
                    Code
****************************************************************
****************************************************************
******************************************************************/


function getControlBitsNumber(msj) {
    let length = msj.length
    let numberOfBits = Math.floor(Math.log2(length)) + 2

    return numberOfBits
}

function completeList(array, controlBitsNumber) {
    let new_array = []
    let length = array.length + controlBitsNumber
    let elementNumber = 0

    for (let i = 0; i < length; i++) {
        if (isPowerOfTwo(i + 1)) {
            new_array[i] = ''
        } else {
            new_array[i] = array[elementNumber]
            elementNumber++
        }
    }

    if (new_array[new_array.length - 1] == '' || new_array[new_array.length - 1] == undefined) {
        new_array.pop()
    }

    return new_array
}

function findValuesOfC(index, array) {
    step = index + 1
    valuesToCheck = step
    valuesToSkip = step
    numberOfOnes = 0
    nameOfVars = ''
    valueOfVars = ''

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

        if (nameOfVars != '') {
            nameOfVars += ' &#8853; '
            valueOfVars += ' &#8853; '
        }

        if (!isPowerOfTwo(i + 1) || i == index) {
            if (array[i] == 1) {
                numberOfOnes++
            }

            console.log(`index = ${i+1}, value = ${array[i]}`);
            

            if (i == index) {
                nameOfVars += `c<sub>${i + 1}</sub>`
                valueOfVars += '___'
            } else {
                nameOfVars += `a<sub>${i + 1}</sub>`
                valueOfVars += `${array[i]}`
            }

            valuesToCheck--
        }

        if (valuesToCheck == 0) {
            skip = true
            valuesToSkip = step
        }
    }

    console.log(numberOfOnes);
    

    if (numberOfOnes % 2 == 1) {
        array[index] = 1   
    } else {
        array[index] = 0
    }

    let msj = `<p> ${nameOfVars} = 0  =>  ${valueOfVars} = 0  =>  c<sub>${index+1}</sub> = ${numberOfOnes % 2 == 0 ? '0' : '1'} </p>`

    messages.push(msj)
}

function getCodeResult(array) {
    return `Mesajul codificat este: ${array.join('')}`
}

function doCode() {
    let msj = `${inputCode.value}`
    let list = []

    codeMessages.innerHTML = ''
    codeResult.innerHTML = ''

    for (let char of msj) {
        list.push(char)
    }

    controlBitsNumber = getControlBitsNumber(msj)

    list = completeList(list, controlBitsNumber)

    console.log(list);

    list.forEach((value, index) => {
        if(isPowerOfTwo(index + 1)) {
            findValuesOfC(index, list)
        }
    })

    messages.forEach(message => {
        codeMessages.innerHTML += `${message}`
    })

    codeResult.innerHTML = `${getCodeResult(list)}`

    messages = []
}



