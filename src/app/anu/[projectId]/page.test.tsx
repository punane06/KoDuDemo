import { render, screen } from "@testing-library/react";

import ProjectDetailPage from "./page";

describe("Anu project page smoke", () => {
  it("renders with valid project params", async () => {
    const element = await ProjectDetailPage({
      params: Promise.resolve({ projectId: "proj-iseara-lutsu" }),
    });

    render(element);

    expect(screen.getByText("Construction Control")).toBeInTheDocument();
    expect(screen.getByText("Project Updates")).toBeInTheDocument();
  });
});
