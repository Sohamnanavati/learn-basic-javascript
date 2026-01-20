//==========================================================sets===========================================================
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// ================================== how to create sets ===========================
// Passing an array to new Set()
// Create an empty set and use add() to add values

// // method 1 => making set through Passing an array to new Set()
// let set = new Set(["Rohan", "Ishita","Rohan","Meera","Kabir","Anaya","Vihaan","Sanya","Arjun","Kavya","Aarav"]);
// console.log(set)// it has skiped the Rohan the second time. therefore the data is all unique.

// // method 2 => another way to create a set is through adding it
// let set = new Set()
// set.add("Rohan");
// set.add("Ishita");
// set.add("Meera");
// set.add("Kabir");
// console.log(set)

// // type of
// let set = new Set(["Rohan", "Ishita","Rohan","Meera","Kabir","Anaya","Vihaan","Sanya","Arjun","Kavya","Aarav"]);
// console.log(typeof set)// return object
// console.log( set instanceof Set)// return true. instanceof will help us identify which type of object it is. there are may types of object like dates, object, array, function and all. "typeof" will just return us object and not the object type.

// ===============================set methods==============================================
let set = new Set(["Rohan", "Ishita","Rohan","Meera","Kabir","Anaya","Vihaan","Sanya","Arjun","Kavya","Aarav"]);

// // add
// set.add("Soham")
// console.log(set)

// // size
// console.log("length :",set.size)

// // has 
// console.log("has :",set.has("Soham"));

// // clear
// set.clear()
// console.log("clear :", set)

// // delete
// set.delete("Rohan")
// console.log("delete :",set)

// // values
// console.log("values :",set.values());

// // keys
// console.log("keys :",set.keys());// The keys() method returns an Iterator object with the values in a set. Since a set has no keys, the keys() method returns the same as values().

// // entries
// console.log("entries :",set.entries()) // he entries() method is supposed to return a [key,value] pair from an object. Since a set has no keys, the entries() method returns [value,value]. This makes Sets compatible with Maps.

// // for each
// set.forEach((value, index, array)=>{
//     console.log(`${value} : ${index}`)
// });

// //============notes difference between array and set=============

// array
// Ordered collection of elements
// duplicates allowed
// order => Indexed (0,1,2,…)
// access => By index (arr[0])
//Use case => When order & duplicates matter

// set 
// Collection of unique values only
// deuplicates Not allowed
// order => Preserves insertion order, no indexes like array.[0, 1, 2, 3, 4,....]
// Access => No direct index access (must iterate)
// Use case => When uniqueness & fast lookup matter

// //=======================================sets logics===============================================
let setA = new Set([1, 2, 3, 4, 5]);
let setB = new Set([4, 5, 6, 7, 8]);

// // union
// let newSet = setA.union(setB) // A union B
// console.log(newSet)

// // intersections
// let newSet = setA.intersection(setB) // A and B
// console.log(newSet)

// // difference
// let newSet1 = setA.difference(setB) // only A
// let newSet2 = setB.difference(setA) // only B
// console.log(newSet1)
// console.log(newSet2)

// // symmetricDifference
// let newSet = setA.symmetricDifference(setB) // only A + only B
// console.log(newSet)

// // isSubsetOf
// let setC = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
// let setD = new Set([1, 2, 3]);
// console.log(setD.isSubsetOf(setC)); // true
// console.log(setC.isSubsetOf(setD)) // false

// // isSupersetOf
// console.log(setC.isSupersetOf(setD)) // true
// console.log(setD.isSupersetOf(setC)) // false

// // isDisjointFrom
// let setE = new Set([1,2,3,4,5]);
// let setF = new Set([6,7,8,9,10]);
// console.log(setE.isDisjointFrom(setF));// true

// // we can convert Set into array and then, after array opertions, we can again convert it into Set.
// let x = new Set([1,2,3,4,5,6,7,8,9])
// console.log(x instanceof Set);// true
// let y = [...x]
// console.log(y instanceof Array);// returns true
// // do the operations that you want and then again convert it into Set. there are some operations that we cant do in set since it is not indexed. so we can convert it into array and then do all that opeartion.
// x = new Set([y]);
// console.log(x instanceof Set); // true

//==========================================================maps===========================================================
// note there is a difference between map-loop and map-dataStructure in js
// A Map object holds key-value pairs where the keys can be any datatype.

// ================================== how to create map ===========================
// Passing an Array to new Map()
// Create a Map and use Map.set()

// // method 1 => Passing an Array to new Map()
// let map = new Map([
//     ["apple", 500],
//     ["banana", 200],
//     ["kiwi", 100]
// ])
// console.log(map)

// // method 2 => Create a Map and use Map.set()
// let map = new Map();
// map.set("apple", 500);
// map.set("banana", 300);
// map.set("kiwi", 100);
// console.log(map)

// ===============================map methods==============================================
let map = new Map([
    ["apple", 500],
    ["banana", 200],
    ["kiwi", 100],
    ["mango", 600]
]);

// // get()
// // You get the value of a key in a map with the get() method
// console.log(map.get("apple"))

// // set()
// // You can add elements to a map with the set() method
// map.set("mango", 600);
// console.log(map)

// // size
// // The size property returns the number of elements in a map
// console.log(map.size)

// // delete
// map.delete("apple");
// console.log(map)

// // clear()
// // The clear() method removes all the elements from a map
// map.clear();
// console.log(map) // empty map object

// // has()
// // The has() method returns true if a key exists in a map
// console.log(map.has("apple")) // true

// // for each 
// map.forEach((value, index, array)=>{
//     console.log(`${index} ${value}`)
// })

// entries
// console.log(map.entries());

// // keys
// console.log(map.keys());

// // values
// console.log(map.values());

// // group by 
// let newMap = Map.groupBy(map, (value, index, array)=>{
//     return value[1] > 200 ? "ok" : "low";
//     console.log(value);
// })
// console.log(newMap)