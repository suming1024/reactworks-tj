import { useEffect, useRef } from "react"

export default function InputFocus(){

    const inputRef = useRef(null);
    console.log(inputRef); //{current: null}

    useEffect(()=>{
        console.log(inputRef); //{current: input} : 한번 렌더링이 된거임(나는 여기서 저장누르면 되더라)
        inputRef.current.focus(); // inputRef가 호출되면 input 안에 focus 가 설정됨
    },[])

    const handleSubmit =()=>{
        console.log(`환영합니다.${inputRef.current.value}`);
        inputRef.current.value = ''; //초기화
        inputRef.current.focus(); //버튼 클릭후에도 포커스 유지
        
        // inputRef(e.target.value); <-이거필요없는듯
    }
    

    return(
        <div>
            <h2>InputFocus</h2>
            <input 
                type="text"
                placeholder="이름을 입력하세요."
                ref={inputRef}
            />{` `}
            <button onClick={handleSubmit}>전송</button>
        </div>
    )
}