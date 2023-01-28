import { Routes, Route } from "react-router-dom";
import PasswordGenerator from "../../Features/PasswordGenerator";

export const Router = () => (
	<Routes>
		<Route path="/advice" element={<PasswordGenerator />} />
		<Route path="/pin" element={<PasswordGenerator />} />
		<Route path="/" element={<PasswordGenerator />} />
	</Routes>
);
