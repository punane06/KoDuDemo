import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LiisiHeader } from "./liisi-header";

describe("LiisiHeader", () => {
  it("uses the same compact title size for inner and inner-viewer variants", () => {
    const { rerender } = render(
      <LiisiHeader title="Technical Files" subtitle="Plans & drawings" backHref="/liisi" variant="inner" />
    );

    const innerTitle = screen.getByRole("heading", { name: /Technical Files/i });
    expect(innerTitle).toHaveClass("text-[20px]");

    rerender(
      <LiisiHeader
        title="Floor Plan"
        subtitle="Pinch to zoom, drag to pan"
        backHref="/liisi/files"
        variant="inner-viewer"
      />
    );

    const viewerTitle = screen.getByRole("heading", { name: /Floor Plan/i });
    expect(viewerTitle).toHaveClass("text-[20px]");
  });
});
