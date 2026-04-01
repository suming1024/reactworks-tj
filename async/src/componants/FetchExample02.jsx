import { useEffect, useState } from "react"

export default function FetchExample02({id}){

    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response=>response.json())
            .then(result=>{
                setData(result);
                console.log("가져온데이터",result());
                
            })
            .catch(err=>console.log(err)
            )
    },[])
    
    return(
        <>
            <div>
                <h2>할 일 데이터</h2>
                {data && (
                    <div>
                        <p><strong>제목: </strong>{data.title}</p>
                        <p><strong>완료여부: </strong>{data.completed ? "◎ 완료" : "○ 미완료"}</p>
                    </div>
                )}
            </div>

        </>
    )
}