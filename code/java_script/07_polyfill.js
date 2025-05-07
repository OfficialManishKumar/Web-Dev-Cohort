// when we actually try to use any in-built function or method like this:
let array1 = [1,2,3,4,5,6,7,8,9]
console.log(array1.length)
// then this "length" and other functions are actually coming from this array's parent. means all these methods and functions which we axis are actually stored in an Array named object, which storef all these functions and methods in form of key value pairs. And when we creates any array, then browser just makes an eep copy of that arrray and pastes them into our array which is stored in form of an object. And that's why we can axis those functions and methods using "." that we use to axis properties of any object. And all these functions and methods stored in parent array are collectively called "prototype". and this prototype is givn to us by "browsers"
// And In most of browsers, some of these functions or methods are not present but if we used other browser during writing code and that function or method is not present in the user browser or the user has not updated his browser, then error will be created and code will not work as required. So to solve this problem, we use polyfills which are just the conditions where we ask if that function or method is not present in user browser at that time, then we writes the actual machine code of that function or method that should written by browsers.

let array2 = [2,4,86,9,5]
let array3 = [2,4,86,9,5]
array2.map(function (value, index){console.log(`Item at index ${index} is: ${value}`)})   // This "map" function is provided by browser and to be prevented from the situation of its absence from user's browser. it's polyfill can be look like this:
// when we use "this", then it can vary and points towards different object as per the situation, similarly when we use "this" keyword, it points towards the assigned object.
// Signature = map
// Returns new array, iterate each element, applies user function to each element
if (!Array.prototype.mymap){
    Array.prototype.mymap = function(userfunc){
        const result = [];
        for (let i = 0; i < this.length; i++){   // here this is pointing towards the array in which this function will be used.
            const value = userfunc(this[i], i)
            result.push(value)
        }
        return result;
    }
}  // it will work only when "mymap" function is not available in user browser at that time as per the condition(not array prototype mymap)
let array4 = [4,8,9,12,32];
array4.mymap(function(value, index){console.log(`The Value multiplied by 4 at index "${index}" is: "${value*4}`)})
// We can also use it create custom default functons and we can use those functions like by-default functions

// Creating polyfill of filter method:
// Let's firstly see what it does:
let array5 = [7,8,5,2,4,9]
let array6 = array5.filter((value) => value % 2 == 0)  // Filter option only returns values for which the given condition is true.
console.log(array6)
// OR
let array7 = array5.filter(function (value){ return value %2 == 0})
console.log(array7)

// Signature = Filter
// returns values fulfilling the given condition
if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function (myFunc){
        let array = this;  // here this is pointing towards the array in which this function will be used.
        let finalOutput = [];
        for (let i = 0; i < array.length; i++){
            if (myFunc(array[i]) === true){
                finalOutput.push(array[i])
            }
            else{}
        }
        return finalOutput;
    }
}
let array8 = [7,8,5,2,4,9]
let array9 = array8.myfilter(function(value){return value %2 == 0})
console.log(array9)
// Here we can see that we successfully created a polyfill of "filter"
