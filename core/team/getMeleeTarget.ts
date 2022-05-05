import { Unit } from "../classes/Unit";

export const getMeleeTarget = (
  enemies: Unit[],
  targetId: string | undefined
) => {
  const target = enemies.filter((unit) => unit.id === targetId);

  return target;
};
