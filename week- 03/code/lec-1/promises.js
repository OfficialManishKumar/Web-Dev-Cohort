// Promises are just like the "vada".
// like, when we tries to fetch data of any Website, then it will take some time, and at that time, fetch returns an promise and we can execute any function whle fetching data and after fetching data. and in call stack, it will run after the call stack become empty. And we can add a Callback consisting function which will be runned either during the process or after completing the process
// and because this is not instant(like applying any operator to some numbers) operation which is called Synchronous running or sync and in this case We are not able to change the sequence of Lines of code, it is called aschronous operation.
// In other words, promises are required for doing asynchronous operation
// "fetch" is the part of browser api's

// Making an asynchronous fetch call.
let data = fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches')
// data.then(() => console.log('Data has fetched',data))       // ".then" works when operation succeeded or finished and it takes an callback function.
// console.log(data)

// ".catch" works when the request is rejectes
let data1 = fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches')     // giving Invalid URL
// data1.catch(() => {console.log("Data has not fetched: ",data1)})

// ".finally" works in all cases
data.finally(()=> console.log("Data is Fetched", data))
data1.finally(()=> console.log("Data is not able to be Fetched", data1))


// Converting the output data of this fetching as object.
let data2 = fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches')
data2.then((response) => {let responseData2 = response.json()       // ".json" converts the output into Object, but in return it's an promise.
    .then((obj) => {let objectData2 = obj;     // We used ".then" here also because, "responseData2" was also an promise internally. but now the "objData2" is finally an oject, consisting data of the server output.

            // trying to access any property of this object
            console.log("Our Final Object is: ",objectData2)
            console.log("Status code of given object is: ",objectData2.statusCode)
            console.log("Price of one the item inside the object is: ",objectData2.data.data[0].price)
            console.log("Title or Name of one of inside the given object is: ",objectData2.data.data[0].title)
    })
})
// We cannot make this "objectData2" object available globally because, it(if we try) will become an sychronous operation and this above fetching is asychonous, and when it(if we try) will go to Call stack, there will be no variable name "objectData2" because that might not fetched presently, so it will display error.

// DOM + fetch with another way to create object
data3 = fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches')
    .then((response)=> response.json())
    .then((object) => {

        // Using DOM to print all Items title
        object.data.data.forEach(items => {
            let li = document.createElement('li')
            li.innerText = items.title;
            document.getElementById('list').appendChild(li)
        });
    })     // It will work because, firstly, the above "then" will work and that will make it object and return a promise
