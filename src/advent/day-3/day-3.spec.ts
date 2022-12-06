import { computeFunction1, computeFunction2 } from "./day-3";

const sampleInputs = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

describe("Day 3", () => {
  it("should correctly compute the output given example inputs for the first part", () => {
    expect(computeFunction1.compute(sampleInputs)).toEqual(22 * 9);
  });

  it("should correctly compute the output given example inputs for the second part", () => {
    expect(computeFunction2.compute(sampleInputs)).toEqual(15 * 60);
  });
});
