// To create/declare variables, now we use "let"
let var1 = "Hello"
// To declare/create constants, we use "const" keyword
const constant1 = 3.14

// Data types in java script
let number = 4.4;        // type: number
let string = "hello";        // type: string
let bool = true;     // type: boolean
let nothing = null;      // type: object
let undefine = undefined;        // type: undefined
let symbols = Symbol();       // type: symbol


// Datatype coversion
let num = "42";
let convertedNum = Number(num)      // Most and generally used way for datatype conversion
// Another way to do it:
let convertedNum1 = +num
// Another way to do it:
let convertedNum2 = parseInt(num)

// console.log(convertedNum)
// console.log(convertedNum1)
// console.log(convertedNum2)
// console.log(typeof convertedNum)
// console.log(typeof convertedNum1)
// console.log(typeof convertedNum2)

// But if we doing type conversion like this:
let num1 = "42a"
let convertedNum3 = Number(num1)
// console.log(convertedNum3)      // It is returning "Nan": "Not a Number"
// console.log(typeof convertedNum3)       // Output: number; because we converted its type to number.

// Operators
let a = 10;
let b = 10;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = 2 ** 3;

// Comparison
let x = 5;
let y = 10;

// console.log(x == y);
// console.log(x != y);
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x >= y);


        // Most Useful Libraries
// Math Library(intrinsic: In-built)

// console.log(Math.max(1,8,6,9,7))
// console.log(Math.min(1,8,6,9,7))
// console.log(Math.random())  // returns random number between 0 and 1
// console.log(Math.floor(1.5,24,5.8787,8))

// Crypto, http, dateTime are other most Important Libraries

// Strings
let greet = "Hello World!";
// console.log(greet.length);
// console.log(greet.toUpperCase());
// console.log(greet.toLowerCase());
// console.log(greet.indexOf("World"));
// console.log(greet.slice(0,8));

// Template Literals: using (``) to add variable anywhere at strings.
let named = "Manish"
// console.log(`Hello ${named} from chaicode.`)


// Array
let chai = ["Masala Chai","Ginger Chai","Ginger Tea","Lemon Tea"];
// console.log(chai[2]);
// console.log(`Total chai types: ${chai.length}`)
chai.push("Herbal Tea") // Inserts value at the end of array
chai.shift()    // removes the first element of array
// console.log(chai.indexOf("Herbal Tea"))

let index = 1;
let chai1 = ["Masala Chai","Ginger Chai","Garlic Tea","Lemon Tea"];
if (index !== -1){
        // console.log(chai1.splice(index, 1))
        // console.log(chai1.splice(index, 2))
}

// Loops in Array
let chai2 = ["Masala Chai","Ginger Chai","Garlic Tea","Lemon Tea"];
// chai2.forEach((value, index) => console.log(`Value at index ${index+1} is: ${value}`))

let moreChai = ["Oolong Tea","White Tea"]
let allChai = chai2.concat(moreChai)
let allChais = [...chai2, "Natural Tea", ...moreChai]
// console.log(allChai)
// console.log(allChais)


// Object Literals
let chaiReceipe = {
        "name":"Masala Chai",
        "otherName":"Mast Chai",
        "ingredients": {
                'tea-leaves':"Assam",
                "milk":"Full-cream milk",
                "sugar": "Brown",
                "spices":["Daalchini","Ginger"],
        },
        "instructions": "Boil water, add Tea leaves, milk, sugar and spices"
}
// console.log(chaiReceipe.ingredients["tea-leaves"])
// console.log(chaiReceipe.ingredients.spices[1]);

// even if any property is available twice, then the latest one will we used:
let updatedReceipe ={
        ...chaiReceipe,
        "instructions":"Boil water, add Tea leaves, milk, sugar and spices with lots of more love"
}
// console.log(updatedReceipe.instructions)

// Object and Array Destructuring
let {name, instructions} = chaiReceipe;        // Breaking down object in form of an object is called object de-structuring. And now the "name" and "instructions" properties of the object became independent variables and the name in both places should be same because of mapping as object.
let [ingredients, otherName] = chai2;        // Breaking down array in form of an array is called array de-structuring. And we can assign any name to the variable and they will take the value as per indexes or sequence.
// console.log(name)
// console.log(otherName)


// Conditions
// Applying discounts to items costing more than 1000
let amount = 1000;
function discount (amount){
        // converting to number
        amount = Number(amount)
        if (amount > 1000){
                return amount - (10/100)*amount
        }
        else(amount = amount)
}
// We can also write this code in this format:
function discountCalculator (amount){
        // converting to number
        amount = Number(amount)
        if (amount > 1000){
                return amount - (10/100)*amount
        }
        return amount; // And this will work because when any return is called on any function, then the code after that will not be executed. Example:
        // console.log("Hello")         // Here we can see it's showing error.
}

// Making an Traffic Light system using another control flow statement: switch
function trafficSystem (light){
        light = light.toLowerCase();
        switch(light){
                case "red":
                        console.log("Stop");
                        break;
                case "yellow":
                        console.log("Slow down");
                        // break;
                        // OR
                        return;
                case "green":
                        console.log("Go");
                        return;
        }
}

// Making an Function to check either that object is truthy or falsy
function truthyFalsy (value){
        if (value){
                return "Truthy";
        }
        else{
                return "Falsy";
        }
}

// console.log(truthyFalsy(1))
// console.log(truthyFalsy(0))
// console.log(truthyFalsy("abc"))
// console.log(truthyFalsy([]))
// console.log(truthyFalsy([1,2,3,4,5]))
// console.log(truthyFalsy( ))
// console.log(truthyFalsy(""))


// Using "and" and "or"
function admin (){
        if (username === "admin" && (userPassword === 54782 || userIp === 547862)){
                return "Logged In Successsfult"
        }
        else{
                return "Invalid Credentials"
        }
}



// Iterations
let salesData = [
        {"product": "Laptop", "price":10000},
        {"product":"Smartphone", "price": 5000},
        {"product":"Headphones","price":1500},
        {"product":"Keyboard","price":800},
]
// Getting the total price of all products
let totalPrice = 0;
for (let i = 0; i < salesData.length; i++){
        totalPrice += salesData[i].price
}
// console.log(totalPrice)

// Using "reduce" to do the same thing
let initialValue = 0;           // It will be inly once: in starting of reduce loop. We can write its hardcode value(direct value istead of variables)
let totalPrices = salesData.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue)
// console.log(totalPrices)


// Using filter to filter items on the basis of available stock
let Inventory = [
        {"name":"WidgetA","stock":30},
        {"name":"WidgetB","stock":120},
        {"name":"WidgetC","stock":45},
        {"name":"WidgetD","stock":70},
]
// Filtering Low stock Items: Items having less than 50 Stocks
let lowStock = Inventory.filter((inventories) => inventories.stock < 50)
// console.log(lowStock)
// Understanded: Filter always return an array but of any number of element

// Using reduce to fincd highest number of objects of an array.
let userActivity = [
        {"user":"Alice","activityCount":95},
        {"user":"bob","activityCount":95},
        {"user":"Charlie","activityCount":94}
]
let mostActiveUser = userActivity.reduce((mostActive,user) => mostActive.activityCount < user.activityCount ? mostActive = user : mostActive=mostActive)
console.log(mostActiveUser)