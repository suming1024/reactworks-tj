import axios from "axios";
import { useEffect, useState } from "react"

export default function AxiosGet(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            setData(response.data);
            console.log(response.data);
            
        })
        .catch((error) => console.log(error));
    },[])
    
    return(
        <div>
            <h3>할 일(To-Do) 데이터</h3>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}