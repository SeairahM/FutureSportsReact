import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ContactForm from "./contact";

describe("Contact", () => {
  test("Renders Contact without crashing", () => {
    render(<ContactForm />);
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
  });

});
