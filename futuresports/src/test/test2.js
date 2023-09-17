import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("About section contains expected text", () => {
  const { getByText } = render(<App />);
  
  // Replace with the expected "About" text from your aboutMsg variable
  const expectedAboutText = `Whether youre an experienced rower seeking a new 
  imaginary challenge or a complete novice eager to dip your oars into the waters of
  imagination, Future Sports Rowing Club welcomes you. We organize a
  variety of events throughout the year, from friendly inter-club
  regattas to workshops led by renowned rowing experts. These gatherings
  not only enhance our members skills but also provide opportunities
  for them to connect with fellow enthusiasts who share their passion.
  Join us in creating a shared narrative of friendship, personal growth,
  and the sheer joy of rowing across imaginary horizons. Your adventure
  awaits on the waters of Future Sports.`;
  
  expect(getByText(expectedAboutText)).toBeInTheDocument();
});
