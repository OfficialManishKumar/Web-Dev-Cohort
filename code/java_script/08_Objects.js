// Object is an entity which has some property and Method(functionallity)(function inside an oject called method)
// Now let we wanna to storee various properties of different values, then the values of properties will be different but the property name or overall structure will be similar and if we wanna to modify them, then we had to modify all objects individually, which can even create an error. And there is not a definite template for each object. And if we use shallow or deep copy, then the values will also be copied but we don't wanna to copy them we just wanna to preserve their structure/template/schema. So to solve this, In es6, Class keyword is added that helps to define the structure. 

// Default Constructor

// TO create/construct classes, we need their constructors, and if just create/construct a class and don't add its constructer:
class hello0 {

}
// then the code runner adds an default constructor looking like this:
class hello1 {
    constructor () {

    }
}

// Parameterized Constructor
// So If we want any Input/parameter from the user, we need to add arguments in the constructor like this:
class hello2 {
    constructor (fname) {

    }
}
// And now whenever we had to use that class, we need to give an parameter called name also.
let hello3 = new hello2("Manish")

// We can write the object body inside the constructor like this:
class greed {
    constructor (fname, sname){
        this.firstName = fname;        // "this" will point toward the variable in which this class is used.
        this.surName = sname;
        this.fullName = fname + " " + sname;
    }
}
// Now we can axis the Object properties like:
let greed1 = new greed("Manish","Kumar")
console.log(greed1.firstName)
console.log(greed1.surName)
console.log(greed1.fullName)


// Prototype Inheritance or prototype chaining = Inheritance of protoypes for any datatype, lets take objects for example 
let proto1 = {
    "name":"proto1",
    "class":"proto1th",
}
let proto2 ={
    "name":"proto2",
    "class":"proto2nd",
}
proto2.Prototype = proto1;     // This will make the proto1 as the prototype for proto2
// So Know, what will happen if we try to use any function that is only available at prototype
console.log(proto2.toString())      // here the code runner will firstly finds "toDtring" in proto2 then he goes to its prototype and he will be redirected to proto1, so he will then find on proto1 and then he will go to proto1 prototype and finally it will get its value

// And If we write:
proto1.Prototype        // It is pointing towards prototype of proto an of we do
// proto1.Prototype.Prototype      // Then It will return "Undefined" means there is no prototype of prototype
// And if we done
// proto1.Prototype = none;         // We had made the protype null, and now everything available in proto will not be available.



// Now one line, we've heard a lot, which is "In JS, Everything is an object" because if we have any data of any data type like:
let array = [5,4,8,9]
console.log(array.__proto__.__proto__)      // "__proto__" is just short of "prototype". And if we run this on browser. the the constructor will appear which says "object" means everthing is an object from inside.

// But Generally don't change or modify them. We can know or learn them but never modify them.

// And If we check the prototype of an class and then an object of that class. we can see that it will be similar. that means on creating an object of any class, it just copies that class blueprint


// Prototype is inside the blueprint
// And Inside object, there is "__proto__ of prototype of blueprint" or "__proto__"
// that means if we write "const p1 = new Proto1()", we are writing this internally:
// p1.__proto = proto1.__proto__
// and the "const p1 = new Proto1()" is just synthetical sugar, because it's doing same thing but with sweetness and easyness.