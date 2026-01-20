// =========================================================================cookies=========================================================================
// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.cookies were invented to solve the problem "how to remember information about the user". When a user visits a web page, his/her name can be stored in a cookie. Next time the user visits the page, the cookie "remembers" his/her name.
// /Cookies are saved in name-value pair. When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.
// JavaScript can create, read, and delete cookies with the document.cookie property.
// cookies are created ususally in two ways 1) from the server and 2)form javascript or user end.
// Browsers keep cookies in a cookie store, which is separate for each domain.

// how are cookies made
// A key=value pair (the actual data)
// Optional attributes like expires (Always in GMT/UTC, not local time ), max-age, path, domain, secure, samesite.
// details.

// name=value → Required. Key-value pair of your cookie.
// expires=DATE → Expiration date/time (in GMT/UTC). If omitted, cookie is a session cookie (deleted when browser closes).
// max-age=SECONDS → Lifetime in seconds (alternative to expires).=
// path=PATH → URL path for which the cookie is valid (default: current path).
// domain=DOMAIN → Domain the cookie applies to (default: current domain).
// secure → Cookie is only sent over HTTPS (not HTTP).
// httponly → (Server only) Makes cookie inaccessible to JavaScript (document.cookie). Can’t be set via JS.
// samesite → Restricts cross-site sending:
// Strict → only sent to same-site requests
// Lax → sent for top-level navigations (default in modern browsers)
// None → allow cross-site (must also use Secure)


// DETAIL STUDY OF ALL ATTRIBUTES

// ========================PATH
// Path = current path (e.g., if you are on example.com/shoes, the cookie is scoped to /shoes and all sub-paths under /shoes/...).Domain = current domain (e.g., example.com).
// A cookie set at "/" is visible everywhere (/, /shoes, /shoes/nike, etc.).A cookie set at /shoes is visible only at /shoes and below, but not at "/" or "/about".
// path attribute "/" is for the whole site. Accessible from example.com/, example.com/shoes, example.com/anything.
// document.cookie = "shoesCookie=123; path=/shoes";✅ Accessible from example.com/shoes and example.com/shoes/nike. ❌ Not accessible from example.com/ or example.com/about.

// eg-domain => example.com
// document.cookie = "siteCookie=abc; path=/"; => global scope
// document.cookie = "shoesCookie=123; path=/shoes"; => Shoes section cookie for /shoes
// Now:
// At example.com/ → only siteCookie=abc
// At example.com/shoes → both siteCookie=abc; shoesCookie=123
// At example.com/shoes/nike → both cookies
// At example.com/about → only siteCookie=abc

// note
// Set site-wide cookies with path=/.
// Set section-specific cookies with path=/section.
// Browsers automatically merge them when you’re inside the section.

// =========================DOMAIN ===> this is very confusing.
// Top-Level Domain (TLD):     .com
// Second-Level Domain (SLD):  example.com
// Subdomain:                  shop.example.com
// Sub-subdomain:              support.shop.example.com

// Rule of thumb: The Domain you set must be the same as the current host or a parent suffix. You can’t set a cookie for a sibling or a child host. No domain attribute → host-only (stays on exactly the host that set it). With domain=example.com → shared with parent and all subdomains. Parent (example.com) cannot “scope down” to shop.example.com, but subdomain (shop.example.com) can “scope up” to example.com.

// Subdomain → Parent (Upward)
// A subdomain can set a cookie for the parent. Example: shop.example.com can set a cookie for example.com. Once set, the parent and all other subdomains can also use it (like blog.example.com, cdn.example.com).
// Parent → Subdomain (Downward)
// The parent cannot set a cookie just for one subdomain. Example: example.com cannot create a cookie only for shop.example.com. The browser won’t allow it.But if the parent sets a cookie for itself (example.com), all subdomains automatically get it too.

// So in short:
// Validity → downward (applies to parent + children).
// Setting → upward (children can set for themselves or parents).

// =================expiration and max-age
// There are three broad types of cookies based on expiration:
// (a) Session cookies
// No explicit expiration set. Live only for the duration of the browser session. deleted automatically once the user closes the browser (all tabs of that site).
// (b) Persistent cookies
// Explicitly given an expiration time (Expires) or a duration (Max-Age). Stored on disk and survive browser restarts until expiration.
// (c) Deleted cookies
// You can explicitly remove a cookie by setting its expiration to a past date or Max-Age=0.

