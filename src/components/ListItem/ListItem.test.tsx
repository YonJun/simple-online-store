import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { ListItem } from "./ListItem";

describe("List item component", () => {
  test("render List item correctly", () => {
    render(<ListItem title="My product" onClick={() => {}} />);
    expect(screen.getByText("My product")).toBeInTheDocument();
  });
});
