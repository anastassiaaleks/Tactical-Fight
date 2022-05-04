import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getCurrentTeam } from "../../team/getCurrentTeam";

export class HealerMass implements ITypeBehavior {
  getTargets(allUnits: Unit[], currentUnit: string) {
    const allies = getCurrentTeam(allUnits, currentUnit);
    return allies;
  }
}
