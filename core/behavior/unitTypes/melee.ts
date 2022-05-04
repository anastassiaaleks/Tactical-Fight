import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getMeleeTarget } from "../../team/getMeleeTarget";

export class Melee implements ITypeBehavior {
  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const target = getMeleeTarget(allUnits, currentUnit, targetId);

    return target;
  }
}
