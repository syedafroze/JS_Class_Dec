let arr = [4, 5, 6, 7, 2, 4, 6, 1];

//[4,5,6,7,2,1]

let res1 = Array.from(new Set(arr));

let res2 = [...new Set(arr)];

console.log(res2, res1);
