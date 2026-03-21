import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LiisiPage from "./page";

describe("Liisi Home Page", () => {
  it("renders the home page with greeting and construction progress", () => {
    render(<LiisiPage />);

    // Verify greeting
    expect(screen.getByText(/Tere Liis/i)).toBeInTheDocument();

    // Verify apartment identifier (unit name from mockData)
    expect(screen.getByText(/Iseara Lutsu/i)).toBeInTheDocument();

    // Verify construction progress section exists
    expect(
      screen.getByText(/Construction Progress/i)
    ).toBeInTheDocument();

    // Verify "Quick Access" section
    expect(screen.getByText(/Quick Access/i)).toBeInTheDocument();

    // Verify "Latest update" section
    expect(screen.getByText(/Latest update/i)).toBeInTheDocument();

    // Verify "Recent Updates" section
    expect(screen.getByText(/Recent Updates/i)).toBeInTheDocument();

    // Verify Interior Design CTA
    expect(
      screen.getByText(/Interior Design Options/i)
    ).toBeInTheDocument();
  });

  it("renders floating chat action", () => {
    render(<LiisiPage />);

    expect(screen.getByLabelText(/Start chat/i)).toBeInTheDocument();
  });
});
