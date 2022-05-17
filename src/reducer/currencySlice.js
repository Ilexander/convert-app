import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: "EUR",
  second: "EUR",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeFirst(state, action) {
      state.first = action.payload;
    },
    changeSecond(state, action) {
      state.second = action.payload;
    },
  },
});

export const { changeFirst, changeSecond } = currencySlice.actions;

export default currencySlice.reducer;
