import { Unit } from "../classes/Unit";

export interface ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string): Unit[];
  getTargets(allUnits: Unit[], currentUnit: string, targetId?: string): Unit[];
}
