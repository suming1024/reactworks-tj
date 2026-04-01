import { useState } from "react"
import TodoList from "./TodoList";

export default function Todos(){

    const [todos,setTodos]=useState([
        {id:1,text:"운동하기",completed:false},
        {id:2,text:"공부하기",completed:true}
    ]);

    const [inputValue,setInputValue]=useState("")

    // todo 배열의 크기
    console.log(todos.length);
     console.log(todos);
    

    const handleInputChange=(e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleAddTodo=()=>{
        if(inputValue.trim() !==''){
            //새로운 할일 객체생성
            const newTodo = {
                id: todos.length+1,
                text: inputValue,
                completed: false
            }

            //할일 목록(기존거복사,새로운거)
            setTodos([...todos,newTodo])

            //reset
            setInputValue("")
        }
    }
    const handleDeleteTodo=(id)=>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleComplete=(id)=>{
        //todos 배열을 순회하면서 id가 일치하는 할 일의 completed 반전
        //id 가 일치하지 않는 할 일은 그대로 유지
        setTodos(
            todos.map((todo)=>(
                todo.id === id ? {...todo,completed: ! todo.completed} : todo
            ))
        )
    }


    return(
        <>
            <div className="cnt">
                <h2>To Do List</h2>
                <div>
                    <input type="text" 
                        placeholder="할 일을 입력하세요"
                        value={inputValue}
                        onChange={handleInputChange}/>
                    <button onClick={handleAddTodo}>추가</button>
                </div>
                <TodoList
                    todos={todos}
                    onComplete={handleComplete}
                    onDeleteTodo={handleDeleteTodo}
                />
            </div>
        </>
    )
}