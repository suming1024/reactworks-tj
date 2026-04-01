import { useState } from "react"
import axios from "axios";

export default function AxiosPost(){

    //할 일 제목을 저장하는 상태
    const [title,setTitle]=useState("");

    //입력 필드 변경시 상태 업데이트
    const handleChange =(e)=>{
        setTitle(e.target.value);

    }

    //폼 제출 핸들러->이떄 axios 사용됌
    const handleSubmit =(e)=>{
        e.preventDefault();
        //get,useffect 가져오는거 post는 보내는거
        axios.post(`https://jsonplaceholder.typicode.com/todos`,{
            title: title,
            completed: false
        })
        .then(res=>{
            console.log("생성된 데이터",res.data);
            alert("등록완료");
            setTitle('');//입력필드초기화            
        })
        .catch(err=>console.log(err)
        )
    }

    return(
        <div>
            <h2>할 일 추가</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="입력해주세요." 
                    value={title}
                    onChange={handleChange}   
                />
                <button type="submit">등록</button>
            </form>
        </div>
    )
}