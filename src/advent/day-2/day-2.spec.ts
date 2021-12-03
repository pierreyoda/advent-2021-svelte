import { computeFunction1, computeFunction2 } from "./day-2";

const sampleInputs = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

describe("Day 2", () => {
  it("should correctly compute the output given example inputs for the first part", () => {
    expect(computeFunction1.compute(sampleInputs)).toEqual(15 * 10);
  });

  it("should correctly compute the output given example inputs for the second part", () => {
    expect(computeFunction2.compute(sampleInputs)).toEqual(15 * 60);
  });
});
