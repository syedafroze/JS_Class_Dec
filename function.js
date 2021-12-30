//function -> its a block of code that can invoked/called wherever neccesary

//function declaration ,
//function definition
//fucntion call

function greet() {
  //function declaration
  console.log("Hello"); //function definition
}

greet(); //function call

console.log("how r u");

greet();

function Sum(num1, num2) {
  //parameters
  //   console.log(num1 + num2);//5
  let sumVal = num1 + num2; //5
  return sumVal;

}
//arguments


let result = Sum(2, 3); //5
console.log(result);

/*
any code below teh return statement wont get executed 
cannot return multiple  individual value (2,3,4) 

*/
