let numbers = [57, 13, 92, 4, 68, 23, 81, 39, 5, 76, 45, 11, 90, 27, 33, 71, 2, 99, 50, 62];


// // ============================= array methods ================================================
// // length
// console.log(numbers.length)

// // toString()
// console.log(numbers.toString())

// // at()
// console.log(numbers.at(2))

// // join=> this method clubs the data. we need to mention the separator
// console.log(numbers.join(":"))

// // pop => this will remove the last data. logging this will give us the popped numbers
// console.log(numbers.pop())// this will give me the number that was popped out.
// console.log(numbers)// last data removed

// // push
// console.log(numbers.push(62))//changes the length of the array. returns length. the item/ data is added to the last.
// console.log(numbers)

// // shift=> this method removes the first data from the array
// console.log(numbers.shift()) // this will give me the number that was out
// console.log(numbers)

// // unshift
// console.log(numbers.unshift(57))//changes the length of the array. returns length. the item/ data is added in the beginning.
// console.log(numbers) 

// // delete
// delete numbers[0]// leaves empty spaces instead use pop and shift method. or others 
// console.log(numbers)

// // concat
// let numbers2 = [23,54,79];
// let concat = numbers.concat(numbers2,88,[45,77,88,99])//you can concate many more array.
// console.log(concat)

// // copywithin
// //  method overwrites the existing values.
// // method does not add items to the array.
// // does not change the length of the array.
// let copy = numbers.copyWithin(5, 0, 3)// at index 5 , copy from 0 (included) index to 3(not included)
// console.log(copy)

// // flat
// const array = [[1,2],[3,4],[5,6]];// use this array for this example
// console.log(array)
// console.log(array.flat(1))// see the difference you can also specify how many times you want to flat the array.it can be 1, 2, 3 or infinity

// // splice
// // this method adds new numbers to the array
// // The first parameter defines the position where new elements should be added
// // the second parameter defines how many elements should be removed.
// // The rest of the parameters define the new elements to be added.
// console.log(numbers);
// let newnumber = numbers.splice(2,2,121212,334343)
// console.log(numbers);
// console.log(newnumber);// this would log data that was removed
// // you can remove the data without leaving holed.

// // // tospliced
// let newnumbers = numbers.toSpliced(0,4,"soham")
// console.log(newnumbers)// this returned new array. this did not alter the old array.

// // slice
// // this method creates a new array
// // The method then selects elements from the start argument, and up to (but not including) the end argument.
// console.log(numbers);
// let newnumbers = numbers.slice(0,5)//not including 5th index number
// console.log(numbers)// did not change the original array.
// console.log(newnumbers)

// // ============================= array search ================================================
let names = ["Aarav", "Ishita","Rohan","Meera","Kabir","Anaya","Vihaan","Sanya","Arjun","Kavya","Aarav"];

// // indexof()
// console.log(names.indexOf("Aarav"))
// // -1 means that the data is not found in the array.
// // If the item is present more than once, it returns the position of the first occurrence.

// // lastIndexOf()
// console.log(names.lastIndexOf("Aarav"))

// // includes
// console.log(names.includes("Aarav"))// returns true or false

// // find
// let newnames = names.find((value, index, array)=>{
//     return value = "Aarav"
// })
// console.log(newnames)//finds (returns the value of) the first element that passes the test.
// let numberFind = numbers.find((value, index, array)=>{
//     return value < 5
// })
// console.log(numberFind)//finds (returns the value of) the first element that passes the test.

// // findLast
// let newnames = names.findLast((value, index, array)=>{
//     return value = "Aarav"
// })
// console.log(newnames)

// //findIndex
// let newnames = names.findIndex((value, index, array)=>{
//     return value = "Aarav"
// })
// console.log(newnames);

// // findLastindex
// let newnames = names.findLastIndex((value, index, array)=>{
//     return value = "Aarav"
// })
// console.log(newnames);
// // ============================= array sort ================================================
// // sort
// console.log(names.sort());

// // reverse
// console.log(names.reverse());

// // tosort
// // this method does not change the original array
// let newnames = names.toSorted();// returns new array
// console.log(names)
// console.log(newnames)

