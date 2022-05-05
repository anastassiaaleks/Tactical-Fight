import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getEnemyTeam } from "../../team/getEnemyTeam";

export class Paralyzer implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    return getEnemyTeam(allUnits, currentUnit);
  }

  getTargets(allUnits: Unit[], currentUnit: string) {
    const enemies = this.getAvailableTargets(allUnits, currentUnit);
    return enemies;
  }
}
