import { Unit } from "../classes/Unit";
import { getTeamPosition } from "./getTeamPosition";
import { includesAliveUnits } from "./includesAliveUnits";

export const getMeleeEnemy = (allUnits: Unit[], currentUnit: string) => {
  const unitPosition = getTeamPosition(allUnits, currentUnit);

  const firstLine = [0, 1, 2];
  const secondLine = [3, 4, 5];
  const thirdLine = [6, 7, 8];
  const fourthLine = [9, 10, 11];

  if (firstLine.includes(unitPosition)) {
    if (!includesAliveUnits(thirdLine, allUnits)) {
      const targets = allUnits.filter((unit, i) => fourthLine.includes(i));
      return targets;
    }

    const indexes =
      unitPosition === 1
        ? thirdLine
        : thirdLine.filter((e) => thirdLine.indexOf(e) !== unitPosition);

    const targets = allUnits.filter((unit, i) => indexes.includes(i));
    return targets;
  }

  if (secondLine.includes(unitPosition)) {
    if (includesAliveUnits(firstLine, allUnits)) {
      return [];
    }

    if (
      !includesAliveUnits(firstLine, allUnits) &&
      !includesAliveUnits(thirdLine, allUnits)
    ) {
      const targets = allUnits.filter((unit, i) => fourthLine.includes(i));
      return targets;
    }

    const targets = allUnits.filter((unit, i) => thirdLine.includes(i));
    return targets;
  }

  return [];
};
