// there are many loops we can use in js
// 1 for loop
// 2 for in
// 3 for of 
// 4 while
// 5 do white

// we will use each loop for object and array and see what happens
// ================================================with array===========================
let names = ["Aarav", "Ishita","Rohan","Meera","Kabir","Anaya","Vihaan","Sanya","Arjun","Kavya","Aarav"];
let numbers = [57, 13, 92, 4, 68, 23, 81, 39, 5, 76, 45, 11, 90, 27, 33, 71, 2, 99, 50, 62];
// // for loop
// for(let i=0; i < names.length ; i++){
//     console.log(names[i]);
// }

// // for in loop
// for(let i in names){
//     console.log(`${i} : ${names[i]}`)
// };// this returns index numbers (in => keys)

// // for of loop
// for(let i of names){
//     console.log(`${i}`)
// }; // this returns the values (of => values)

// // while loop
// let i = 0 
// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }

// // do while
// let i = 0;
// do{
//     console.log(names[i]);
//     i++;
// }while(i<names.length);// this loop makes sure that you can run your code atlest once.

// ================================================with object ===========================
let person = {
    firstName : "soham",
    lastname : "nanavati",
    age : 23,
    eyeColour : "brown",
};
// the object is not iterable directly we must use differnet way to loop over it. make it a iterable object like array through Object.entries.
// // for loop
// for(let i = 0, entries = Object.entries(person); i < entries.length; i++){ // we can create many variable separated by coma
//     console.log(entries[i])
// };// with this loop through array created by Object.entries() method

// // for in loop
// for(let x in person){
//     console.log(x)
// };

// // for of loop
// for(let [key,values] of Object.entries(person)){
//     console.log(`${key} : ${values}`)
// }

// // white loop
// let i = 0;
// let entries = Object.entries(person)
// while(i < Object.keys(person).length){
//     let [keys, values] = entries[i];
//     console.log(`${keys} : ${values}`)
//     i++;
// }

// // do white loop
// let i = 0;
// let entries = Object.entries(person)
// do{
//     let [keys, values] = entries[i];
//     console.log(`${keys} : ${values}`);
//     i++;
// }while(i<entries.length);
