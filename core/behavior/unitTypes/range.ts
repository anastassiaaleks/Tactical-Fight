import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getSingleEnemy } from "../../team/getSingleEnemy";

export class Range implements ITypeBehavior {
  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const target = getSingleEnemy(allUnits, currentUnit, targetId);

    return target;
  }
}
