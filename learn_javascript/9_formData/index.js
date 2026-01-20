let form = document.getElementById("fromElement");

// // method 1
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const age = document.getElementById("age").value;
//     let payload = {
//         firstName : firstName,
//         lastName : lastName,
//         age : age
//     };
//     console.log(payload)
// })
// method 2=========================using form data========================
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let data = new FormData(form);
//     // FORM DATA METHODS
//     // append method
//     data.append("father", "rajeshKumar");//The append() method of the FormData interface appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.The difference between set() and append() is that if the specified key already exists, set() will overwrite all existing values with the new one, whereas append() will append the new value onto the end of the existing set of values.

//     // get method
//     data.append("firstName", "samarth");
//     console.log("get :",data.get("firstName"));//The get() method of the FormData interface returns the first value associated with a given key from within a FormData object. If you expect multiple values and want all of them, use the getAll() method instead. in this method we have only one value so its fine.

//     // getall method
//     console.log("getAll :",data.getAll("firstName"));//The getAll() method of the FormData interface returns all the values associated with a given key from within a FormData object.

//     // has
//     console.log("has firstName :",data.has("firstName"));//The has() method of the FormData interface returns whether a FormData object contains a certain key.

//     // keys
//     console.log("keys :",Array.from(data.keys()));

//     // values
//     console.log("values :",Array.from(data.values()));

//     // entries()
//     console.log("entries :",Array.from(data.entries()));

//     // delete
//     console.log("before delete:",Array.from(data.entries()));
//     data.delete("father");
//     data.delete("firstName");// The delete() method of the FormData interface deletes a key and its value(s) from a FormData object.
//     console.log("delete after :",Array.from(data.entries()));

//     // set();
//     console.log("set before :",Array.from(data.entries()));
//     data.set("firstName", "soham");
//     console.log("set after :",Array.from(data.entries()));//The set() method of the FormData interface sets a new value for an existing key inside a FormData object, or adds the key/value if it does not already exist. The difference between set() and append() is that if the specified key does already exist, set() will overwrite all existing values with the new one, whereas append() will append the new value onto the end of the existing set of values.
//     for(let [key, value] of data){
//         console.log(`${key} : ${value}`)
//     };

// });

