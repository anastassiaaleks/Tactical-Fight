import { Unit } from "../../classes/Unit";
import { IActionBehavior } from "../../interfaces/actionBehavior";

export class Attack implements IActionBehavior {
  makeMove(enemies: Unit[], damageValue: number) {
    enemies.forEach((enemy) => {
      enemy.healthPoint =
        enemy.healthPoint - damageValue > 0
          ? 0
          : damageValue
          ? enemy.healthPoint - damageValue
          : 0;
    });
    return enemies;
  }
}
