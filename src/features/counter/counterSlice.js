import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1;},
    decrement: (state) => { state.value -= 1;},
    incrementByAmount: (state, action) => { state.value += action.payload; }
  }
})

//Action 생성자 함수
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//store에 counterSlice 등록
export default counterSlice.reducer;