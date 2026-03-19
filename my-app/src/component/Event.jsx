const Event= ()=>{

    // 함수 참조 방식(외부)
    const handleClick =()=>{
        alert("버튼이 클릭 됐습니다.");
    }

    // 폼 요소(입력상자)와 이벤트 핸들링
    const handleChange =(event)=>{
        // console.log(event);

        // 입력한 값이 바로 출력되네
        console.log(event.target.value);
    }


    return(
        <>
            <h2>이벤트 핸들링</h2>
            {/* 인라인핸들러: 이벤트 속성안에 직접 생성 */}
            {/* <button onClick={
                ()=> alert("버튼이 클릭 됐습니다.")}>
                클릭해방
            </button> */}
            <button onClick={handleClick}>클릭해방</button><br/>
            
            {/* 입력이벤트 */}
            <input type="text" onChange={handleChange}></input>
        </>
    )
}

export default Event;