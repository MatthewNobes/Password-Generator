import { createSlice } from "@reduxjs/toolkit";
import { generatePassword } from "../../Features/PasswordGenerator/generatePassword";

const initialState = {
	password: generatePassword(12),
};

export const passwordSlice = createSlice({
	name: "password",
	initialState,
	reducers: {
		setPassword: (state, action) => {
			state.password = action.payload;
		},
	},
});

export const { setPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
