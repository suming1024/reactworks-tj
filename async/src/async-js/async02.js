// 비동기처리
function displayA(){
    console.log('A');
}

//함수의 인자로 함수가 매개가 될 때, 이 함수를 콜백함수라고 한다
function displayB(callBack){
    // console.log('B');
    setTimeout(()=>{
        console.log('B');
        callBack();
    },2000)
}

function displayC(){
    console.log('C');
}

displayA()
displayB(displayC)