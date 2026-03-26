import { useState } from "react"
import DrinkList from "./DrinkList";

const AddDrink=()=>{

    const[drinkName,setDrinkName]=useState([]);
    const[inputValue,setInputValue]=useState("");

    const handleInputValue=(e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleAddDrink=()=>{
        const newDrink=inputValue.trim();
        if(newDrink===''){
            alert("입력해주세요.")
            return;
        }
        setDrinkName([...drinkName, newDrink]);
        setInputValue("");
    }

    return(
        <>
            <div>
                <h2 style={{fontWeight:"bold"}}>음료 추가</h2>
                <p>음료추가 컴포넌트 입니다.</p>
                <input type="text" 
                placeholder="입력해주세요."
                value={inputValue}
                onChange={handleInputValue}/>

                <button onClick={handleAddDrink}>확인</button>
                {/* <p>현재 음료: {drinkName.join(', ')}</p>  <-옆으로감*/}
                
                {/* props 로 컴퍼넌트 간의 함수 연결을 함. drinks가 drinkName의 속성이 되었다 */}
                <DrinkList drinks={drinkName}/>
            </div>
        </>
    )
}

export default AddDrink