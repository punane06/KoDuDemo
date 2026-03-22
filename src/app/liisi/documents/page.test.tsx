import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiDocumentsPage from "./page";

describe("Liisi Documents Page", () => {
  it("renders inner header and document rows", () => {
    render(<LiisiDocumentsPage />);

    expect(screen.getByRole("heading", { name: /Documents/i })).toBeInTheDocument();
    expect(screen.getByText(/Contracts & legal files/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Back to home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Add document/i)).toBeInTheDocument();

    expect(screen.getByText(/Kitchen Layout Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Electrical Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal Notes - Wishlist/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Start chat/i)).toBeInTheDocument();
  });
});
