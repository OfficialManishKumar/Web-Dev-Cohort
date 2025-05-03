// Loop/Iterator
// "for" loop
// for Loop Syntax: (initialization; condition; increment/decrement)
for (let i = 0; i < 5; i++){
    console.log(i)
}

// Making an Loop tha will return sum of all items of an array.
let array1 = [1,2,2,3,48,87,874,845,45,46,4989]
function sumfactory (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}

sumfactory(array1)
