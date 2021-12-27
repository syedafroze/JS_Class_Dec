//if else  , else if

let num = 5;

if (num < 5) {
  console.log("less than 5");
} else if (num > 5) {
  console.log("greater than 5");
} else {
  console.log("equal to 5");
}

//ternary operator / conditional operator
//(conditon)?(true):(false)

//  {}->   braces  , () -> paranthesis

num == 5 ? console.log("equal") : console.log("! equal");

/*

if(conditon){
    //code 
}
else if (conditon){
  
}
else{
    //code 
}

*/
// switch case
// ternary operator

//swicth case

//operator ==  === >< >= <= && ||

let num1 = 5;
let num2 = 6;

let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  default:
    console.log("Invalid Operation");
}
