function carbsPerCookedGram(data) {
  return data.carbs / data.reference;
}

function cookedRatio(data) {
  return data.cookedWeight / data.dryWeight;
}

export function carbsPerDryGram(data) {
  return carbsPerCookedGram(data) * cookedRatio(data);
}

export function carbsPerPortion(data) {
  return Number((carbsPerDryGram(data) * data.dryPortion).toFixed(1));
}

export function dosePerPortion(data) {
  return Math.round(carbsPerPortion(data) / data.ratio);
}

export const fields = {
  carbs: "carbs for reference amount",
  reference: "reference amount for the carbs",
  dryWeight: "dry weight for the dry / cooked ratio",
  cookedWeight: "cooked weight for the dry / cooked ratio",
  dryPortion: "the weight of your dry portion",
  ratio: "the antecedent of your insulin ratio",
};
