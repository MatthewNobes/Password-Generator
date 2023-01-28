import { generatePassword } from "./generatePassword/generatePassword";
import {
	Button,
	InputAdornment,
	IconButton,
	OutlinedInput,
	Box,
} from "@mui/material";
import { Refresh, ContentCopy } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../Store/slices/passwordSlices";
import { copyToClipboard } from "../../Utils/copyToClipboard/copyToClipboard";
import PasswordGeneratorForm from "./PasswordGeneratorForm";

const PasswordResult = () => {
	const password = useSelector((state) => state.password.password);

	return (
		<OutlinedInput
			aria-label="Generated password"
			disabled
			sx={{ maxWidth: "500px", width: "100%" }}
			value={password}
			placeholder="Password"
			endAdornment={
				<InputAdornment position="end">
					<IconButton
						aria-label="Copy password to clipboard"
						onClick={() => {
							copyToClipboard(password);
						}}
						edge="end"
					>
						<ContentCopy />
					</IconButton>
				</InputAdornment>
			}
		/>
	);
};

const GenerateNewPasswordButton = () => {
	const dispatch = useDispatch();

	const passwordLength = useSelector(
		(state) => state.passwordLength.passwordLength,
	);

	return (
		<Button
			aria-label="Generate new password"
			variant="outlined"
			onClick={() => {
				dispatch(setPassword(generatePassword(passwordLength)));
			}}
			startIcon={<Refresh />}
		>
			Generate New Password
		</Button>
	);
};

export const PasswordGenerator = () => {
	return (
		<>
			<Box
				sx={{
					minWidth: "300px",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					marginY: 2,
					marginX: 2,
					gap: 2,
				}}
			>
				<PasswordResult />

				<GenerateNewPasswordButton />
			</Box>

			<PasswordGeneratorForm />
		</>
	);
};
