import { describe, expect, it } from "vitest";
import { add } from "../src/index";

describe("should", () => {
  it("add", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
