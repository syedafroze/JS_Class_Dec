let str = "hello world" ;

let res = str.split(" ");
res = res.map((val)=> {  return val.split('').reverse().join('')}).join(' ');
console.log(res);


// [2,4,3,1];

// [10,8,4,1];


let numArr = [2, 4, 3, 1];

// let res2 = numArr.map((val,index)=>val+=numArr[index]);
//                                  //val= val+numArr[index]
//                                  //val = 2+2;
//                                  //val=4
// //[12,12,12,12]
// let res2 = numArr.reduce((val1,val2)=> val1+val2);
// console.log(res2);
//delete arr[index]


let res3 = numArr.map((val,index)=> numArr.slice(index).reduce((val1,val2)=> val1+val2) );
//[10]
console.log(res3);

// let res = numArr.map((val,index)=> val+=)














//.map((val)=>{ val.split('').reverse().join('')});
//console.log(res);



//  ["hello" , "world"] 
//  "hello" [].reverse().join('')

//join -> array to string
//split -> string to array