import { useContext } from "react"
import { UserContext } from "./User"

export default function UserChild(){

    const user = useContext(UserContext)

    return(
        <div>
            <h2>UserChild</h2>
            <p>사용자 이름: {user.name}</p>
            <p>사용자 나이: {user.age}</p>
        </div>
    )
}