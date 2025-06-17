// In all the code written before 2019, we don't have the "import" and "export" keywork at that time, so to export things between files, we used "export" and "require" keyword. Let we wanna to export a add function from this file to the "require.js" file.

function add(a,b){
    return a+b
}

exports.add = add;

// Internally exports is just an empty object where we put variables or functions and get that from the other file using "require"

// exporting one more function from this file 
function subtract(a,b){
    return a-b
}

exports.subtract = subtract;


// Now here we are exporting functions, but we had use the same name of functions as of the name we used while exporting
// So to make any function to access with any name while importing or exporting, we can export those functions by-default like this:
module.exports = add;       // It must be only one in the complete code file, but if we use this, then all the normal exports gets override by this export, so that's why we exports a object of all function