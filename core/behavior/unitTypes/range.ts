import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getAliveUnits } from "../../team/getAliveUnits";
import { getEnemyTeam } from "../../team/getEnemyTeam";
import { getSingleTarget } from "../../team/getSingleTarget";

export class Range implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getAliveUnits(getEnemyTeam(allUnits, currentUnit));
    return availableTargets;
  }

  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const enemies = this.getAvailableTargets(allUnits, currentUnit);
    const target = getSingleTarget(enemies, targetId);

    return target;
  }
}
