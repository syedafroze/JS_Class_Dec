//promise - use to avoid callback hell

let promise = new Promise((res, rej) => {
  if (!true) {
    res();
  } else {
    throw Error("failed to fetched ");
  }
}).then(
  () => console.log("success"),
  (error) => console.log(error)
);

//promise chaining

let promise = new Promise((res, rej) => {
  if (!true) {
    res();
  } else {
    rej(Error("failed to fetched "));
  }
}).then(() => {
  console.log("success");

  return new Promise((res, rej) => {
    if (!true) {
      res("success2");
    } else {
      rej("failure2");
    }
  });
});

console.log(promise);
promise.then((msg) => console.log(msg)).catch((msg) => console.log(msg));

///---------------

let promise = new Promise((resolve, reject) => {
  let response = fetch("https://jsonplaceholder.typicode.com/todo/1");
  response.then((val) => {
    if (val.status == 200) {
      resolve("success");
    } else {
      reject(Error("Invalid Api"));
    }
  });
})
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
//------------------------------

let promise1= new Promise((res,rej)=>{
  setTimeout(()=>{
    res("promise1");
  },2000)
  
});

let promise2= new Promise((res,rej)=>{
  setTimeout(()=>{
    res("promise2");
  },1000)
  
});

let promise3= new Promise((res,rej)=>{
  setTimeout(()=>{
    res("promise3");
  },3000)
  
});



// Promise.all([promise1,promise2,promise3]).then((res)=> console.log(res)).catch((msg)=> console.log(msg));
// //if any promise fails it will stop ,and returns failed promise result

// Promise.allSettled([promise1,promise2,promise3]).then((res)=> console.log(res)).catch((msg)=> console.log(msg));
// //it executes all the promise irrespective if any promise got failed 



Promise.race([promise1,promise2,promise3]).then((res)=> console.log(res))
//returns first promise that got fulllfilled or rejected 
