import { getProjectUpdateImageSrc } from "@/lib/presentation/anu";

describe("getProjectUpdateImageSrc", () => {
  it("returns fallback when there are no photo urls", () => {
    const src = getProjectUpdateImageSrc([], 0, "/fallback.svg");
    expect(src).toBe("/fallback.svg");
  });

  it("returns a wrapped index from existing photos", () => {
    const src = getProjectUpdateImageSrc(["a.jpg", "b.jpg"], 3, "/fallback.svg");
    expect(src).toBe("b.jpg");
  });
});
