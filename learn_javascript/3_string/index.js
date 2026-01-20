let text = "soham studied in ahmedabad university"
// // All string methods return a new string. They don't modify the original string.

// // lenght
// console.log(text.length)

// // chatAt() 
// // The charAt() method returns the character at a specified index (position) in a string.
// console.log(text.charAt(3))

// // at
// console.log(text.at(3))//you can use negative values
// // or you can also use [] mehtod to access
// console.log(text[3])

// // concat
// console.log(text.concat(". which is located in the heart of the ahmedabad city"))

// // slice 
// // slice() extracts a part of a string and returns the extracted part in a new variable.
// console.log(text.slice(12, 20))
// console.log(text.slice(12))// we can also put negative values
// // first argument is the starting position and the 2nd is the ending position.
// // If you omit the second parameter, slice() will slice out the rest of the string.

// // substring
// // The difference is that start and end values less than 0 are treated as 0 in substring().
// console.log(text.substring(12, 20))
// console.log(text.substring(12))
// // If you omit the second parameter, substring() will slice out the rest of the string.

// // uppercase
// console.log(text.toUpperCase())
// // lowercase
// console.log(text.toLowerCase())

// // trim
// let text2 = "    soahm studied in ahmedabad university.      "// use this string for this example.
// console.log(text2)
// console.log(text2.trim())
// console.log(text2.trimStart())
// console.log(text2.trimEnd())

// // padding 
// let x = "x"
// console.log(x.padEnd(8,"p"))
// console.log(x.padStart(8,"p"))

// // repeat
// console.log(text.repeat(2))

// // // replace
// let text2 = "soham studies in ahmedabad university. soham also studies in millennium school"
// console.log(text2.replace("soham","samarth"))// replace only the first match.
// console.log(text2.replaceAll("soham", "samarth"))// replaces all the matches
// // we can also use regular expression
// let text3 = "soham studies in ahmedabad university. Soham also studies in millennium school"
// let newText = text3.replaceAll(/soham/gi, "samarth")
// console.log(text3);// does not change the original string
// console.log(newText);


// split
// x= "s o h a m"
// console.log(x.split(" "))// this splits the data into array. the text will separate on separator mentioned.

// // ===============================string search===============================================
// // indexof
// console.log(text.indexOf("university"))
// // the indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// // lastindexoff()
// // The lastIndexOf() method returns the index of the last occurrence of a specified text in a string. returns -1 if the string is not found
// console.log(text.lastIndexOf("university")) 
// // Both methods accept a second parameter as the starting position for the search:

// // search()
// // The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// console.log(text.search("university"))
// // The search() method cannot take a second start position argument.
// // The indexOf() method cannot take powerful search values (regular expressions).

// // match
// // this returns array of the matched strings.
// let text2 = "The rain in SPAIN stays mainly in the plain";
// console.log(text2.match(/ain/gi));
// console.log(Array.from(text2.matchAll(/ain/gi)));

// // includes
// console.log(text.includes("soham"))

// // startwith
// console.log(text.startsWith("soham"))// returns true or false
// // endswith
// console.log(text.endsWith("university"))// returns true or false







