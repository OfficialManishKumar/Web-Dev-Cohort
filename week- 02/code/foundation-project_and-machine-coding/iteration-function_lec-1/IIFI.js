// IIFE - Immediately Invoke function expression
// If we wanna to execute some lines of code at the time when the code/file is runned by the code runner like: calling databse or api calls etc. or its very beginning. We can do it by just using simple functions like this:
function checkDatabaseConnection1 (){
    return `Database connected successfuly`
}
checkDatabaseConnection1()
// But In some cases, we need to execute that function only once, like checking whether database is conected successfuly. then on those cases, creating and calling a reusable function only for once is not a better approach. So for that, we have IIFE's , and there are multiple ways to write an IIFE like:
let checkDatabaseConnection2 = function (){return `Database connected successfuly`}()
let checkDatabaseConnection3 = (() => {return `Database connected successfuly`})()
