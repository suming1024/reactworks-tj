//절대값을 계산하는 함수

const time3 = (x)=>x*3

const myAbs = (x) => {
    if (x<0)
        return -x;
    else
        return x;
}

// export default myAbs; <-함수가 한개일경우
export {myAbs, time3}