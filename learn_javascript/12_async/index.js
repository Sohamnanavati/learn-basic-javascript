// Common Asynchronous Code in JavaScript
// ==========================================
// These are the most commonly used async features in everyday coding:
// - Promises
// - callback
// - setTimeout()
// - setInterval()
// - fetch() (for API/network requests)


// Ways to Handle Asynchronous Code
// ==========================================
// Common techniques for managing async operations:
// - async / await
// - Callbacks
// - try...catch (for error handling with async/await)
// - .then(), .catch(), .finally() (Promise methods)



// There are a few situations where we need to use asynchronous code in JavaScript. The main reasons are:
// Handling long-running tasks

// JavaScript normally executes code line by line in a synchronous way, meaning it waits for each line to finish before moving to the next. However, some operations like fetching data from a database or an API can take time. If such operations were run synchronously, they would block the entire program until the data arrives. Asynchronous code solves this by allowing JavaScript to make the request and continue running other code in the meantime. When the data is ready, the async function resumes, ensuring that any dependent code runs only after the data becomes available. This allows for efficient error handling and non-blocking execution.

// If an error happens during data fetching (or any other async task), asynchronous code makes sure that the rest of the program continues running smoothly. This way, one failed operation doesn’t stop the entire script from executing.

// JavaScript runs code line by line by default. In synchronous code, if a task takes time (like reading a file or doing a heavy calculation), JavaScript will wait for it to finish before moving on — and this blocks all other code, even the parts that don’t depend on that result. To prevent the program from getting “stuck,” JavaScript uses asynchronous operations. When you run async code, tasks that might take time (like API calls) are handed off to the browser/Node environment, allowing the main thread to keep running other code. Inside an async function, you may still want your steps to run in order — that’s where await comes in. It pauses just that function until the async task completes, then continues as if it were synchronous, without freezing the rest of the program.

// Analogy: Think of JavaScript as a chef in a kitchen. In synchronous cooking, if the chef puts rice on the stove, they must stand and watch it until it cooks — nothing else gets done. In asynchronous cooking, the chef puts the rice on the stove, sets a timer, and continues chopping vegetables. When the rice is ready, the timer rings, and the chef finishes that step. await is like the chef choosing to wait for the rice before moving on to the next step of that recipe, but they don’t shut down the entire kitchen while waiting.

// ===========================================PROMISES 
// we can make our own promises using new promises method.
// there are 3 stages of promises
// pending 
// resolve==> needs value
// reject===> needs error

// When a promise is resolved, we can handle the result using .then().
// When a promise is rejected, we can handle the error using .catch(), or still use .then() and .finally() if needed.
// In both cases (resolved or rejected), .then() can be executed, and we can also return new promises from .then() or .catch() to continue chaining further operations.
// .then(onFulfilled, onRejected?) → runs when resolved, optional handler for rejection.The then() method provides two callbacks:One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.
// .catch(onRejected) → runs only if rejected.
// .finally(onFinally) → runs no matter what (success or error). he finally() method provides a callback.The callback is a function to run when a promise is settled (fulfilled or rejected).

// The Promise Object represents the completion or failure of an asynchronous operation and its results.
// Promise object → the outer wrapper (still waiting).
// Response object → what you get when the promise resolves (represents the server’s reply). => for fetch
// Request object → what you send to the server (can be made explicitly, but usually fetch makes one under the hood). => for fetch
// When you do fetch(), it returns a Promise.
// But the value inside that Promise (once it resolves) is a Response object.

// And that Response object itself has methods that also return Promises:
// response.json() → returns a Promise (with parsed JSON).
// response.text() → returns a Promise (with plain text).
// response.blob() → returns a Promise (with binary data).

// Promise → the container for something you’ll get later.
// Response object → the actual HTTP reply from the server (inside the Promise).
// Request object → describes what you sent (URL, headers, body, etc.).
// Many methods (like json()) return new Promises, which is why you keep using .then() or await.


// PROMISE METHODS
// Promise.all([promise1, promise2, promise3])	Returns a single Promise from a list of promises. Runs multiple promises in parallel. Waits for all to succeed. If even one fails → the whole thing rejects. When all promises fulfill, the result is an array of their values (in the same order as input);

