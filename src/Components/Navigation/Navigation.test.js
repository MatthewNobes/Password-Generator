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

		const linkLabel = screen.getByText("Password");
		expect(linkLabel).toBeInTheDocument();

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

		const linkLabel = screen.getByText("Pin");
		expect(linkLabel).toBeInTheDocument();

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

		const linkLabel = screen.getByText("Password tips");
		expect(linkLabel).toBeInTheDocument();

		expect(screen.getByText("Password tips").closest("a")).toHaveAttribute(
			"href",
			"/tips",
		);
	});
});
