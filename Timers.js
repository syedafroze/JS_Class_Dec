//setTimeout
//setInterval
//setImmediate

console.log("hello");

// setTimeout(()=>{console.log("visit again");} , 2000);//

//1000ms = 1sec

let firstInterval = setInterval(() => {
  console.log("hello");
}, 3000);
//for every 3sec it executes callbacl function

//session id
setTimeout(() => {
  clearInterval(firstInterval);
}, 10000);

console.log("Thank you");
