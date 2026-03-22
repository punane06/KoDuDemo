import { render, screen } from "@testing-library/react";

import UnitDetailPage from "./page";

describe("Anu unit page smoke", () => {
  it("renders with valid project and unit params", async () => {
    const element = await UnitDetailPage({
      params: Promise.resolve({ projectId: "proj-iseara-sipelga", unitId: "unit-14-9" }),
    });

    render(element);

    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Interior Design")).toBeInTheDocument();
  });
});
