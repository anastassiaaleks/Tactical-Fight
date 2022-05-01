import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getSingleAlly } from "../../team/getSingleAlly";

export class HealerSingle implements ITypeBehavior {
  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const target = getSingleAlly(allUnits, currentUnit, targetId);

    return target;
  }
}
