import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import bankReducer from './bankSlice'

//리듀서 등록
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        bank: bankReducer
    }
})