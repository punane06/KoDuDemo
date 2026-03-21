import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiDocumentsPage from "./page";

describe("Liisi Documents Page", () => {
  it("renders inner header and document rows", () => {
    render(<LiisiDocumentsPage />);

    expect(screen.getByText(/Documents/i)).toBeInTheDocument();
    expect(screen.getByText(/Contracts & legal files/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Back to home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Add document/i)).toBeInTheDocument();

    expect(screen.getByText(/Purchase Agreement/i)).toBeInTheDocument();
    expect(screen.getByText(/Payment Schedule/i)).toBeInTheDocument();
    expect(screen.getByText(/Building Permit/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Start chat/i)).toBeInTheDocument();
  });
});
