// // ===================================== methods to create a object ===========================================
// // method 1 using object literals
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
//      method : "object literals"
// }
// console.log(person)

// // method 2 using new keyword
// let person = new Object({
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
//     method : "new keyword"
// });
// console.log(person)

// // method 3 using object.creates
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
//     method : "object.create"
// }
// let man = Object.create(person)
// console.log(man) // Changing properties on man Only affects man, not person.Changing properties on person. Will reflect in man if man doesn’t have its own property yet.

// // method 4 from entires
// // let person = {
// //     firstName : "soham",
// //     lastname : "nanavati",
// //     age : 23,
// //     eyeColour : "brown",
// //      method : "fromEntries()"
// // }
// // let man = Object.entries(person)
// // console.log(man)
// person = [['firstName', 'soham'],['lastname', 'nanavati'],['age', 23],['eyeColour', 'brown'],['method', 'object.create']]
// let man = Object.fromEntries(person)
// console.log(man)

// // method 5 using object.assigns 
// // this method helps in assigning the values to the target object from the source object
// // it copies all enumerable properties from the source object(s) to the target object.
// let person = {//target object
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
//     method : "object.assign"
// }
// let man1 = {// source object
//     nationality : "indian",
//     firstName : "samarth"
// }
// let man2 = Object.assign(person, man1);//target, source
// console.log(man2);
// console.log(person);//mutates the original object.
// // =====================================object activities ===========================================
// // object > functions are object, math are object, dates are object, array are object, maps are object, sets are object.
// // object are mutable 
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// }
// let man = person;
// console.log(man)
// man.firstName = "samarth"
// console.log(man) 
// console.log(person)// any change in man changes the person object! they are mutable.

// // ==============accessing the object
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// };
// console.log(person.firstName)// .method
// console.log(person["firstName"]) //[""]method

// // nested methods
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
//     cars :["honda", "BMW", "tesla"],
//     family : {
//         father : "rajesh",
//         brother : "samarth"
//     }
// };
// console.log(person.cars[0])// accessing array
// console.log(person.family.father) // accessing  object

// //========== CRUD operation on object 
// // use this object for reference
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// };

// // adding new properties
// person.parent = "rajesh";
// console.log(person);

// // deleting the value
// delete person.parent
// console.log(person);

// // updating the value
// person.name = "samarth";
// console.log(person);

// // object methods are the actions we can perform on object.
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
//     cars :["honda", "BMW", "tesla"],
//     family : {
//         father : "rajesh",
//         brother : "samarth"
//     },
//     fullName : function(){
//         return `${this.firstName} ${this.family.father} ${this.lastname}`
//     },
// };

// // adding object method (CREATE)
// person.activity = function(){
//     return `${this.firstName} has just bought himself a new ${this.cars[0]}`
// };
// console.log(person)

// // (READ)
// console.log(person.fullName())
// // // this is the action we performed. the () is important to access the function in object. not doing so will return funtion in form of a string.

// // update method (UPDATE)
// person.activity = function(){
//     return `${this.firstName} is a playing football`
// };
// console.log(person.activity());

// // deleting method (DELETE)
// delete person.fullName;
// console.log(person);

// // ===============================displaying the object 
// // NOTE : loops will be taught later
// // method 1 object properties by name eg person.firstname
// // method 2 loops (yet to teach)
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// };
// // There are several types of loops that can be used in programming.
// // method 1
// let text = "";
// for (let data in person){
//     text += data + " ";
// };
// console.log(text);

// // method 3 object.values
// console.log(Object.values(person))// this will log all the values in the object.

// // method 4 object.keys
// console.log(Object.keys(person))// this will log all hte values in the keys.

// //  method 5 object.entries
// console.log(Object.entries(person))// this will log the array of key values pairs in an array.

// // method 6 stringify
// console.log(JSON.stringify(person))

// =======================constructions of object
// constructor

// /**
//  * Creates a new Person object.
//  * @param {string} firstName - name of the person you want to create
//  * @param {string} lastName - lastname of the person you want to create
//  * @param {number} age - age of the person you want to create
//  * @param {string} eyeColour - eyecolor of the person you want to create
//  */
// function Person(firstName, lastName, age, eyeColour){
//     this.firstName = firstName;
//     this.lastname = lastName;
//     this.age = age;
//     this.eyeColour = eyeColour;
// }
// CRUD operations on construction
// // CREATE
// let man = new Person("soham", "nanavati", 23,"brown")
// console.log(man);
// // ADD
// Person.prototype.nationality = "indian";
// let man = new Person("soham", "nanavati", 23,"brown")
// console.log(man)// this data will be seen in prototype of the object

// // READ
// console.log(man);

// // UPDATE
// person.prototype.nationality = "USA"
// console.log(man)// this data will be seen in prototype of the object

