import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from "./slices/passwordSlices";

export const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});
