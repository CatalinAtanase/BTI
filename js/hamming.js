let msj = '011100101010'
list = []

for (let letter of msj) {
    list.push(letter)
}

list.forEach((value, index) => {
    if(isPowerOfTwo(index+1)) {
        let power = Math.log2(index+1) + 1
        // console.log(`Power is ${power}`);
        // console.log(`Value is ${index+1}`);
        getNumberOfOnes(index+1, list) 
        
        // for (let i = index+1; i <= list.length; i++) {
        //     console.log(i);
        // }
    }
})


