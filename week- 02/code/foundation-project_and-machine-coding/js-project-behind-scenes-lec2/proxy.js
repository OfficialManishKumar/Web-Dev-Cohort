// Proxy means like: anybody else came in place of you
// Example of Proxy: We will make an proxy of an object and we had to show error if user tries to call the "password" property of that proxy object
const person1 = {
    "name":"Manish",
    "contact number":123456789,
    "password":785454
}

const proxyPerson1 = new Proxy(person1, {
    get(target, property){
        console.log(target)
        console.log(property)
    }
})
console.log(proxyPerson1.name)
// So we knew from our observation that, "property" stores the properties which we tried to axis and "target" stores the input object.
// So now let's fulfill the task by showing error is prop is password
const proxiedPerson1 = new Proxy(person1,{
    get(target, property){
        if (property === "password"){
            throw new Error("Access Denied")
        }
    }
})
console.log(proxiedPerson1.password)

