import { useEffect, useState } from "react"

export default function FetchExample01(){
    
    const [data,setData]=useState([]);
    
    // 컴포넌트가 마운트될때 한번만 실행(렌더링)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json()) //json->js 객체로 변환
        .then((result) => {
            setData(result);
            console.log(result);
            
        })
        .catch((error) => console.log(error));
    },[])

    return(
        <>
            <div>
                <h3>할 일(To-Do) 데이터</h3>
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}