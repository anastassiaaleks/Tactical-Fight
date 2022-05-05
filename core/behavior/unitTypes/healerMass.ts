import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getCurrentTeam } from "../../team/getCurrentTeam";

export class HealerMass implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getCurrentTeam(allUnits, currentUnit).filter(
      (target) => target.healthPoint > 0
    );

    return availableTargets;
  }

  getTargets(allUnits: Unit[], currentUnit: string) {
    const allies = this.getAvailableTargets(allUnits, currentUnit);
    return allies;
  }
}
