// App.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders dark mode button", () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText("Toggle Dark Mode");
  expect(buttonElement).toBeInTheDocument();
});

test("toggles dark mode", () => {
  const { getByText, container } = render(<App />);
  const buttonElement = getByText("Toggle Dark Mode");

  // Check initial mode
  expect(container.firstChild).toHaveClass("light");

  // Click the button to toggle mode
  fireEvent.click(buttonElement);

  // Check if mode has changed
  expect(container.firstChild).toHaveClass("dark");
});
