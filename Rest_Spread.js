
//Rest ... _. it collect indiviual values into an array 


//Spread ... - it will spread array/object values as indiviual values (unpacks)

let arr = [3,4,5];
//arr3= arr; 
let arr3 = [1,2 ].concat(arr);

let arr4 = [1, 2, ...arr]; 
console.log(arr4);


let company ={compName:"Infosys", compCity:"noida"}

let user = { name: "Niharika", id: 9, city: "hyd",...company };
console.log(user)

let [num1,...num2] = [4,5,6,7,8,9];
console.log(num1,num2);

