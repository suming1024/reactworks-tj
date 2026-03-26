import { useEffect, useState } from "react"

export default function Clock(){

    // 시간 초기화
    const [time,setTime]=useState(new Date().toLocaleTimeString());

    // 1초씩 가는거 만들거임
    useEffect(()=>{
        const timer=setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        console.log("렌더링");
        
        // 시간을 멈추는거
        return ()=>clearInterval(timer);
    },[])

    return(
        <>
            <h2>Clock</h2>
            <h3>현재 시간: {time}</h3>
        </>
    )
}