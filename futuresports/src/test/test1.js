import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./components/navbar";

test("Renders Navbar with expected elements", () => {
  const { getByText } = render(<Navbar />);

  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Events")).toBeInTheDocument();
  expect(getByText("About")).toBeInTheDocument();
  expect(getByText("Contact")).toBeInTheDocument();
});
