import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getAliveUnits } from "../../team/getAliveUnits";
import { getCurrentTeam } from "../../team/getCurrentTeam";
import { getSingleAlly } from "../../team/getSingleAlly";

export class HealerSingle implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getAliveUnits(
      getCurrentTeam(allUnits, currentUnit)
    );
    return availableTargets;
  }

  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const availableTargets = this.getAvailableTargets(allUnits, currentUnit);
    const target = getSingleAlly(availableTargets, targetId);

    return target;
  }
}
