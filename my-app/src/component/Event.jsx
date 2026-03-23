const Event= ()=>{

    // 함수 참조 방식(외부)
    const handleClick =()=>{
        alert("버튼이 클릭 됐습니다.");
    }

    //절대값을 계산하는 함수정의
    const handleMyAbs =(x)=>{
        if(x<0)
            console.log(-x);
            
            else
                console.log(x);
                
    }

    // 폼 요소(입력상자)와 이벤트 핸들링 e=event
    const handleChange =(e)=>{
        // console.log(e);

        // 입력한 값이 바로 출력되네
        console.log(e.target.value);
    }


    return(
        <>
            <h2>이벤트 핸들링</h2>
            {/* 인라인핸들러: 이벤트 속성안에 직접 생성 */}
            <button onClick={
                ()=> alert("버튼이 클릭 됐습니다.")}>
                클릭해방
            </button><br/>
            <button onClick={
                ()=>handleMyAbs(-5)}>
                결과
            </button><br/>
            {/* <button onClick={handleClick}>클릭해방</button><br/> */}
            
            {/* 입력이벤트 */}
            <input type="text" onChange={handleChange}></input>
        </>
    )
}

export default Event;