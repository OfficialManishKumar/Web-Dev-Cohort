// Creating a Polyfill of "for each" function
// Signature: takes a callback function and returns the call back function applied to each item
if (!Array.prototype.forEach){
    Array.prototype.forEach = function(cbFunction){
        for (let i =0; i < this.length; i++){
            cbFunction(this[i],i ) 
        }
    }
}

// Creating polyfill of Map
// Signature: takes callback function and apply that function to every item and returns a new array with thise values
if (!Array.prototype.map){
    Array.prototype.map = function(cbFunction){
        let modifiedArray = [];
        for (let i = 0; i < this.length; i++){
            modifiedArray.push(cbFunction(this[i]),i)
        }
        return modifiedArray;
    }
}

// Creating polyfill of reduce function with all edge case and don't repeat things.
if(!Array.prototype.myreduce){
    Array.prototype.myreduce = function(cbFunction,initialValue){
        let accumulator = initialValue || this[0]       // If Initial value exists, then take that, else take this[0]
        let startingIndex = initialValue ? 0 : 1       // If Initial value exists, then take that, else take this[0]
        for (let i = startingIndex; i < this.length; i++){
            accumulator = cbFunction(accumulator,this[i])
        }
        return accumulator;
        
    }
}
