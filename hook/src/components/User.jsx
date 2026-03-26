import { useEffect, useState } from "react"

export default function User(){

    const [userName,setUserName]= useState("");
    const [age,setAge]=useState(0);

    const onChangeName=(e)=>{
        setUserName(e.target.value);
    }
    const onChangeAge=(e)=>{
        setAge(Number(e.target.value))
    }

    // useEffect(함수,배열)
    // [] 이거는 빈배열 처음 렌더링 될때 한번만 실행. 렌더링 계속되면 무거워짐+안에 넣은 요소만 렌더링 됨
    useEffect(()=>{
        console.log("렌더링...");
        
    },[userName])

    return(
        <>
        <div className="userCss">
            <h2>사용자 정보</h2>
            <input type="text"
                value={userName}
                onChange={onChangeName}
            />{` `}
            <input type="number" 
                value={age}
                onChange={onChangeAge}
            />

            <div>
                <p>name: {userName}</p>
                <p>age: {age}</p>
            </div>
        </div>
        </>
    )
}
