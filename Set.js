let arr = [4, 5, 6, 7, 2, 4, 6];
//Set - doesnt accept duplicates.
//Set -> accepts both primitive and Reference Datatypes

//WeakSet - > Accepts only Reference Datatype  .

let arr2 = [{ name: "vint" }, { name: "syed" }];

// let arr2 = [
//   [2, 3, 4],
//   [4, 5, 6],
//   [5, 6],
// ];

//[4,5,6,7,2,1]

let res1 = new WeakSet(arr2);

let res2 = [...new Set(arr)];

console.log(res2, res1);
