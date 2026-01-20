// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// Date objects are not allowed in JSON.if you need to include a date, write it as a string.You can convert it back into a date object later
// the JSON.parse() finction has 2nd parameter called reviver that loops over property before returning a value


// // =====================================JSON.parse()
// // using json for object
// let text = '{"name":"John", "age":30, "city":"New York"}'
// let objText = JSON.parse(text)//returns javascript object
// console.log(objText)

// // using json for array
// let text2 = '["Ford", "BMW", "Audi", "Fiat"]'
// let array = JSON.parse(text2);//returns javascript array
// console.log(array)

// // json can be used for a string, a number, an object(JSON object), an array, a boolean, and null.
// // JSON values cannot be one of the following data types > function, date, undefined


// // using dates 
// // Date objects are not allowed in JSON.
// let text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
// let objText = JSON.parse(text,(key,value)=>{
//     if(key === "birth"){
//         return new Date(value);
//     }else{
//         return value
//     }
// });
// console.log(objText);
// console.log(JSON.parse(text))


// // ==============================================JSON.stringify()
// // stringify object
// let obj = {name: "John", age: 30, city: "New York"};
// let text = JSON.stringify(obj);
// console.log(`${text} : ${typeof text}`)

// // stringify array
// let array = ["John", "Peter", "Sally", "Jane"];
// let text = JSON.stringify(array);
// console.log(`${text} : ${ typeof text }`);




