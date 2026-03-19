//배열생성
let fruits = ["사과","딸기","바나나","멜론"]
console.log(fruits);

//배열 요소 접근
const result = document.getElementById("result");
result.innerHTML = "첫번쨰과일: "+fruits[0] +"<br>"
result.innerHTML += "첫번쨰과일: "+fruits[1] +"<br>"

//배열의 길이(크기)
result.innerHTML += `과일의 총 개수: ${fruits.length}` +"<br>"

//배열 전체 요소 출력
for(
    let i = 0;
    i<fruits.length;
    i++
){
    result.innerHTML += `과일${i+1}: ${fruits[i]}<br>`
}

//배열 추가 (맨뒤)-push() 함수
fruits.push("오렌지")
for(
    let i = 0;
    i<fruits.length;
    i++
){
    result.innerHTML += `과일${i+1}: ${fruits[i]}<br>`
}

//배열 삭제 (맨앞)-pop() 함수
fruits.pop()
for(
    let i = 0;
    i<fruits.length;
    i++
){
    result.innerHTML += `과일${i+1}: ${fruits[i]}<br>`
}

//배열요소 변경
fruits[1] ="수박"
console.log(fruits);
for(
    let i = 0;
    i<fruits.length;
    i++
){
    result.innerHTML += `과일${i+1}: ${fruits[i]}<br>`
}