// // DELETE
// delete person.prototype.nationality
// console.log(man)

// // ===================================== deconstructing ===========================================
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// };

// let {firstName, lastname} = person;// unpacking the object. the order does not matter
// console.log(firstName);
// console.log(lastname);// you dont have to access the object to get data. you have it in the variables firstname and lastname.
// let {firstName, lastname, nationalities = "india"} = person // setting default values
// console.log(firstName);
// console.log(lastname);
// console.log(nationalities);

// //array deconstructing
// cars = ["honda", "BMW", "tesla"];
// let [car1, car2] = cars;//unpacking the cars array.
// console.log(car1);
// console.log(car2);
// //skipping
// let [car1,,car3] = cars;
// console.log(car1);
// console.log(car3);
// let {[0]:car1, [2]:car3} = cars;
// console.log(car1);
// console.log(car3);
// let [...c] = cars;
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[2]);

// // string deconstruction
// text = "soham nanavati";
// let [...a] = text
// console.log(a[2])

// // ===================================== object methods ======================================================
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// };

// // method 1
// //Object.assign(target, source) this helps in assigning the values of the source variable to the target. we have done this before

// // method 2 
// // Object.entries(object) this will create a array of key value pair of each property and methods
// console.log(Object.entries(person))
// Object.fromEntries() converts the data from object.entries(person) into object again.

// // method 3 
// console.log(Object.values(person));

// // method  4
// console.log(Object.keys(person))

// // method 5 
// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];
// let data = Object.groupBy(fruits, function (obj){
//     return obj.quantity > 200 ? "ok" : "low";
// })// this method creates an object of the grouped properties.
// console.log(data);
// // another way to create groupBy
// let newObject = Object.groupBy(fruits, (value, index, array)=>{
//     return value.quantity > 200 ? "ok" : "low";
// })
// console.log(newObject);
// if the data is already object convert it into array using object.entires() method then use Map.groupBy().

// // method 6 
// let man = Object.create(person)
// man.firstName = "samarth"
// console.log(person.firstName)//the original object is not changes.
// console.log(man.firstName)

// // ===================================== object management ======================================================
// let person = {
//     firstName: "soham",
//     lastname: "nanavati",
//     age: 23,
//     eyeColour: "brown",
// };
// // Normally, when we add a new property to an object, it is enumerable, configurable, and writable by default. This means we can reassign its value, delete the property, and iterate over it in loops.
// // Every property has a name and a value.
// // The value is one attribute of the property; the others are enumerable, configurable, and writable.
// // Writable:
// // true → The property’s value can be changed.
// // false → The property’s value cannot be reassigned.
// // Enumerable:
// // true → The property can be accessed in loops (like for...in) or by JSON.stringify().
// // false → The property will not appear in loops or JSON.stringify(), but it still exists and can be accessed directly (e.g., obj.name).
// // Configurable:
// // Configurable determines whether you can change the property’s descriptor (like making it writable or enumerable) or delete the property from the object.
// // If configurable: false, you cannot delete the property and you cannot change most of its attributes (except writable can sometimes still be changed from true → false).
// // If configurable: true, you are free to delete the property or modify its descriptors.

// // method 1
// Object.defineProperty(person, "firstName", {
//     value: "samarth",
//     writable: false,
//     enumerable: true,
//     configurable: true
// });
// // we can also add new property to the object buy this method. just mention the property name that does not exist in the person object.

// // method 2 
// console.log(Object.defineProperties(person,
//     {
//         firstName: {
//             value: "soham",
//             writable: true,
//             enumerable: true,
//             configurable: true
//         },
//         lastname: {
//             value: "nanavati",
//             writable: true,
//             enumerable: true,
//             configurable: true
//         }
//     }
// ))// you can define many property with Object.defineProperties method

// // method 3
// console.log(Object.getOwnPropertyNames(person))
// // method 4 
// console.log(Object.getOwnPropertyDescriptor(person,"firstName"))
// // method 5 
// console.log(Object.getOwnPropertyDescriptors(person))
// // method 6 
// console.log(Object.getPrototypeOf(person))

// // ===================================== object protection ======================================================
// let person = {
//     firstName : "soham",
//     lastname : "nanavati",
//     age : 23,
//     eyeColour : "brown",
// };
// // method 1
// Object.preventExtensions(person)//Prevents adding new properties to the object. Existing properties can still be modified or deleted.
// console.log(Object.isExtensible(person))

// // method 2 
// Object.seal(person); //Prevents adding or deleting properties, but existing property values can still be modified.
// console.log(Object.isSealed(person))

// // method 3 
// Object.freeze(person) //Prevents adding, deleting, or modifying properties. All properties become immutable.
// console.log(Object.isFrozen(person))