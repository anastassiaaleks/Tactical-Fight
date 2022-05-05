import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getEnemyTeam } from "../../team/getEnemyTeam";
import { getMeleeEnemy } from "../../team/getMeleeEnemy";

export class Mage implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    return getEnemyTeam(allUnits, currentUnit);
  }

  getTargets(allUnits: Unit[], currentUnit: string) {
    const enemies = this.getAvailableTargets(allUnits, currentUnit);
    return enemies;
  }
}
