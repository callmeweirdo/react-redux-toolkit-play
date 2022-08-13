import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 101,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increament: (state, action) => {
      state.count = state.count + 1;
    },
    decreament: (state, action) => {
      state.count = state.count - 1;
    },
    increamentBy: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increament, decreament, increamentBy } = counterSlice.actions;
export default counterSlice.reducer;
