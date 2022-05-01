import { Unit } from "../classes/Unit";

export interface ITypeBehavior {
  getTargets(allUnits: Unit[], currentUnit: string, targetId?: string): Unit[];
}