// Expires vs Max-Age
// both specify lifespan, but slightly different:
// Expires → Absolute date/time (GMT).
// Max-Age → Relative duration (in seconds) from when the cookie was set.
// If both are present, Max-Age takes priority (per spec).
// Expiration vs Inactivity: Expiration is absolute. If you want cookies to expire after inactivity, you need server-side logic, not just cookie expiration.
//  TOPICS LEFT TO LEARN=> secure, httpOnly, sameSite.


// CRUD with cookies(create, read, update, delete)
// //With JavaScript, a cookie can be created like this:
// document.cookie = "username=soham nanavati without expiration; path =/"
// document.cookie = "user=soham nanavati with expiration; path =/; expires=Sun, 23 Aug 2026 00:00:00 GMT;secure "

// // how to read a cookie
// let cookie = document.cookie;
// // console.log(cookie)// the cookie is in form of string

// // update cookie
// document.cookie = "username=soham nanavati new with expire ; path =/; expires=Sun, 23 Aug 2026 00:00:00 GMT; secure"

// // deleting a cookie 
// document.cookie = "username=soham nanavati new with expire ; path =/; expires=Wed, 23 Aug 2000 00:00:00 GMT; secure"


// // using decodeURIComponent
// console.log(decodeURIComponent(document.cookie));

// // CREATE A COOKIE 
// document.cookie = "username1=sohamNanavati; path=/; expires=Sun, 23 Aug 2026 00:00:00 GMT; secure"
// document.cookie = "username2=samarthNanavati; path=/; expires=Sun, 23 Aug 2026 00:00:00 GMT; secure"

// // function to create cookie
// function createCookie(key, value, expires){
//     let todayDate = new Date();
//     let expirationDuration = expires*24*60*60*1000;
//     let exp = todayDate.getTime() + expirationDuration;//getting total milliseconds form 1970
//     let expDate = new Date(exp);
//     document.cookie = `${key}=${value}; path=/; expires=${expDate}`
// }
// createCookie("username3", "nishitPatel", 365);//cookie created.

// // READ A COOKIE
// console.log(document.cookie) // this is the basic way. this will return string.

// // without function
// // //We must transform the cookie string into a JavaScript object (or Map) so that the data can be accessed as key-value pairs.
// let cookieString = document.cookie;// Get all cookies as a single string
// let cookieArray = cookieString.split("; ");// Split the string into an array, where each element is "key=value" string.
// let CookieObject = {};// Create an empty object to store cookies
// for (let data of cookieArray) {
//     let [key, value] = data.split("=");// Split each "key=value" string into separate variables
//     console.log(`${key} : ${value}`);// Print each cookie as key : value
//     CookieObject[key] = value;// Now CookieObject holds all cookies in { key: value } format
// }

// // with function
// // We can wrap the above logic into a function, so when the user clicks the "readCookies" button, this function is called.
// function readCookies(){
//     let cookieString = document.cookie;// Get all cookies as a single string
//     let cookieArray = cookieString.split("; ");// Split the string into an array, where each element is "key=value" string.
//     let CookieObject = {};// Create an empty object to store cookies
//     for (let data of cookieArray) {
//     let [key, value] = data.split("=");// Split each "key=value" string into separate variables
//     console.log(`${key} : ${value}`);// Print each cookie as key : value
//     CookieObject[key] = value;// Now CookieObject holds all cookies in { key: value } format
//     }
//     console.log(CookieObject);
//     return CookieObject
// }
// readCookies()

// // UPDATE A COOKIE
// // We can update a cookie by rewriting it with the same key but a new value (and attributes).
// // easy update
// document.cookie = "username1=sarveshPawaskar; path=/; expires=Sun, 23 Aug 2026 00:00:00 GMT;secure"
// // update can also be done through function
// function updateCookies(key, value,expires){
//     let todayDate = new Date();
//     let expirationDuration = expires*24*60*60*1000;
//     // console.log(expirationDuration);
//     let exp = todayDate.getTime()+ expirationDuration;
//     // console.log(exp);
//     let expDate = new Date(exp).toUTCString();
//     // console.log(expDate);
//     document.cookie = `${key}=${value};path=/; expires=${expDate}`;
// }
// updateCookies("username1","namrataNanavati",365);



// // DELETE A COOKIE
// function deleteCookie(key){
//     let expirationDate = new Date("2000-08-23").toUTCString();
//     document.cookie = `${key} = nothing; path=/; expires=${expirationDate}`;
// }
// deleteCookie("username4");

