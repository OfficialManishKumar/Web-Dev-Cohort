// Create an bject for a type of tea with properties for name, type and caffein content.
let tea = {
    name : "Green Tea",
    type : "Green",
    caffein : "low",
}
// Access and print Tea type and name
console.log(tea.name)
console.log(tea.type)
// Add a New property origin to the object.
tea.origin = "China"
// change the caffeine level to "Medium"
tea.caffein = "Medium"
// Remove the type property from tea object
delete tea.type
// Check if the object has the property "origin"
console.log(tea.hasOwnProperty("origin"))
console.log("origin" in tea)
// Use a "for in" loop to print all properties of the tea object
for (let key in tea){
    console.log(key + " : " + tea[key])
}
// Create a nested oject representing different types of teas and their properties.
let myTeas = {
    "Green Tea": {
        caffein: "low",
        origin: "China",
    },
    "Black Tea": {
        caffein: "high",
        origin: "India",
    }

}
// Make the deep copy of tea object
let copyTea = JSON.parse(JSON.stringify(tea))   
