// We need to construct promise class
class myPromise {
    constructor(executor){
        this._state = "pending";
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finalCallbacks = [];
        executor(this.resolverFn.bind(this),this.rejectorFn.bind(this));
    }
    resolverFn(value){      // It will store values if that is provide inside the "resolve" parameter or making it available in ".then" method
        this._state = "fulfilled";
        this._successCallbacks.forEach((func)=> func(value));    // Running all successful callbacks
        this._finalCallbacks.forEach((func)=> func(value));      // Functions inside final callback should also be executed because that runs on both success and failure cases.
    };
    rejectorFn(error){      // It will store errors if provided inside the "reject" parameter, or make it available in ".catch" method.
        this._state = "rejected";
        this._errorCallbacks.forEach((func)=> func(error));
        this._finalCallbacks.forEach((func)=> func());
    }
    then(callback){
        this._successCallbacks.push(callback);   // Storing all Callbacks
        return this;        // It returns the complete final data, so that our code can supprt Method chaining,or if another method is after the current method, then the next method must get all data that previous one returned or have with modification done by previous one.
    }
    catch(callback){
        this._errorCallbacks.push(callback);
        return this;
    }
    finally(callback){
        this._finalCallbacks.push(callback);
        return this;
    }
}

function wait(seconds){
    return new myPromise((resolve,reject) => {
        setTimeout(() => resolve("Hello Manish"),seconds*1000);
    })
}
wait(5)
    .then((greet)=> console.log("Promise resolved after 5 seconds.",greet))
    .catch(()=>console.log("Promise is rejected after 5 seconds."))
    .finally(()=>console.log("It will work everytime"))