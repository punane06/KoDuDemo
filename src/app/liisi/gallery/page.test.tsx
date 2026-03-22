import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LiisiGalleryPage from "./page";

describe("Liisi Gallery Page", () => {
  it("renders progress gallery viewer with multiple photos", () => {
    render(<LiisiGalleryPage />);

    // Verify page title
    expect(screen.getByText(/Latest News/i)).toBeInTheDocument();

    // Verify photo counter
    expect(screen.getByText(/\d+\s+of\s+\d+/i)).toBeInTheDocument();

    // Verify navigation buttons
    expect(screen.getByLabelText(/Previous photo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Next photo/i)).toBeInTheDocument();

    // Verify close button in gallery header
    expect(screen.getByLabelText(/Close gallery/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start chat/i)).toBeInTheDocument();

    // Verify lower info block content
    expect(screen.getByText(/Feature wall painting completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Interior/i)).toBeInTheDocument();
    expect(screen.getByText(/Mar 18/i)).toBeInTheDocument();
  });

  it("renders photo thumbnails for navigation", () => {
    render(<LiisiGalleryPage />);

    // Verify thumbnail navigation strip exists
    const thumbnailButtons = screen.getAllByRole("button");
    // Should have at least: prev, next, close, + multiple thumbnails
    expect(thumbnailButtons.length).toBeGreaterThan(3);
  });
});
