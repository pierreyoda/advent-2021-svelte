export type AdventOfCodeDayComputeFunctionInputs<Type extends AdventOfCodeDayComputeFunctionType = AdventOfCodeDayComputeFunctionType> =
  Type extends "integers"
    ? readonly number[]
    : readonly string[];
  // readonly (string | number)[];
export type AdventOfCodeDayComputeFunctionOutput = number | string | null;

export type AdventOfCodeDayComputeFunctionType =
  // Take an array of integers as input (will throw on conversion error).
  | "integers"
  // Take the raw data as input, with empty lines filtered out.
  | "strings"
  // Take the raw data as input.
  | "raw";

export type AdventOfCodeDayComputeFunction<Type extends AdventOfCodeDayComputeFunctionType = AdventOfCodeDayComputeFunctionType> = {
  type: Type;
  compute: (inputs: AdventOfCodeDayComputeFunctionInputs<Type>) => AdventOfCodeDayComputeFunctionOutput;
}

export interface AdventOfCodeDaySection<Type extends AdventOfCodeDayComputeFunctionType = AdventOfCodeDayComputeFunctionType> {
  inputs: string;
  /** In **raw** markdown. */
  description: string;
  computeFunction: AdventOfCodeDayComputeFunction<Type>;
  expectedAnswer: AdventOfCodeDayComputeFunctionOutput;
  processInputs?: (rawInputs: string) => AdventOfCodeDayComputeFunctionInputs<Type>,
}

export type AdventOfCodeDaySectionMeta = AdventOfCodeDaySection;

export interface AdventOfCodeDay<Section = AdventOfCodeDaySection> {
  dayNumber: number;
  title: string;
  sections: readonly Section[];
}

export type AdventOfCodeDayMeta = Omit<AdventOfCodeDay<AdventOfCodeDaySectionMeta>, 'dayNumber'>;

export const processInputsFactory = <Type extends AdventOfCodeDayComputeFunctionType = AdventOfCodeDayComputeFunctionType>(
  type: Type,
) => (input: string): AdventOfCodeDayComputeFunctionInputs<Type> => {
  const splitInputs = input.split('\n');
  const rawInputs: readonly string[] = type === "raw" ? splitInputs : splitInputs.filter(l => !!l.trim());
  // FIXME: type inference seems to not work here
  if (type === "integers") {
    return rawInputs.map((raw): number => {
      const parsed = Number(raw);
      if (!Number.isSafeInteger(parsed)) {
        throw new Error(`processInputsIntegerFactory("${type}") error: "${raw}" is not an integer."`);
      }
      return parsed;
    });
  }
  return rawInputs;
};

export const areSolutionsEqual = (solution: AdventOfCodeDayComputeFunctionOutput, expected: AdventOfCodeDayComputeFunctionOutput): bool =>
  solution === expected;

const daysMeta: readonly Omit<AdventOfCodeDay<AdventOfCodeDaySectionMeta>, 'dayNumber'>[] = [
];
export const days = daysMeta.map(({ sections, ...day }, i) => ({
  ...day,
  dayNumber: i + 1,
  sections: sections.map((section): Required<AdventOfCodeDaySection> => ({
    ...section,
    processInputs: processInputsFactory(section.computeFunction.type),
  })),
}));
