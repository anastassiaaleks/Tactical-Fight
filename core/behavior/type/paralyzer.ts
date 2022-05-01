import { Unit } from "../../classes/Unit";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { getEnemyTeam } from "../../team/getEnemyTeam";

export class Paralyzer implements ITypeBehavior {
  getTargets(allUnits: Unit[], currentUnit: string) {
    const enemies = getEnemyTeam(allUnits, currentUnit);
    return enemies;
  }
}
