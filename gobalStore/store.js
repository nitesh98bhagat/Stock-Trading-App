import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
