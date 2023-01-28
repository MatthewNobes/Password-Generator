import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setPasswordLength } from "../../../Store/slices/passwordLength/passwordLengthSlice";
import LengthSelector from "./LengthSelector";

export const PasswordGeneratorForm = () => {
	return (
		<Box
			sx={{
				minWidth: "300px",
				maxWidth: "500px",
				width: "90%",
				display: "flex",
				justifyContent: "center",
				marginY: 2,
				gap: 2,
				marginX: 2,
				margin: "auto",
			}}
		>
			<PasswordLength />
		</Box>
	);
};

const PasswordLength = () => {
	const dispatch = useDispatch();
	const passwordLength = useSelector(
		(state) => state.passwordLength.passwordLength,
	);

	const setLength = (newLength) => {
		dispatch(setPasswordLength(parseInt(newLength)));
	};

	return (
		<Box
			sx={{
				minWidth: "300px",
				width: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography id="non-linear-slider" gutterBottom>
        Password Length
			</Typography>
			<LengthSelector passwordLength={passwordLength} setLength={setLength} />
		</Box>
	);
};
