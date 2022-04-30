import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";

export class Mage implements ITypeBehavior {
  getTargets(allTargets: Unit[], currentUnit: Unit[]) {
    return allTargets;
  }
}
