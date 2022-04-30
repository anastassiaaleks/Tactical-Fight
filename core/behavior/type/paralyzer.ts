import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";

export class Paralyzer implements ITypeBehavior {
  getTargets(allUnits: Unit[], currentUnit: Unit[]) {
    return allUnits;
  }
}
