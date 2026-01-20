let date = new Date()
// different format "year-month-date" or "month/date/year" or "25 jan 2025" or "jan 25 2025"
// console.log(date);

// // get methods on date
// //year
// console.log("year : " + date.getFullYear());
// //month
// console.log("month : " + date.getMonth());// 0-11
// //date
// console.log("date : " + date.getDate());// 1-31
// // day
// console.log("day : " + date.getDay());//0-6
// // hour
// console.log("hour : " + date.getHours());// 0-23
// // minutes
// console.log("munites : " + date.getMinutes()); //0-59
// // seconds
// console.log("seconds : " + date.getSeconds()); // 0-59
// // milliseconds
// console.log("milliseconds : " + date.getMilliseconds()); // 0-999
// // gettime
// console.log(date.getTime());
// console.log(Date.now());

// // time differece
// console.log(date.getTimezoneOffset())

// // UTC
// console.log(date.getUTCFullYear());
// console.log(date.getUTCMonth());
// console.log(date.getUTCDate());
// console.log(date.getUTCDay());
// console.log(date.getUTCHours());
// console.log(date.getUTCMinutes());
// console.log(date.getUTCSeconds());
// console.log(date.getUTCMilliseconds());

// // parse
// let mil = Date.parse(date)
// console.log(mil);//converts the date into milliseconds starting from January 1, 1970
// console.log(new Date(mil));//convert the milliseconds back to date.

// // setting the date
let d = new Date("2023-01-01")

// console.log(d.setFullYear(2022))//This number represents the updated date and time in milliseconds.
// console.log(d)// this both methods produces completely different results.

// console.log(d.setMonth(2))//This number represents the updated date and time in milliseconds.
// console.log(d)

// console.log(d.setDate(25))//This number represents the updated date and time in milliseconds.
// console.log(d)

// console.log(d.setHours(22))//This number represents the updated date and time in milliseconds.
// console.log(d)

// console.log(d.setMinutes(44))//This number represents the updated date and time in milliseconds.
// console.log(d)

// console.log(d.setSeconds(44))//This number represents the updated date and time in milliseconds.
// console.log(d)

// console.log(d.setMilliseconds(232))//This number represents the updated date and time in milliseconds.
// console.log(d)

// console.log(date.setTime(1332403882588));//This number represents the updated date and time in milliseconds.
// console.log(date)

// // // how to convert the date into string
// console.log(`toISOString=> ${date.toISOString()}`);
// console.log(`toJSON => ${date.toJSON()}`);
// console.log(`toUTCString => ${date.toUTCString()}`);
// console.log(`toDateString => ${date.toDateString()}`);
// console.log(`toLocaleDateString => ${date.toLocaleDateString()}`);
// console.log(`toLocaleTimeString => ${date.toLocaleTimeString()}`);
// console.log(`toLocaleString => ${date.toLocaleString()}`);
// console.log(`toString => ${date.toString()}`);
// console.log(`toTimeString => ${date.toTimeString()}`);


