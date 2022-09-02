import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passwordLength: 12,
};

export const passwordLengthSlice = createSlice({
  name: "passwordLength",
  initialState,
  reducers: {
    setPasswordLength: (state, action) => {
      state.passwordLength = action.payload;
    },
  },
});

export const { setPasswordLength } = passwordLengthSlice.actions;
export default passwordLengthSlice.reducer;
