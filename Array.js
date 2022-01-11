// //Array  ->  its a collection of data stored in single variable

// //Indexes  0       1      2           3                                   4              5
// let arr = [
//   1,
//   "string",
//   [2, 3, 4],
//   function () {
//     console.log("funciton");
//   },
//   { name: "syed" },
//   true,
// ];
// //         0 1 2 3 4
// let num = [2, 3, 4, 5];

// //index           0       1     2
// let twoDArray = [
//   [2, 3],
//   [4, 5, 9],
//   [6, 7, 8, 10],
// ];
// //        index  0 1    0 1    0 1

// // for (let i = 0; i < twoDArray.length; i++) {
// //   for (let j = 0; j < twoDArray[i].length; j++) {
// //     console.log(twoDArray[i][j]);
// //   }
// // }

// //  camel case

// //accessing values
// //syntax    arrayName[indexValue]

// // console.log(num[0]);
// // console.log(num[1]);

// // for (let index = num.length; index >= 0; index--) {
// //   console.log(num[index]);
// // }

// //  Array Methods

// //creating an array

// //Array literal
// let arr1 = [];

// //Array constructor
// let newArr = new Array();

// let numArr = [2, 3, 4];

// //push - adds a elemnt to last index ,
// //syntax arrayName.push(element);
// numArr.push(5);
// console.log(numArr);

// //unShift - add element to first index
// //synytax arrayName.unshift(elemnt)

// numArr.unshift(1);

// console.log(numArr);

// //pop() -> removes elemnt from the last index
// //arrayName.pop();

// numArr.pop();
// console.log(numArr);

// //shift -> removes element form first index
// numArr.shift();
// console.log(numArr);
// //           0 1 2 3 4
// let arr6 = [5, 6, 7, 8, 9]; //7,8
// arr6.splice(2, 2, 10); //[5,6,9]
// console.log(arr6);
// ///---------------------------------- SPLICE ----------------------------------
// //splice -> remove , add elemnt at any position of array
// //arrayName.splice(startIndex, no. of elemnts to be removed , elemnts to be added)

// //numArr.splice(1,0,6,7,8);
// //
// numArr.splice(1); //removes all the elemnts from index position 1
// console.log(numArr);

// //-----------------------  Slice ----------------------
// //slice -> use to make copy of an array
// //arrayName.slice(startIndex, endIndex+1)
// //          0 1 2 3 4 5
// let arr3 = [3, 4, 5, 6, 7, 8]; //4567

// // array object (reference datatypes)

// let copyArr = arr3.slice(1, 5);
// console.log(copyArr);

// let startValue = 4;
// let endValue = 6;

// let startIndex = arr3.indexOf(startValue);
// let endIndex = arr3.indexOf(endValue);
// console.log(startIndex, endIndex);

// let arr4 = arr3.slice(startIndex, endIndex + 1);
// // arr3.pop();
// console.log(arr3, arr4);

// //indexOf
// let arr5 = [1, 4, 3, 5, 3, 3];
// //[1,4,5]; //values which ddint get repeated
// //[1,4,3,5];// removing duplicates

// //lastIndexOf
// console.log(arr5.indexOf(3), arr5.lastIndexOf(3)); //2  5

// // arr3.pop();//[3,4]

// // console.log(arr3, arr4);//

// // let num2 =5;
// // let num3= num2;

// // num2++;

// // console.log(num2,num3);// 6,5

// let arr7 = [4, 5, 6, 7];
// //reverse()
// console.log(arr7.reverse());

// //sort () -> sorts the values in alphabatical order
// let arr8 = [3, 4, 2, 1, 5, 22]; //[1,2,3,4,5];
// let str = ["c", "b", "a", "android", "c++", "bubble"]; //
// //bubble sort
// console.log(arr8.sort((a, b) => b - a));

// //function

// //map

// let arr9 = [4, 5, 6, 1];
// //[16,25,36,1]

// function sqaure(num) {
//   return num * num;
// }
// let resArr = [];
// for (let i = 0; i < arr9.length; i++) {
//   resArr.push(sqaure(arr9[i]));
// }
// console.log(resArr);

// /*
// empty array
// function sqaure
// for loop
// push 
// */

// let resultArr = arr9.map((value, index) => {
//   return value * index;
// });
// console.log(resultArr);

// /*
// [16,25,36,1]


// */

// let arr10 = [3, 4, 6, 7, 9, 10];
// // //[4,6,10];
// // let newArr2 = [];
// // for (let i = 0; i < arr10.length; i++) {
// //   if (arr10[i] % 2 == 0) {
// //     newArr2.push(arr10[i]);
// //   }
// // }

// // console.log(newArr2);

// let filtered = arr10.filter((val, index) => {
//   if (val % 2 == 0) {
//     return val;
//   }
// });

// console.log(filtered);
// //[]

// let arr11 = [13, 14, 15, 22, 25 ,16];

// /*
// first scenario

// return true only if all values in array are less than 10 else return false 

// 2nd scenario
// return true atleast if one is less than 10 else return false ;

// */

// //sort 
// let arr12 = [2,3,22,44,4,5];
// //[2,3,4,5,22,44];

// //sort()

// arr12.sort((num1,num2)=>{return num2-num1});//2-3 -1
// console.log(arr12);

//swap 
let num = 1;
let num2 = 5;

//without using 3rd variable

num = num+num2;//6
num2 = num-num2;//1
num=num-num2;//5
console.log(`num is ${num},num2 is ${num2}`);//num is 5 , num2 is 1






//true -> atleast one   values is less than 10  return true , else return false ;
//false

// let flag = true;

// for (let i = 0; i < arr11.length; i++) {
//   if (arr11[i] > 10) {
//     flag = false;
//     break;
//   }
// }

// console.log(flag);//


//every 

// let flag = arr11.every((val)=>val<10);
// console.log(flag);

//some 

// let flag = arr11.some((val) => val < 10);//some
// console.log(flag);


//  let filteredArr = arr11.filter((val, index) => {
//    if (val<10) {
//      return flag;
//    }

//  });
//[]

//console.log(filteredArr.length == arr11.length ? true : false);


//forEach 




// reduce 
let arr13 = [2,3,4,5];

let res = arr13 .reduce((num1,num2)=>num1+num2 , 0 );
console.log(res);
/*
num1 = 10 ,num2= 2 => 12
num1= 12  , num2 = 3 => 15
num1= 15 , num2 =4   19
num1= 19 num2=5 = 24


*/
// let sum =0;
//  arr13.forEach((val)=> sum+=val) 
// console.log(sum);

//for of 
let arr14 = [2,3,4,5];

for(let i in arr14){//index
    console.log(arr14[i])
}

for (let i of arr14) {
  //index
  console.log(i);
}

//for in 
//arr[8] of -> value 