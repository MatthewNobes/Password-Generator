import { getTheme } from "./theme";

describe("theme", () => {
	it("should return an object", () => {
		const theme = getTheme();

		expect(typeof theme).toBe("object");
	});
});
