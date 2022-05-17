import { configureStore } from "@reduxjs/toolkit";
import valetSlice from "./valueSlice";
import currencySlice from "./currencySlice";

export default configureStore({
  reducer: {
    valet: valetSlice,
    currency: currencySlice,
  },
});
