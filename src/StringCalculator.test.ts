import { describe, it, expect } from "vitest";
import { add } from "./StringCalculator";

describe("StringCalculator", () => {
  it("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });
  it("returns the number itself when only one number is provided", () => {
    expect(add("5")).toBe(5);
  });
  it("returns the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  it("returns the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  it("supports newline as a delimiter along with comma", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
