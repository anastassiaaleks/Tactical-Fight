import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getAliveUnits } from "../../team/getAliveUnits";
import { getMeleeEnemy } from "../../team/getMeleeEnemy";
import { getMeleeTarget } from "../../team/getMeleeTarget";

export class Melee implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getAliveUnits(
      getMeleeEnemy(allUnits, currentUnit)
    );
    return availableTargets;
  }

  getTargets(
    allUnits: Unit[],
    currentUnit: string,
    targetId?: string | undefined
  ) {
    const enemies = this.getAvailableTargets(allUnits, currentUnit);
    const target = getMeleeTarget(enemies, targetId);

    return target;
  }
}
