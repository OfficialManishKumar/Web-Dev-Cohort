// Make a array of Teas
let teas = ["Lemon Tea", "Ginger tea","garlic tea","oolong tea","Black Tea"]
// Add a tea in the array
teas.push("Chamomile tea")
// Remove "oolong tea" from the list
const index = teas.indexOf("oolong tea")
if (index > -1) {
    teas.splice(index, 1);
}
// Filter caffeinated teas(only hearbal tea is not caffeinated
const caffeinatedTeas = teas.filter(tea => tea !== "Herbal tea")
// Sort the list of tees in alphabetical order
teas = teas.sort()
// Print all teas
for (let i = 0; i<teas.length; i++){
    console.log(teas[i])
}
// Use a for loop to create a new array with all tea names in uppercase.
const uppercaseTeas = []
for (let i = 0; i <teas.length; i++){
    uppercaseTeas.push(teas[i].toUpperCase())
}
// Use a For loop to find tea name with highest number of characters
highestTea = {
    name : "abc",
    length:  0,
}
for (let i = 0; i<teas.length; i++){
    if (teas[i].length > highestTea.length){
        highestTea.name = teas[i];
        highestTea.length = teas[i].length
    }
}
console.log(highestTea)

// Using a for loop to reverse the order of array
const reversedTeas = []
for (let i = teas.length-1;i >= 0; i-- ){
    reversedTeas.push(teas[i])
}
console.log(reversedTeas)
