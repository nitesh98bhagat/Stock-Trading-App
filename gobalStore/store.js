import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "../features/counterSlice";
import stockSlice from "../features/stockSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    stockList: stockSlice,
  },
});