// // toreverse
// // this method does not change the original array
// let newnames = names.toReversed();// returns new array
// console.log(names)
// console.log(newnames)

// // ============================= array iterations ================================================

// // foreach
// numbers.forEach((value, index, array)=>{
//    numbers[index] = (value*2)//changes the orginal values
//    console.log(value + ":"+ value*2)
// });
// console.log(numbers); // this method changes the orignal array
// let newnumber =  numbers.forEach((value, index, array)=>{
//    numbers[index] = (value*2)//changes the orginal values
//    console.log(value + ":"+ value*2)
// });
// console.log(numbers)// this method changes the orignal array
// console.log(newnumber)// this does not return anything. there is no value in "newNumber"

// // map 
// // creates new array
// numbers.map((value, index, array)=>{
//     return value*2
// });
// console.log(numbers);// therefore this method does not change the original array.
// let newnumbers = numbers.map((value, index, array)=>{
//     return value*2
// });
// console.log(newnumbers);
// console.log(numbers)

// // filter 
// // creates a new array.
// // returns the values that passes the test
// // does not change the original array
// numbers.filter((value, index, array)=>{
//     return value>30
// })
// console.log(numbers);// therefore this method does not change the original array.
// let result = numbers.filter((value, index, array)=>{
//     return value>30
// })
// console.log(numbers)
// console.log(result)

// // reduce()
// // The reduce() method runs a function on each array element to produce a single value.
// // The reduce() method works from left-to-right in the array
// // does not change the original array
// let newnumber = numbers.reduce((total, value, index, array)=>{
//     console.log(total + ":" + value)
//     return total+value
// })
// console.log(newnumber)

// // reduceright()
// let newnumber = numbers.reduceRight((total, value, index, array)=>{
//     console.log(total + ":" + value)
//     return total+value
// })
// console.log(newnumber)

// // every
// // The every() method checks if all array values pass a test.
// // returns true or false
// let result = numbers.every((value, index, array)=>{
//     return value > 0
// })
// console.log(result)

// // some
// The some() method checks if some array values pass a test.
// let result = numbers.some((value, index, array)=>{
//     return value > 90
// })
// console.log(result)

// // array.from
// // Any iterable object
// // Any object with a length property
// let result = Array.from(numbers,(value, index, array)=>{
//     return value*2
// })
// console.log(result)
// console.log(numbers)// this does not change the original array.

// // with
// //  Array with() method as a safe way to update elements in an array without altering the original array.
// let newnames = names.with(2, "soham")
// console.log(newnames)
// console.log(names)

// // spread 
// console.log(numbers.concat(...names))

// // rest
// [a, b, ...c] = names//deconstructing array
// console.log(names)
// console.log(c)// rest of the array other than 'Aarav', 'Ishita'. 

// // fill
// // names.fill("Aarav")
// // console.log(names)
// names.fill("sohamN", 2, 4)// name, starting index, end index(not included)
// console.log(names)

// // keys, values, entries
// console.log(Object.keys(numbers));
// console.log(Object.values(numbers));
// console.log(Object.entries(numbers));

// ================================================================================================================================================
// // JavaScript Arrays, Objects, and Custom Properties
// // Arrays Are Objects
// // Arrays have: Numeric indices (0, 1, 2…) for elements. A special length property that updates automatically. Under the hood, an array is just an object with extra array behaviors.
// // Since arrays are objects, you can attach extra properties to them:

// let arr = ["apple", "banana"];
// arr.index = 42;
// arr.input = "fruits";
// console.log(arr);//[ 'apple', 'banana', index: 42, input: 'fruits' ]

// console.log(arr.index);  // 42
// console.log(arr.input);  // "fruits"

// console.log(arr[0]);     // "apple"
// console.log(arr.length); // 2

// // Arrays are objects in JavaScript.
// // Any object can have properties.
// // Arrays just have additional internal behavior:
// // Numeric indices → behave like ordered elements.
// // length → automatically tracks the number of numeric indices.

// // loop
// // Loops that go over all enumerable keys => forIn loop, Object.keys(), Object.entries()