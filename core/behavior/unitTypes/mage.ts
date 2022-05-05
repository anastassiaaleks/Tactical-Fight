import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getAliveUnits } from "../../team/getAliveUnits";
import { getEnemyTeam } from "../../team/getEnemyTeam";

export class Mage implements ITypeBehavior {
  getAvailableTargets(allUnits: Unit[], currentUnit: string) {
    const availableTargets = getAliveUnits(getEnemyTeam(allUnits, currentUnit));
    return availableTargets;
  }

  getTargets(allUnits: Unit[], currentUnit: string) {
    const enemies = this.getAvailableTargets(allUnits, currentUnit);
    return enemies;
  }
}
