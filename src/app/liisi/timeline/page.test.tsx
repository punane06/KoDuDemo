import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiTimelinePage from "./page";

describe("Liisi Timeline Page", () => {
  it("renders redesigned timeline with stage cards and status badges", () => {
    render(<LiisiTimelinePage />);

    expect(screen.getByRole("heading", { name: /Timeline/i })).toBeInTheDocument();
    expect(screen.getByText(/Track every stage/i)).toBeInTheDocument();

    expect(screen.getByText(/Foundation/i)).toBeInTheDocument();
    expect(screen.getByText(/Walls/i)).toBeInTheDocument();
    expect(screen.getByText(/Roof/i)).toBeInTheDocument();
    expect(screen.getByText(/Interior Works/i)).toBeInTheDocument();
    expect(screen.getByText(/Finishing/i)).toBeInTheDocument();
    expect(screen.getByText(/Handover/i)).toBeInTheDocument();

    expect(screen.getAllByText(/Completed/i)).toHaveLength(3);
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Upcoming/i)).toHaveLength(2);
  });
});
