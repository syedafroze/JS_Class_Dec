//Object -> its a data structure which stores data in form of key value pair

/*
int color , 
let color ="white",
let model = "civic"
let fueltype = "petrol"
let start = 
 

*/

let Car = {
  color: "white",
  name: "civic",
  fuelType: "petrol",
  start: () => console.log("started"),
};

console.log(Car);

// let user ={
//     name:"syed",
//     id:9
// }
// let user2 ={
//     name:"renu",
//     id:10
// }

function createUser(userName, userId) {
  let user = {
    name: userName,
    id: userId,
  };
  return user;
} //factory function

class createUser3{
  constructor(userName, userId) {
    //{}
    this.name = userName;
    this.id = userId;
  }
}

let user = {};

user.name = "syed";

let user1 = new createUser3("syed", 7);

let user2 = new createUser3("Renu", 17);
console.log(user1, user2);


