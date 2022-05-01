import { Unit } from "../classes/Unit";
import { getTeamPosition } from "./getTeamPosition";

export const getMeleeEnemy = (allUnits: Unit[], currentUnit: string) => {
  const unitPosition = getTeamPosition(allUnits, currentUnit);

  const firstLine = [0, 1, 2];
  const secondLine = [3, 4, 5];
  const thirdLine = [6, 7, 8];
  const fourthLine = [9, 10, 11];

  if (secondLine.includes(unitPosition)) {
    return [];
  }

  if (firstLine.includes(unitPosition)) {
    const indexes =
      unitPosition === 1
        ? thirdLine
        : thirdLine.filter((e) => thirdLine.indexOf(e) !== unitPosition);

    const res = allUnits.filter((unit, i) => indexes.includes(i));

    return res;
  }
  return [];
};
