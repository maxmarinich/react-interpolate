import interpolate from "../src";

describe("interpolate", function() {
  const value = "Some {0}";

  it("should return expected result if no params", function() {
    expect(interpolate(value)).toBe(value);
  });

  it("should return expected result if params is empty", function() {
    expect(interpolate(value, [])).toBe(value);
  });

  it("should return expected result if params case 1", function() {
    expect(interpolate("{0}{1}{0}", [1, 1])).toStrictEqual(["111"]);
  });

  it("should return expected result if params case 2", function() {
    expect(interpolate("{0}{1}{0}", [1, null])).toStrictEqual([1, null, 1]);
  });
});
