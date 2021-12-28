//Array  ->  its a collection of data stored in single variable

//Indexes  0       1      2           3                                   4              5
let arr = [
  1,
  "string",
  [2, 3, 4],
  function () {
    console.log("funciton");
  },
  { name: "syed" },
  true,
];
//         0 1 2 3 4
let num = [2, 3, 4, 5];

//index           0       1     2
let twoDArray = [
  [2, 3],
  [4, 5, 9],
  [6, 7, 8, 10],
];
//        index  0 1    0 1    0 1

for (let i = 0; i < twoDArray.length; i++) {
  for (let j = 0; j < twoDArray[i].length; j++) {
    console.log(twoDArray[i][j]);
  }
}

//  camel case

//accessing values
//syntax    arrayName[indexValue]

// console.log(num[0]);
// console.log(num[1]);

for (let index = num.length; index >= 0; index--) {
  console.log(num[index]);
}
