import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LiisiDesignPage from "./page";

describe("Liisi Design Page", () => {
  it("renders interior design options page", () => {
    localStorage.clear();

    render(<LiisiDesignPage />);

    // Verify page title
    expect(screen.getByText(/Interior Design/i)).toBeInTheDocument();

    // Verify subtitle
    expect(
      screen.getByText(/Choose your preferred package/i)
    ).toBeInTheDocument();

    // Verify instructions text
    expect(
      screen.getByText(
        /Select one of our curated packages or request a custom design/i
      )
    ).toBeInTheDocument();

    // Verify design packages are rendered
    expect(screen.getByText(/Light & Modern/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark & Premium/i)).toBeInTheDocument();
    expect(screen.getByText(/Classic & Neutral/i)).toBeInTheDocument();
    expect(screen.getByText(/Nordic Warmth/i)).toBeInTheDocument();
    expect(screen.getByText(/Deadline May 12/i)).toBeInTheDocument();

    // Verify custom selection CTA
    expect(screen.getByText(/Custom Selection/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Request a unique design/i)
    ).toBeInTheDocument();
  });

  it("renders back button to home", () => {
    localStorage.clear();

    render(<LiisiDesignPage />);

    const backButton = screen.getByLabelText(/Back to home/i);
    expect(backButton).toBeInTheDocument();
    expect(screen.getByLabelText(/Start chat/i)).toBeInTheDocument();
  });

  it("shows review links in overview and keeps selection controls out of package grid", () => {
    localStorage.clear();

    render(<LiisiDesignPage />);

    expect(screen.getAllByText(/View details/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: /Select package/i })).not.toBeInTheDocument();
  });
});
