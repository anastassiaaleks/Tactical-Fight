import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getCurrentTeam } from "../../team/getCurrentTeam";
import { getSingleAlly } from "../../team/getSingleAlly";

export class HealerSingle implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getCurrentTeam(allUnits, currentUnit).filter(
      (target) => target.healthPoint > 0
    );

    return availableTargets;
  }

  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const target = getSingleAlly(allUnits, currentUnit, targetId);

    return target;
  }
}
