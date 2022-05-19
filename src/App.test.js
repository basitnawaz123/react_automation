import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Component rendered", () => {
	render(<App />);
});

test("Link is Correct", () => {
	render(<App />);

	const link = screen.getByTestId("link");
	expect(link.href).toContain("https://google.com");
});
