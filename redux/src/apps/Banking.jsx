import { useSelector } from "react-redux"

export default function Banking(){

    const balance = useSelector(state => state.bank.balance)

    return(
        <div>
            <h2><strong>은행업무</strong></h2>
            <h3>잔액: {balance}원</h3>
        </div>
    )
}