// Promises are just like the promise that it will be done but not confirmes about when it will be done.
// It is used in cases like when we said to fetch data, but it will take some time and the crawler need any response immediately, then we can use it, it will respond that it's promising that he is executed and will run the lines of codes
// Syntax to write Promise
Promise.resolve().then(() => {console.log("Promise resolve hogaya")})
// And If we have an Time and promise function, then promise will be loaded first because when Event loop runs, it gives priority to Micro task Queue. 

// And if we have lots of or a loop of nested promises like this:
Promise.resolve().then(() => {
    console.log("Promise resolve hogaya")
    Promise.resolve().then(() => {
        console.log("Promise resolve hogaya")
        Promise.resolve().then(() => {
            console.log("Promise resolve hogaya")
            Promise.resolve().then(() => {
                console.log("Promise resolve hogaya")
            })
        })
    })
})

// Now Imagine a situation when event loop is calling tasks from Micro task queue but it's not ending because there can be a long or infinite loop or many tasks and the tasks at task queue will not get a chance to run, and this situation is called Starvation.