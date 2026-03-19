let arr1 =[1,2,3]
let arr2 =[4,5]

let newArr = [...arr1,...arr2];
console.log(newArr);

let obj1 = { product:'무선마우스', price:27000}
let obj2 = { spec: 'M200무선마우스'}

let combineObj = {...obj1,...obj2};
console.log(combineObj);
