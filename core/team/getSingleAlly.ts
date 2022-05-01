import { Unit } from "../classes/Unit";
import { getCurrentTeam } from "./getCurrentTeam";

export const getSingleAlly = (
  allUnits: Unit[],
  currentUnit: string,
  targetId: string | undefined
) => {
  const allyTeam = getCurrentTeam(allUnits, currentUnit);
  const target = allyTeam.filter((unit) => unit.id === targetId);

  return target;
};
