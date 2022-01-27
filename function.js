// //function -> its a block of code that can invoked/called wherever neccesary

// //function declaration ,
// //function definition
// //fucntion call

// function greet() {
//   //function declaration
//   console.log("Hello"); //function definition
// }

// greet(); //function call

// console.log("how r u");

// greet();

// function Sum(num1, num2) {
//   //parameters
//   //   console.log(num1 + num2);//5
//   let sumVal = num1 + num2; //5
//   return sumVal;
// }



// //arguments

// let result = Sum(2, 3); //5
// console.log(result);

// /*
// any code below the return statement wont get executed 
// cannot return multiple  individual value (2,3,4) 

// */

// let fun = function(){console.log("fun")}

// let fun2 = (num1,num2)=>console.log("arrow funciton")

function sum(num1,num2){
  return num1+num2
}

let sum2 = (num1,num2)=>{ return num1+num2} ; 

let result = sum2(2,3);
console.log(result);


//fact 5! => 5*4*3*2*1
//           5*(5-1)*(5-2);



function fact(num){
  
  if(num==1){
    return 1
  }
  else{
    return num*fact(num-1);
  }
  
}

console.log(fact(5));


/*
fact(5) =>  return 5 * 24;
fact(4) = > return 4* 6
fact(3) => return 3 *2
fact(2) => return 2*1;
fact(1) => return  1


//----------------------
//hoisitng


*/

function A(){
  
  console.log("in A");//in A

   function B(){
    console.log("in B");
   return "done";
  }
  
  return B;
 
}


let res = A()();//currying 
console.log(res);//


//---------------------


//function greet(int a , int b)

function greet(name){
  console.log("hello"+ name);
}


function user(functionGreet , name){
 functionGreet(name);
  
}

user(greet, "syed");

//IFEE =Immediately Invoked Function Expression


(function fun(){console.log("fun");})()




//a function which is passed as an argument to another fucntion is 
//called callback funtion 

//and a function that accepts another function as an 
//paramter is called HOF (higher Order Function);

//

/*
Regular 
anonymous function
arrow 
recursive function
callback function
higher order fucntion 
IIFE
currying -> ()()()
*/

///------------------------ Default paramters
function Sum(a = 1, b = 1, c, d) {
  console.log(a + b, c, d);
}

Sum(2, 3);