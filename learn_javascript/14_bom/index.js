// let table = document.querySelectorAll(".notranslate")[1];
// let tr = table.querySelectorAll("tr");
// console.log(tr)
// let data = [];
// tr.forEach((value, index, array)=>{
//     data.push(value.firstElementChild.innerText)
// })
// console.log(data);

// property = ['closed', 'console', '', 'document', 'frameElement', 'frames', 'history', 'innerHeight', 'innerWidth', 'length', 'localStorage', 'location', 'name', 'navigator', 'opener', 'outerHeight', 'outerWidth', 'pageXOffset', 'pageYOffset', 'parent', 'screen', 'screenLeft', 'screenTop', 'screenX', 'screenY', 'sessionStorage', 'scrollX', 'scrollY', 'self', 'status', 'top'];

// methods = ['addEventListener()', 'alert()', 'atob()', 'blur()', 'btoa()', 'clearInterval()', 'clearTimeout()', 'close()', 'confirm()', 'focus()', 'getComputedStyle()', 'getSelection()', 'matchMedia()', 'moveBy()', 'moveTo()', 'open()', 'print()', 'prompt()', 'removeEventListener()', 'requestAnimationFrame()', 'resizeBy()', 'resizeTo()', 'scroll()', 'scrollBy()', 'scrollTo()', 'setInterval()', 'setTimeout()', 'stop()'];

// NOTE I HAVE NOT STUDIES EVERY WINDOW PROPERTY AND METHODS. THERE ARE MANY. IT IS BETTER FOR YOU TO JUST STUDY THE ONCE YOU WILL NEED AND REST AS NEEDED.
// // history
// history.back();
// history.forward();
// history.go();
// history.length;

// // inner height and width
// window.innerHeight;
// window.innerWidth;

// // location
// // window.location (or just location) is an object that represents the current URL of the page and lets you change it.
// console.log(location.href + "   =>   href");
// console.log(location.protocol + "   =>   protocol");
// console.log(location.host + "   =>   host");
// console.log(location.hostname + "   =>   hostname");
// console.log(location.port + "   =>   port");
// console.log(location.pathname + "   =>   pathname");
// console.log(location.search) + "   =>   search";
// console.log(location.origin + "   =>   origin");
// location.assign();//The assign() method loads a new document.
// location.replace()// Loads a new URL but replaces the current entry in history (so the back button won’t return).
// location.reload()// The reload() method reloads the current document. The reload() method does the same as the reload button in your browser.

// // navigator
// console.log(navigator.language)
// console.log(navigator.platform)
// console.log(navigator.onLine)
// console.log(navigator.cookieEnabled)
// console.log(navigator.geolocation);
// console.log(navigator.product);
// console.log(navigator.onLine);
// console.log(navigator.appName);
// console.log(navigator.userAgent);


// // experiment NOT RELATED TO WINDOW
// setInterval(()=>{
//     if(document.hidden){
//         let title = document.querySelector("title");
//         title.innerText = "hey come back"
//     }else{
//         console.log(document.hidden)
//         let title = document.querySelector("title");
//         title.innerText = "soham"
//     };
// },1000);
//  // OR
// document.addEventListener("visibilitychange", (e)=>{
//     e.preventDefault();
//     let title = document.querySelector("title");
//     if(document.hidden){
//         title.innerText = "hey come back 🔥";
//     }else{
//         title.innerText = "soham"
//     };
// });