// Promise.allSettled([promise1, promise2, promise3])	Returns a single Promise from a list of promises. Waits for all promises to settle (either fulfilled or rejected). you always get results for every promise. Returns an array of objects with:

// Promise.any([promise1, promise2, promise3])	Returns a single Promise from a list of promises. ✅ Resolves as soon as the first promise fulfills. When any promise fulfills . Returns the first successful promise. Ignores rejections unless all fail. If all fail, it rejects with AggregateError.

// Promise.race([promise1, promise2, promise3])	Returns a single Promise from a list of promises. Returns the result of the first promise that finishes (success OR error).

// Promise.reject()	Returns a Promise object rejected with a value. Instantly creates a rejected promise with the given reason.
// // Creates a Promise that is already rejected (failed).
// // Useful when you want to simulate or instantly return an error.
// let p3 = Promise.reject("Something went wrong!");
// p3.catch(error => console.log(error)); // Output: Something went wrong!
// // Same as writing:
// let p4 = new Promise((resolve, reject) => reject("Something went wrong!"));

// Promise.resolve() Returns a Promise object resolved with a value. Instantly creates a fulfilled promise with the given value.
// Promise.resolve(value)
// // Creates a Promise that is already resolved (fulfilled).
// // Useful when you already have a value but want to return it as a Promise.
// let p1 = Promise.resolve("Success!");
// p1.then(value => console.log(value)); // Output: Success!
// // Same as writing:
// let p2 = new Promise((resolve, reject) => resolve("Success!"));

// catch()	Provides a function to be called when a promise is rejected
// finally()	Provides a function to be called when a promise is fulfilled or rejected
// then()	Provide two functions to be called when a promise is fulfilled or rejected

// //  Creating a Promise manually with new Promise()
// // This gives YOU full control over when the promise resolves or rejects.
// // Best used for real async tasks (fetching data, timers, etc.)
// let myPromise = new Promise((resolve, reject) => {
//   let success = true; // simulate success or failure

//   if (success) {
//     resolve("Data loaded successfully!");
//   } else {
//     reject("Failed to load data!");
//   }
// });

// myPromise
//   .then(result => console.log(result))  // Runs if resolved
//   .catch(error => console.log(error));  // Runs if rejected



// When we create a Promise, the code inside runs synchronously, but the resolution (resolve/reject) is delivered to .then/.catch asynchronously (via the event loop). That’s why .then and .catch handlers run later, even if the Promise was resolved immediately.

// let promise = new Promise((resolve, reject)=>{
//     console.log(1)// the js prints this 
//     // use this example 
//     // setTimeout(() => {
//     //     resolve(2)// this is the data that is transfered to .then...
//     // }, 0);

//     // or use this example
//     resolve(2)
// });
// console.log(3); //this is printed immediately
// promise.then((data)=>{
//     console.log(data) // this is the resolved data sent from promises
// });
// console.log(4);// this is executed immediately.

// // ==============================================FETCH METHODS
// // get method
// let data = fetch('https://jsonplaceholder.typicode.com/users',{
//     method : 'GET',
//     headers : {
//         "content-type": "application/json"
//     }
// })
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data)
// })

// // post method
// let data1 = fetch('https://dummyjson.com/products/add',{
//     method : 'POST',
//     headers : {
//         "content-type" : "application/json"
//     },
//     body : JSON.stringify({
//     title : "BMW pencil"
// })
// })
// .then((data)=>{
//     return data.json()
// })
// .then((data)=>{
//     console.log(data)
// })

// // put method
// let data2 = fetch('https://dummyjson.com/products/1',{
//     method : 'PUT',
//     headers : {
//         "content-type" : "application/json"
//     },
//     body : JSON.stringify({
//         title : 'iPhone Galaxy +1'
//     })
// })
// .then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// })


// // delete method
// let data3 = fetch('https://dummyjson.com/products/1',{
//     method : 'delete',
// })
// .then((data)=>{
//     return data.json();
// })
// .then ((data)=>{
//     console.log(data);
// })
//============================== http headers for fetch this is yet to be done. will do it later.
// // async awaite
// async function getData(){
//     let rawdata = await fetch('https://dummyjson.com/products',{
//         method : "GET",
//         headers : {
//             "content-type" : "application/json"
//         }
//     })
//     let dataJSON = await rawdata.json()
//     console.log(dataJSON)
// }
// getData();



