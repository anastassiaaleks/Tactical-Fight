import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getEnemyTeam } from "../../team/getEnemyTeam";
import { getSingleEnemy } from "../../team/getSingleEnemy";

export class Range implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    return getEnemyTeam(allUnits, currentUnit);
  }

  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const target = getSingleEnemy(allUnits, currentUnit, targetId);

    return target;
  }
}
