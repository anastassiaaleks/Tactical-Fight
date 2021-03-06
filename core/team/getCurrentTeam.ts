import { Unit } from "../classes/Unit";
import { getTeamPosition } from "./getTeamPosition";

export const getCurrentTeam = (allUnits: Unit[], currentUnit: string) => {
  const unitPosition = getTeamPosition(allUnits, currentUnit);
  const halfUnitLength = allUnits.length / 2;

  const allyTeam =
    unitPosition < halfUnitLength
      ? allUnits.slice(0, halfUnitLength)
      : allUnits.slice(halfUnitLength, allUnits.length);

  return allyTeam;
};
