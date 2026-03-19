// Map(인라인함수)
// 주어진 함수를 호출한 결과를 모아 새로운 배열로 변환

let arr = [1,2,3]

const newArr = arr.map(x => x*3);
console.log(newArr);

//배열 객체 
const users=[
    {name: 'bandal', age:'3'},
    {name: 'bambi', age:'1'},
    {name: 'toto', age:'2'}
]

const names = users.map(users=> users.name);
console.log(names);

const ages=users.map(users=>users.age);
console.log(ages);


