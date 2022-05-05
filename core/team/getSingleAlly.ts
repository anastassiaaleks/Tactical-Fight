import { Unit } from "../classes/Unit";

export const getSingleAlly = (
  availableTargets: Unit[],
  targetId: string | undefined
) => {
  const target = availableTargets.filter((unit) => unit.id === targetId);

  return target;
};
