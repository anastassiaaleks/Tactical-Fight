import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";

export class Range implements ITypeBehavior {
  getTargets(allUnits: Unit[], currentUnit: string) {
    return allUnits;
  }
}
