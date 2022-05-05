import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getCurrentTeam } from "../../team/getCurrentTeam";
import { getAliveUnits } from "../../team/getAliveUnits";

export class HealerMass implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getAliveUnits(
      getCurrentTeam(allUnits, currentUnit)
    );
    return availableTargets;
  }

  getTargets(allUnits: Unit[], currentUnit: string) {
    const allies = this.getAvailableTargets(allUnits, currentUnit);
    return allies;
  }
}
