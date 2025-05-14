// We had to axis items of array not with positive instead with negative indexing
let array1 = [1,2,3,4,5,6]
// If we try it now:
// console.log(array1[-1])      // then it will show "undefined"
// To do, I am gonna to use loop
0 -1
1 -2 
let j = array1.length
for (let i = 0; i < array1.length; i++){
    array1[-(i*2)]  = array1[j-1]
    j--
}
console.log(array1[-1])