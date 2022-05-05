import { Unit } from "../classes/Unit";

export const includesAliveUnits = (line: number[], allUnits: Unit[]) => {
  const units = allUnits.filter((unit, i) => line.includes(i));

  for (let i = 0; i < units.length; i++) {
    if (units[i].healthPoint > 0) {
      return true;
    }
  }

  return false;
};
