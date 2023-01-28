import { Navigation } from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Navigation", () => {
	it("should render with password link", () => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>,
		);

		const passwordLink = screen.getByText("Password");
		console.log(passwordLink);
		expect(passwordLink).toBeInTheDocument();

		expect(screen.getByText("Password").closest("a")).toHaveAttribute(
			"href",
			"/",
		);
	});

	it("should render with pin link", () => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>,
		);

		const pinLink = screen.getByText("Pin");
		expect(pinLink).toBeInTheDocument();

		expect(screen.getByText("Pin").closest("a")).toHaveAttribute(
			"href",
			"/pin",
		);
	});

	it("should render with tips link", () => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>,
		);

		const tipsLink = screen.getByText("Password tips");
		expect(tipsLink).toBeInTheDocument();

		expect(screen.getByText("Password tips").closest("a")).toHaveAttribute(
			"href",
			"/tips",
		);
	});
});
