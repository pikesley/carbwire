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

export function totalCarbsAndDose(data) {
  const totalCarbs = carbsPerPortion(data)
  const dose = Math.round(totalCarbs / data.ratio);

  return {
    totalCarbs: totalCarbs,
    dose: dose
  }
}

export const fields = {
  carbs: "carbs for reference amount",
  reference: "reference amount for the carbs",
  dryWeight: "dry weight for the dry / cooked ratio",
  cookedWeight: "cooked weight for the dry / cooked ratio",
  dryPortion: "the weight of your dry portion",
  ratio: "the antecedent of your insulin ratio",
};
