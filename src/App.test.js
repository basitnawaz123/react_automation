import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render link in App", () => {
	render(<App />);

	const link = screen.getByTestId("link");
	expect(link.href).toBe("https://google.com");
});
