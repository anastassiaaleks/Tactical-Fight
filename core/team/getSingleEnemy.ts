import { Unit } from "../classes/Unit";
import { getEnemyTeam } from "./getEnemyTeam";

export const getSingleEnemy = (
  allUnits: Unit[],
  currentUnit: string,
  targetId: string | undefined
) => {
  const enemyTeam = getEnemyTeam(allUnits, currentUnit);
  const target = enemyTeam.filter((unit) => unit.id === targetId);

  return target;
};
