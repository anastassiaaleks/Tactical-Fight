import { Unit } from "../classes/Unit";

export const getAliveUnits = (units: Unit[]) => {
  const aliveUnits = units.filter((target) => target.healthPoint > 0);
  return aliveUnits;
};
