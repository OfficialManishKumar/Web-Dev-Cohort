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
// console.log(proxiedPerson1.password)

function negativeIndex(array){
    return new Proxy(array, {
        get(target, property){
            let index = Number(property)
            if (index < 0){
                return target[target.length + index]
            }
            else{return target[index]}
        }
    })
}

let array1 = [8,54,8,96,5,2,3,98,7]

console.log(negativeIndex(array1)[-1])
// or
array1 = negativeIndex(array1)
console.log(array1[4])
console.log(array1[-2])
console.log(array1[-6])


// Doing the negative Indexing using "set" attribute
function negativeIndexing(array){
    return new Proxy(array,{
        set (target, property, value){
            let index = property;
            if (index < 0){
                target[target.length+index] = value;
            }
            else{target[index] = value}
            return true;        // We write it to tell that it's done, and it is sone by-default in case of "get" attribute
        }
    })
}

array1 = [8,54,8,96,5,2,3,98,7]

console.log(negativeIndexing(array1)[-1])
// or
array1 = negativeIndexing(array1)
console.log(array1[4])
console.log(array1[-2])
console.log(array1[-6]) 