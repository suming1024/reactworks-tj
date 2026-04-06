import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        //카운트값 1 증가
        increment: (state)=>{
            state.count += 1
        },
        //카운트값 1 감소
        decrement: (state) => {
            state.count -=1
        },
        //초기화
        reset: (state)=> {
            state.count=0
        },
        //카운트값을 특정 수량으로 증가시킴
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer

// export default function CounterSlice (){}