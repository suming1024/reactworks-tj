//함수선언

let add = (x,y) => {
    return x+y;
}

const message=()=>{
    console.log("Good, Luck!");
    
}
// const message=()=>console.log("Good, Luck!"); <-실행문 한줄도 가능
let square=(x)=>x*x; //<- return 도 필요없음 완전 가볍게 한줄가능 

//함수호출
console.log(add(4,5));
console.log(square(5));
message();
