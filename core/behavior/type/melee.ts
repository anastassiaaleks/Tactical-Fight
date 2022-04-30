import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";

export class Melee implements ITypeBehavior {
  getTargets(allTargets: Unit[], currentUnit: Unit[]) {
    return allTargets;
  }
}
