const Example01 =()=>{
   //조건문 렌더링
    const isLogined = true;
    // const isLogined = false;

     return(
        <>
        <h2>조건부 렌더링</h2>
        {/* //삼합(조건) 연산자 */}
        {isLogined ? <p>로그인 성공</p> : <p>로그인 실패</p>}

        {isLogined && <p>로그인 성공쓰</p>} 
        {/* <-두 조건을 충족 안 하면 아예 들어오지도 않음 */}

        </>
     )
} 

export default Example01