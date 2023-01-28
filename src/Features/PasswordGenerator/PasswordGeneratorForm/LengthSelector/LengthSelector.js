import { Slider } from "@mui/material";
import PropTypes from "prop-types";

export const LengthSelector = (props) => {
	const passwordLength = props.passwordLength;
	const setLength = props.setLength;

	const marks = [
		{
			value: 8,
			label: "8",
		},
		{
			value: 12,
			label: "12",
		},
		{
			value: 16,
			label: "16",
		},
		{
			value: 32,
			label: "32",
		},
		{
			value: 64,
			label: "64",
		},
	];

	const valueText = (value) => {
		return value;
	};

	return (
		<Slider
			aria-label="Password Length"
			defaultValue={passwordLength}
			onChange={(e) => {
				setLength(e.target.value);
			}}
			getAriaValueText={valueText}
			min={8}
			max={64}
			step={1}
			valueLabelDisplay="auto"
			marks={marks}
		/>
	);
};

LengthSelector.propTypes = {
	passwordLength: PropTypes.string.isRequired,
	setLength: PropTypes.func.isRequired,
};
