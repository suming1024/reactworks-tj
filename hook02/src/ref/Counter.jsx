import { useRef, useState } from "react"

export default function Counter(){

    const [count,setCount]=useState(0);
    const countRef=useRef(0);
    let countVar=0;

    console.log("렌더링...");
    console.log(countRef); //{current: 0}
    
    //직접 접근
    const increaseCount=()=>{
        setCount(count+1)
    }

    //ref 증가- 간접접근
    const increaseCountRef=()=>{
        countRef.current = countRef.current+1
        console.log("Ref",countRef.current);
    }

    //일반변수 증가 = 렌더링하면 바로 사라짐
    const increaseCountVar=()=>{
        countVar = countVar+1;
        console.log("Var",countVar);
        
    }

    return(
        <div>
            <h2><strong>useRef() 예제</strong></h2>
            <h2>State: {count}</h2>
            <h2>Ref: {countRef.current}</h2>
            <h2>Var: {countVar}</h2>
            <button onClick={increaseCount}>State 증가</button>{` `}
            <button onClick={increaseCountRef}>Ref 증가</button>{` `}
            <button onClick={increaseCountVar}>Var 증가</button>
        </div>
    )
}