import { useReducer } from "react"

//외부에 분리된 reducer 함수 만들기
//reducer() 는 현재상태와 액션을 받아 새로운 상태로 반환하는 함수
const reducer = (state, action) => {
    console.log(state, action);

    //디스패치로 전달할 액션 만들거임
    switch(action.type){
        case "Increment":
            return{count:state.count+1}
        case "Decrement":
            return{count:state.count-1}
        case "Reset":
            return{count:0}
        default:
            return state
    }
}

const CountReducer=()=>{

    //초기화는 객체로 설정됨: {count:0}
    const [state, dispath]=useReducer(reducer,{count:0})

    return(
        <div>
            <h2><strong>useReducer() 예제</strong></h2>
            <h2>{state.count}</h2>
            {/* dispath()는 ㄹㅇ 전달자 함수였던 것임 액션을 전달함 */}
            <button onClick={()=>dispath({type:"Increment"})}>증가</button>{` `}
            <button onClick={()=>dispath({type:"Decrement"})}>감소</button>{` `}
            <button onClick={()=>dispath({type:"Reset"})}>초기화</button>
        </div>
    )
}

export default CountReducer