// // summary
// // create cookie
// function createCookie(key, value, expires){
//     let todayDate = new Date();
//     let expirationDuration = expires*24*60*60*1000;
//     let exp = todayDate.getTime() + expirationDuration;//getting total milliseconds
//     let expDate = new Date(exp);
//     document.cookie = `${key}=${value}; path=/; expires=${expDate}`
// }
// // read a cookie
// function readCookies(){
//     let cookieString = document.cookie;// Get all cookies as a single string
//     let cookieArray = cookieString.split("; ");// Split the string into an array, where each element is "key=value" string.
//     let CookieObject = {};// Create an empty object to store cookies
//     for (let data of cookieArray) {
//     let [key, value] = data.split("=");// Split each "key=value" string into separate variables
//     //console.log(`${key} : ${value}`);// Print each cookie as key : value
//     CookieObject[key] = value;// Now CookieObject holds all cookies in { key: value } format
//     }
//     console.log(CookieObject);
//     // return CookieObject
// }
// // udpdate a cookie
// function updateCookies(key, value,expires){
//     let todayDate = new Date();
//     let expirationDuration = todayDate*24*60*60*1000;
//     let exp = todayDate.getTime()+expirationDuration;
//     let expDate = new Date(exp);
//     document.cookie = `${key}=${value};path=/; expires=${expDate}`;
// }
// // delete a cookie
// function updateCookies(key, value,expires){
//     let todayDate = new Date();
//     let expirationDuration = todayDate*24*60*60*1000;
//     let exp = todayDate.getTime()+expirationDuration;
//     let expDate = new Date(exp);
//     document.cookie = `${key}=${value};path=/; expires=${expDate}`;
// }

// ===================================================================local storage==========================================================================
// The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
// there is a storage object. it can be either local storage object or a session storage object.

// // CRUD operations
// // ===============setItem() method CREATE 
// // The localStorage.setItem() method stores a data item in a storage.
// localStorage.setItem("username1","sohamNanavati");
// localStorage.setItem("username2","samarthNanavati");//The setItem() method sets the value of the specified Storage Object item. the setItem() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorage object.

// // =================getItem() method READ method
// let data = localStorage.getItem("username1");
// console.log(data);//The getItem() method returns value of the specified Storage Object item. the getItem() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorage object

// // ===================update items UPDATE using localStorage.setItems()
// localStorage.setItem("username1", "namrataNanavati")//you can directly update the items by setting the localstorage.

// // // ==================removeItem() DELETE
// localStorage.removeItem("username1")//The removeItem() method removes the specified Storage Object item.The removeItem() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorage object.

// localStorage.clear()//The clear() method removes all the Storage Object item for this domain.The clear() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorrage object.

// // ==================key 
// console.log(localStorage.key(0));// The key() method returns name of the key with the specified index.The key() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorrage object.

// // =================length
// console.log(localStorage.length);//The length property returns the number of items stored in the browsers Storage Object, for this particular domain.

// all the above mentioned methods can also be used for session storage

// now we will create funciton for storage object

// // CREATE
// function createStorage(method, key, value){
//     method.setItem(key, value);
// }
// createStorage(localStorage, "username1", "priyankaNanavati");
// createStorage(localStorage, "username2", "rajeshNanavati");
// createStorage(sessionStorage, "username3", "pratikPatel");

// // READ 
// let myStorageObject = {};
// function readStorage(method,methodName){
//     myStorageObject[methodName] = {};
//    for(let i = 0; i < method.length; i++){
//     let key = method.key(i);
//     let value = method.getItem(key);
//     // console.log(`${key} : ${value}`);
//     myStorageObject[methodName][key.toString()] = value.toString();
// }
// console.log(myStorageObject)// we can also return this data
// }
// readStorage(localStorage, "localStorage")
// readStorage(sessionStorage, "sessionStorage")

// // READ 
// let myStorageObject = {};
// function readStorage(method) {
//     let methodName;
//     if (localStorage === method) {
//         methodName = "localStorage";
//     } else {
//         methodName = "sessionStorage";
//     }

//     myStorageObject[methodName] = {};
//     for (let i = 0; i < method.length; i++) {
//         let key = method.key(i);
//         let value = method.getItem(key);
//         // console.log(`${key} : ${value}`);
//         myStorageObject[methodName][key.toString()] = value.toString();
//     }
//     console.log(myStorageObject)// we can also return this data
// }
// readStorage(localStorage);
// readStorage(sessionStorage);

// // update
// function updateStorage(method, key, value){
//     method.setItem(key, value);
// }

// updateStorage(localStorage, "username1", "virat")
// updateStorage(sessionStorage, "username3", "anushka")

// // delete
// function deleteStorage(method, key){
//     method.removeItem(key);
// };
// deleteStorage(localStorage,"username1");
// deleteStorage(localStorage,"username2");
// deleteStorage(sessionStorage,"username3");
