let user = {
  name: "syed",
  id: 9,
};

let getName = function (msg, msg2, msg3) {
  //this.city = "India";  //this 
  return this.name + " " + msg + " " + msg2 + " " + msg3;
};

let car = {
  name: "city",
  color: "white",
};

//call , apply , bind

//call- it is used to bind a function with a object ,and the argumnets
//       to the function are passed as indiviual

//apply - it is used to bind a function with a object ,and the argumnets
//        to the function are passed in an array.

//bind -  binds the  method with the object ,and returns a function.

console.log(getName.apply(user, ["tq", "welcome", "take care"]));
console.log(user);
getName.call(car, "tc", "welcome2", "take care");
console.log(car);
getName.call(car, "tc1", "welcome1", "take care1");

let bindedCar = getName.bind(car);

console.log(bindedCar("tc", "welcome2", "take care"));
console.log(bindedCar("tc", "welcome4", "take care"));
