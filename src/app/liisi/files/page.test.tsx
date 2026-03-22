import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiFilesPage from "./page";

describe("Liisi Technical Files Page", () => {
  it("renders inner header and technical file rows", () => {
    render(<LiisiFilesPage />);

    expect(screen.getByRole("heading", { name: /Technical Files/i })).toBeInTheDocument();
    expect(screen.getByText(/Plans & drawings/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Back to home/i)).toBeInTheDocument();

    expect(screen.getByText(/Apartment Floor Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Electrical Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Plumbing Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Specifications/i)).toBeInTheDocument();

    expect(screen.getByText(/^Interactive$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start chat/i)).toBeInTheDocument();
  });
});
