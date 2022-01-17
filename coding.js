//------------------------------- problem on array object ----------------------

let users = [
  {
    name: "syed",
    id: 9,
    city: "Hyd",
  },
  {
    name: "Renu",
    id: 13,
    city: "Noida",
  },
  {
    name: "Niharika",
    id: 12,
    city: "mumbai",
  },
  {
    name: "Vikas",
    id: 10,
    city: "Hyd",
  },
  {
    name: "Neha",
    id: 11,
    city: "mumbai",
  },
];

/*
{
"Hyd" :["syed","Vikas"],
"mumbai" :["Neha", "Niharika"],
"noida":["Renu"]
}
*/
let outputObj = {};
outputObj.Hyd = [];
outputObj.Mumbai = [];
outputObj.Noida = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].city == "Hyd") {
    outputObj.Hyd.push(users[i].name);
  } else if (users[i].city == "mumbai") {
    outputObj.Mumbai.push(users[i].name);
  } else if (users[i].city == "Noida") {
    outputObj.Noida.push(users[i].name);
  }
}
console.log(outputObj);

/*let res = user.reduce((obj,val)=> {
//    obj[val.city]=obj[val.city] ? [...obj[val.city],val.name]:[val.name];
  
//   return obj
  if(obj[val.city]){
    obj[val.city].push(val.name);
    return obj;
  }
  else{
    obj[val.city] =[val.name];
    return obj;
  }
} , {})

*/