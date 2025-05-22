// There is an Annotation that to select the function name, use "camelCasing(first word small and newt word starts to capital)" for Regular functions, and use "PascalCasing(all word starts are capital)" for constructor Functions

// When we need to create object with similar keys and values like for user data, then we need to write code for the siilar properties multiple time. To solve this problem, we can use Constructor function
function Person(fname,lname,contactNum,address){
    this.fname = fname;
    this.lname = lname;
    this.contactNum = contactNum;
    this.address = address;
    this.getFullName = function(){     // we can even write functions inside the constructor function
        return fname+lname
    }
}

let person1 = new Person("Mansih","saw",987654321,"abc")
console.log(person1)
console.log(typeof(person1))        // the type of it is "object", which is required
// And We can also create lots of more peoples with using functional literals
let person2 = new Person('Dipesh','das',123456789,'Padirma')
// And now if we add any function to the base function literal. then that function will be available on all of the persons objects



// We can also achieve the same thing by making a "Persons" class
class Persons{
    constructor(fname,lname,contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    getFullName(){
        return this.fname+this.lname
    }
}

let persons1 = new Persons("Mansih","saw",987654321,"abc")
console.log(persons1)
console.log(typeof(persons1))
console.log(typeof(Persons))        // and the type of our class is "Function"

// And nowadays we use class to make base blueprints but in Interviews, they ask about Function literals to check the knowledge and we used them because before es6, class keyword was not available