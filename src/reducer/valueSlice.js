import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchValet = createAsyncThunk(
  "valet/fetchValet",

  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,UAH,USD",
        {
          headers: {
            apikey: "VfJqdA75R1h4gLQuEKkOakmn4GI5ygxe",
          },
        }
      );
      const data = response.json();
      if (!response.ok) {
        throw new Error("Error message!");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [{ key: null }],
  status: null,
};

export const valueSlice = createSlice({
  name: "counter",
  initialState,
  extraReducers: {
    [fetchValet.fulfilled]: (state, action) => {
      state.status = true;
      state.data = [action.payload.rates];
    },
    [fetchValet.rejected]: (state, action) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFirst, changeSecond, changeCurrency } = valueSlice.actions;

export default valueSlice.reducer;
