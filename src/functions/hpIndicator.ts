import { Unit } from "../../core/classes/Unit";

export const hpIndicator = (unit: Unit) => {
  const hpIndicatorValue =
    unit.healthPoint === 0
      ? 100
      : ((unit.fullHealthPoint - unit.healthPoint) / unit.fullHealthPoint) *
        100;

  return hpIndicatorValue;
};
