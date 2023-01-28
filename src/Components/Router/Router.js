import { Routes, Route } from "react-router-dom";
import { PasswordGenerator, PinGenerator, PasswordTips } from "../../Features";

export const Router = () => (
	<Routes>
		<Route path="/tips" element={<PasswordTips />} />
		<Route path="/pin" element={<PinGenerator />} />
		<Route path="/" element={<PasswordGenerator />} />
	</Routes>
);
