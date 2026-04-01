import axios from "axios";
import { useEffect, useState } from "react"

export default function AxiosGetById({id}){

    const [data,setData]=useState(null)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            setData(response.data);
            console.log(response.data);
            
        })
        .catch((error) => console.log(error));
    },[id])

    return(
        <div>
            <h3>할 일(To-Do) 데이터</h3>
            {data && (
                    <div>
                        <p><strong>제목: </strong>{data.title}</p>
                        <p><strong>완료여부: </strong>{data.completed ? "◎ 완료" : "○ 미완료"}</p>
                    </div>
            )}
        </div>
    )
}