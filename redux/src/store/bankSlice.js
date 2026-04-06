import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0 //잔액
}

const bankSlice = createSlice({
    name:'bank',
    initialState,
    reducers:{
        //예금
        deposit: (state, action) => {
            state.balance += action.payload
        },
        //출금
        withdraw: (state, action) => {
            state.balance -= action.payload
        }
    }
})

export const { deposit, withdraw } = bankSlice.actions
export default bankSlice.reducer