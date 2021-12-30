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

// for (let i = 0; i < twoDArray.length; i++) {
//   for (let j = 0; j < twoDArray[i].length; j++) {
//     console.log(twoDArray[i][j]);
//   }
// }

//  camel case

//accessing values
//syntax    arrayName[indexValue]

// console.log(num[0]);
// console.log(num[1]);

// for (let index = num.length; index >= 0; index--) {
//   console.log(num[index]);
// }



//  Array Methods 

//creating an array 

//Array literal 
let arr1 = [];

//Array constructor
let newArr = new Array();


let numArr = [2,3,4];

//push - adds a elemnt to last index ,
//syntax arrayName.push(element);
numArr.push(5);
console.log(numArr);

//unShift - add element to first index 
//synytax arrayName.unshift(elemnt)

numArr.unshift(1);

console.log(numArr);


//pop() -> removes elemnt from the last index
//arrayName.pop();

numArr.pop();
console.log(numArr);

//shift -> removes element form first index
numArr.shift();
console.log(numArr);
//           0 1 2 3 4 
let arr6 =[ 5,6,7,8,9];//7,8
arr6.splice(2,2 , 10);//[5,6,9]
console.log(arr6)
///---------------------------------- SPLICE ----------------------------------
//splice -> remove , add elemnt at any position of array 
//arrayName.splice(startIndex, no. of elemnts to be removed , elemnts to be added) 

//numArr.splice(1,0,6,7,8);
//
numArr.splice(1);//removes all the elemnts from index position 1 
console.log(numArr);

//-----------------------  Slice ----------------------
//slice -> use to make copy of an array
//arrayName.slice(startIndex, endIndex+1)
//          0 1 2 3 4 5
let arr3 = [3,4,5,6,7,8];//4567

// array object (reference datatypes)



let copyArr = arr3.slice(1,5);
console.log(copyArr);

let startValue = 4;
let endValue = 6;

let startIndex = arr3.indexOf(startValue);
let endIndex = arr3.indexOf(endValue);
console.log(startIndex,endIndex);

let arr4 = arr3.slice(startIndex,endIndex+1);
// arr3.pop();
console.log(arr3,arr4);


//indexOf 
let arr5 =[1,4,3,5,3,3];
//[1,4,5]; //values which ddint get repeated
//[1,4,3,5];// removing duplicates

//lastIndexOf 
console.log(arr5.indexOf(3) , arr5.lastIndexOf(3));//2  5







// arr3.pop();//[3,4]

// console.log(arr3, arr4);//

// let num2 =5;
// let num3= num2;

// num2++;

// console.log(num2,num3);// 6,5



let arr7 = [4,5,6,7];
//reverse()
console.log(arr7.reverse());

//sort () -> sorts the values in alphabatical order 
let arr8= [3,4,2,1,5,22] ;//[1,2,3,4,5];
let str = ["c","b","a","android", "c++","bubble"] ; //
//bubble sort 
console.log(arr8.sort((a,b)=>b-a)) ;


//function 

