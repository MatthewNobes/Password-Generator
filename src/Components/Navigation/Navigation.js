import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Dialpad, Info, Password } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ width: 500 }}>
			<BottomNavigation
				className={css.Navigation}
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					component={Link}
					to="/"
					label="Password"
					icon={<Password />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/pin"
					label="Pin"
					icon={<Dialpad />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/advice"
					label="Password tips"
					icon={<Info />}
				/>
			</BottomNavigation>
		</Box>
	);
};
