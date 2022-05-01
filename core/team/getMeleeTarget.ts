import { Unit } from "../classes/Unit";
import { getMeleeEnemy } from "./getMeleeEnemy";

export const getMeleeTarget = (
  allUnits: Unit[],
  currentUnit: string,
  targetId: string | undefined
) => {
  const availableUnits = getMeleeEnemy(allUnits, currentUnit);
  const target = availableUnits.filter((unit) => unit.id === targetId);

  return target;
};
