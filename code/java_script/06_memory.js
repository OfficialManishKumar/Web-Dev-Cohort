let hello = {
    name: "Manish Kumar Saw",
    age: 21,
    isStudent: true,
    hobbies : ["Coding","Playing"],
    details: function (){
        return "Hello"
    },
    address : {
        city: "Barhi",
        state: "Jharkhand",
        country: "India"
    }
}
// To axis object items, we use "."
console.log(hello.name)

// Memory
let str1 = "Manish";
let str2 = str1

str2 = "Saw"
console.log(str1)
console.log(str2)
// here we can see that even after changing 2nd string, nothing changed with 1st string. It means that 2nd string is copy of 1st and their changes are independent. And this is called Stack Memory.
// But if we do the same thing with an object data type, then:
let obj1 = {
    name: "Manish",
    age: 21
}
let obj2 = obj1
obj2.name = "Piyush Sir"
console.log(obj1.name)
console.log(obj2.name)
// Here we can see that even after changing 2nd object, 1st object also changed. It means that 2nd object is not copy of 1st object, it is just a reference of 1st object. and this is called Heap Memory.

// And when the code runs, he finds data only in stack memory, so to find the data at memory/heap memory, we provides a pointer of the data at heap memory to the stack memory. And when the code runner runs i he goes on heap then he will find or if he gone in stack, then he will get that data reference.
// Tradeoff(Disadvantage) and advantages of both memory types are:
// - In stack memory, we are not able to grow it or expand it or include more things on it. But because it is directly giving the data instead of pointer of heap memory, it's Reading is fast.
// - In Heap memory, we can add or include more content or data whenever we want. but because the code runner firstly needs to find its pinter in stack memory and then visit there and get data, it's reading time is more.

// Garbage collector: We just knew that data in memory(heap memory) is finded using a pointer at stack memory. So let we wanna to delete that dat, so when we do that, it's pointer at stack memory is deleted but the main data at heap memory is present. So garabage collector sees him, and finds if he is connected with any pointer at stack memory and if he fount "not", then he just delets that data from "Heap memory".  
// We can fix the problem of same data reference in objects using just copying the object values into other one like this:

let obj3 = {
    name :"Hello",
    surname :"World",
}
// ways to copy the values of above object into a different object.
// copying each key value pair one by one
let obj4 = {
    name : obj3.name,
    surname: obj3.name,
}
// or copying all values at a time
let obj5 = {
    ...obj3  // "..." will extract all daa one by one and it's called "spread operator"
}
// And now if we modify any object (like obj3 or obj4 or obj5), then the original object will not be affected.
obj3.name = "Good Morning"
console.log(obj3)
console.log(obj4)
console.log(obj5)
// But if any nested data is copied, then the problem will still be there and real reference will be passed instead of copy.
let obj6 = {
    name: "Manish",
    address: {
        city: "Barhi",
        state: "Jharkhand",
        country: "India"
    }
}
let obj7 = {
    ...obj6
}
obj7.name = "Piyush"
obj7.address.city = "Hazaribagh"
console.log(obj6)
console.log(obj7) 
// Here we can see that name was string, so it was copied but address was nested object, so it was not copied and, changed in both ojects at a time that means that "..." makes just an shallow copy and nested data is not copied.
// So to make an deep copy or copy everything even the nested data, we firstly convert object(Non-primitive data type) into string(Primitive data type) and then copy that in strinng format and then convert it back into object.
let obj8 = {
    name: "Manish",
    address: {
        city: "Barhi",
        state: "Jharkhand",
        country: "India"
    }
}
let obj8String = JSON.stringify(obj8)  // converting object into string
let obj9 = JSON.parse(obj8String) // converting string back into object with copying
// Now if we change anything, other will never be changed in any case.
obj9.name = "Piyush"
obj9.address.city = "Hazaribagh"
console.log(obj8)
console.log(obj9)
