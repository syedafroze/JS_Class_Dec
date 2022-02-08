let makeModel = {
  price: "70k",
};
let makeModel2 = {
  price: "70k",
};

let Obj = {
  name: "dell",
  [makeModel]: "80",
  [makeModel2]: "90",
};

let map = new Map();

map.set(makeModel, 80).set(makeModel2, 90); //timer 5 sec
map.set("name", "Amit");

console.log(map.get("name"));

//-------------------------

let loginCount = new Map(); //constructor method of Map

let user1 = {
  name: "syed",
  id: 9,
};

let user2 = {
  name: "Afroze",
  id: 19,
};

let users = [
  {
    name: "syed",
    id: 9,
  },
  {
    name: "Afroze",
    id: 19,
  },
  {
    name: "Aditya",
    id: 29,
  },
];

for (let i = 0; i < users.length; i++) {
  loginCount.set(users[i], i);
}

console.log(loginCount);

{  
  let map2 = new WeakMap(); 
  {
    let x = { num: 5 };
    map2.set(x, 4);
  }
   //
  console.log(map2);//
}


