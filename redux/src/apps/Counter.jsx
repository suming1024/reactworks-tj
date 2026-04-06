import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset, incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

export default function Counter (){

    //스토어의 state에서 카운터 값 가져옴
    const count = useSelector(state=> state.counter.count);

    //액션을 디스패치(전달)할때 사용
    const dispatch = useDispatch()

    const [inputValue,setInputValue] = useState(0);

    const handleInputValue = (e) => {
        setInputValue(Number(e.target.value))
    }

    //입력값만큼 숫자 증가시킴
    const handleIncrement=()=>{
        dispatch(incrementByAmount(inputValue))
    }

    return(
        <div>
            <h2><strong>Counter</strong></h2>
            <h3>Count: {count}</h3>

            <div>
                <button onClick={()=>{dispatch(increment())}}>증가</button> {` `}
                <button onClick={()=>{dispatch(decrement())}}>감소</button> {` `}
                <button onClick={()=>{dispatch(reset())}}>초기화</button>
            </div>
            <input 
                type="number" 
                value={inputValue}
                onChange={handleInputValue}
            />{` `}
            <button onClick={handleIncrement}>입력값만큼 증가</button>
        </div>
    )
}