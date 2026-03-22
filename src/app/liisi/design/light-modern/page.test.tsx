import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiLightModernDesignPage from "./page";

describe("Liisi Light & Modern Design Detail Page", () => {
  it("renders the package detail view with hero, overview and specification cards", () => {
    localStorage.clear();

    render(<LiisiLightModernDesignPage />);

    expect(screen.getByRole("heading", { name: /Light & Modern/i })).toBeInTheDocument();
    expect(screen.getByText(/Interior Design Package/i)).toBeInTheDocument();
    expect(screen.getByText(/Deadline May 12/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Select this package/i })).toBeInTheDocument();
    expect(screen.getByText(/Package Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Flooring/i)).toBeInTheDocument();
    expect(screen.getByText(/Doors & Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Walls & Ceiling/i)).toBeInTheDocument();
    expect(screen.getByText(/Bathroom/i)).toBeInTheDocument();
    expect(screen.getByText(/Kitchen/i)).toBeInTheDocument();
    expect(screen.getByText(/Parkett/i)).toBeInTheDocument();
    expect(screen.getByText(/Shower Set/i)).toBeInTheDocument();
  });

  it("shows cancel action when the package is already selected", () => {
    localStorage.setItem("liisi-interior-design-selection-v1", "pkg-essential");

    render(<LiisiLightModernDesignPage />);

    expect(screen.getByText(/This package is currently selected/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Cancel selection/i }));

    expect(screen.getByRole("button", { name: /Select this package/i })).toBeInTheDocument();
  });
});