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

  getName(){
    console.log(this.name)
  }

}






let user = {};

user.name = "syed";

let user1 = new createUser3("syed", 7);

let user2 = new createUser3("Renu", 17);
console.log(user1, user2);

//["name","id","city"]

let user3 ={
  name:"syed",
  id:9,
  city:"hyd",
  }

//[] ->  user3.name

//C struct (structure )

//[2,3,4,5]
//Dear Stupid 

// let result =[];
// for(let i in user3){
//   result.push(i);
// }
// console.log(result);
//

///Object.keys()

let userKeys = Object.keys(user3);
let userKeys2 = Object.values(user3);
console.log(userKeys2);



