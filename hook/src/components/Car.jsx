import { useState } from "react"

const Car=()=>{

    const [car,setCar]=useState({
        brand: "현대",
        model: "소나타",
        year: 2021
    });

    const updateYear=()=>{
        //car 객체를 복사(...)하고 year 속성만 변화
        setCar({...car, year:2025})
    }

    return(
        <>
            <div>
                <h2>자동차 부릉부릉</h2>
                <p>브랜드: {car.brand}</p>
                <p>모델: {car.model}</p>
                <p>연식: {car.year}</p>
                <button onClick={updateYear}>연식 추가 버튼</button>
            </div>
        </>
    )
}

export default Car