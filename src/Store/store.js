import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from "./slices/passwordSlices";
import passwordLengthReducer from "./slices/passwordLength/passwordLengthSlice";

export const store = configureStore({
  reducer: {
    password: passwordReducer,
    passwordLength: passwordLengthReducer,
  },
});
