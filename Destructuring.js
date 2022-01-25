let arr = [3,4,56,{name:"syed",id:9}];

// let num = arr[0];
// let num1 = arr[1];

//Destructuring - to unpack array or object value sinto a varibale

let [num,num1] = [{name:"syed"}, {name:"renu"}] ;
console.log(num, num1)
let user={
    name :"Renu",
    id:9,
    city:"Hyd",
    addr:["india","500087", {}],
    skillLevel:{js:3,c:4}

}

//name ,city 

let { name, city, addr, skillLevel } = user;
console.log(name, city, addr, skillLevel);

