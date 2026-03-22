import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiFloorPlanPage from "./page";

describe("Liisi Floor Plan Page", () => {
  it("renders inner-viewer header and technical layer tools", () => {
    render(<LiisiFloorPlanPage />);

    expect(screen.getByRole("heading", { name: /Floor Plan/i })).toBeInTheDocument();
    expect(screen.getByText(/Pinch to zoom, drag to pan/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Back to home/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Zoom in/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zoom out/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reset zoom/i)).toBeInTheDocument();

    expect(screen.getByText(/Technical Layers/i)).toBeInTheDocument();
    expect(screen.getByText(/Electrical/i)).toBeInTheDocument();
    expect(screen.getByText(/Water/i)).toBeInTheDocument();
    expect(screen.getByText(/Switches/i)).toBeInTheDocument();

    const waterLayerButton = screen.getByRole("button", { name: /Water/i });
    fireEvent.click(waterLayerButton);
    expect(screen.getByAltText(/Water floor plan layer/i)).toBeInTheDocument();

    const zoomSurface = screen.getByTestId("floorplan-zoom-surface");
    const zoomInButton = screen.getByLabelText(/Zoom in/i);
    const resetButton = screen.getByLabelText(/Reset zoom/i);

    fireEvent.click(zoomInButton);
    expect(zoomSurface).toHaveStyle({ transform: "scale(1.25)" });

    fireEvent.click(resetButton);
    expect(zoomSurface).toHaveStyle({ transform: "scale(1)" });
  });
});
