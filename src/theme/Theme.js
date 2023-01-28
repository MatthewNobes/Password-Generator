import { createTheme } from "@mui/material";

export const getTheme = () => {
	const config = {
		palette: {
			primary: {
				main: "#30323D",
				dark: "#30323D",
			},
			secondary: {
				main: "#5C80BC",
			},
			background: {
				default: "#FFF",
				paper: "#CDD1C4",
			},
			extraColours: {
				extra1: "#E8C547",
			},
			typography: {
				fontFamily: "Roboto",
				fontSize: 15,
			},
			text: {
				primary: "#000",
				secondary: "#4D5061",
			},
		},
	};

	const theme = createTheme(config);
	return theme;
};
