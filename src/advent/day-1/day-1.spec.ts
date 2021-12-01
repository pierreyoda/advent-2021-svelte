import { computeFunction1, computeFunction2 } from "./day-1";

const sampleInputs = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
];

describe("Day 1", () => {
  it("should correctly compute the output given example inputs for the first part", () => {
    expect(computeFunction1.compute(sampleInputs)).toEqual(7);
  });

  it("should correctly compute the output given example inputs for the second part", () => {
    expect(computeFunction2.compute(sampleInputs)).toEqual(5);
  });
});
