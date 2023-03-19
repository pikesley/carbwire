import { carbsPerDryGram, carbsPerPortion, dosePerPortion } from "carbwire";

const data = {
  carbs: 32.2,
  reference: 100,
  dryWeight: 90,
  cookedWeight: 200,
  dryPortion: 100,
  ratio: 5,
};

describe("carbsPerDryGram", function () {
  it("does the reference case", function () {
    expect(Number(carbsPerDryGram(data).toFixed(3))).toEqual(0.716);
  });
});

describe("carbsPerPortion", function () {
  it("does the reference case", function () {
    expect(carbsPerPortion(data)).toEqual(71.6);
  });
});

describe("dosePerPortion", function () {
  it("does the reference case", function () {
    expect(dosePerPortion(data)).toEqual(14);
  });
});
