import { createContext } from "react"
import UserChild from "./UserChild"

//UserContext를 생성한다(기본값으로 비어있음)
export const UserContext = createContext({})

export default function User(){

    const user = {
        name:"정반달",
        age: 3
    }

    return(
        <div>
            <h2><strong>useContext() 예제</strong></h2>
            {/* 공급자 */}
            <UserContext.Provider value={user}>
                <UserChild />
            </UserContext.Provider>
        </div>
    )
}