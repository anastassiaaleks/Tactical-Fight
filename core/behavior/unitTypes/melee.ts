import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getMeleeEnemy } from "../../team/getMeleeEnemy";
import { getMeleeTarget } from "../../team/getMeleeTarget";

export class Melee implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    return getMeleeEnemy(allUnits, currentUnit);
  }

  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const target = getMeleeTarget(allUnits, currentUnit, targetId);

    return target;
  }
}
