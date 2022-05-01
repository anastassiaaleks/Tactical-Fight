import { Unit } from "../classes/Unit";

export const getTeamPosition = (allUnits: Unit[], currentUnit: string) => {
  let unitPosition: number = 0;
  allUnits.map((unit) => {
    unit.id === currentUnit ? (unitPosition = allUnits.indexOf(unit)) : null;
  });
  return unitPosition;
};
